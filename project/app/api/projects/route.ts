import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const BASEROW_BASE_URL = "https://api.baserow.io/api/database/rows/table";

type BaserowProject = {
  id: number;
  Name: string;
  A?: string;
  B?: string;
  C?: string;
  D?: string;
};

export async function GET() {
  const tableId = process.env.BASEROW_PROJECTS_TABLE_ID;
  const token = process.env.BASEROW_API_TOKEN;

  if (!tableId || !token) {
    return NextResponse.json(
      { error: "Baserow configuration missing. Please set BASEROW_PROJECTS_TABLE_ID and BASEROW_API_TOKEN environment variables." },
      { status: 500 }
    );
  }

  const url = `${BASEROW_BASE_URL}/${tableId}/?user_field_names=true`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Baserow API error:", text);
      return NextResponse.json(
        { error: "Failed to fetch projects from Baserow" },
        { status: res.status }
      );
    }

    const json = await res.json();
    const rows: BaserowProject[] = json.results ?? json;

    // Filter out empty rows and map to projects format
    const projects = rows
      .filter(
        (row) =>
          row.Name &&
          row.Name.trim() !== ""
      )
      .map((row) => ({
        title: row.Name,
        description: row.A || "",
        technologies: (row.B || "")
          .split(",")
          .map((tech) => tech.trim())
          .filter((tech) => tech !== ""),
        github: row.C || "",
        demo: row.D || "",
      }));

    return NextResponse.json(projects, {
      headers: {
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=3600",
      },
    });
  } catch (error) {
    console.error("Error fetching from Baserow:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects from Baserow" },
      { status: 500 }
    );
  }
}
