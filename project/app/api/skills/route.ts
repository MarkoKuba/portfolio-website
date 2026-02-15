import { NextResponse } from "next/server";

// Ensure this route can be used with static HTML export
export const dynamic = "force-dynamic";

const BASEROW_BASE_URL = "https://api.baserow.io/api/database/rows/table";

type BaserowRow = {
  id: number;
  Name: string;
  A?: string;
  B?: string;
  C?: string;
  D?: string;
  E?: string;
};

export async function GET() {
  const tableId = process.env.BASEROW_TABLE_ID;
  const token = process.env.BASEROW_API_TOKEN;

  if (!tableId || !token) {
    return NextResponse.json(
      { error: "Baserow configuration missing. Please set BASEROW_TABLE_ID and BASEROW_API_TOKEN environment variables." },
      { status: 500 }
    );
  }

  const url = `${BASEROW_BASE_URL}/${tableId}/?user_field_names=true`;
  
  console.log("Calling Baserow with:", { url, tableId, tokenPresent: !!token }); 

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Token ${token}`,
      },
      // Use default caching so this can be statically exported
    });

    console.log("Baserow response status:", res.status);

    if (!res.ok) {
      const text = await res.text();
      console.error("Baserow API error:", text);
      return NextResponse.json(
        { error: "Failed to fetch skills from Baserow" },
        { status: res.status }
      );
    }

    const json = await res.json();
    console.log("Baserow raw json:", JSON.stringify(json, null, 2));
    const rows: BaserowRow[] = json.results ?? json;

    // Filter out:
    // - the title row ("Featured Skills")
    // - any rows with empty names (extra/placeholder rows)
    // then map to skills format
    const skills = rows
      .filter(
        (row) =>
          row.Name &&
          row.Name.trim() !== ""
      )
      .map((row) => ({
        name: row.Name,
        description: [row.A, row.B, row.C, row.D, row.E].filter(
          (item): item is string =>
            typeof item === "string" && item.trim() !== ""
        ),
      }));

    return NextResponse.json(skills, {
      // Cache for 1 hour, but allow stale data while revalidating
      headers: {
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=3600",
      },
    });
  } catch (error) {
    console.error("Error fetching from Baserow:", error);
    return NextResponse.json(
      { error: "Failed to fetch skills from Baserow" },
      { status: 500 }
    );
  }
}
