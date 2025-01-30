import { motion } from "framer-motion";
import { type LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  description: string[];
  icon: LucideIcon;
}

export function SkillCard({ name, description, icon: Icon }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="h-full p-6 rounded-xl border bg-card hover:bg-accent/10 transition-colors shadow-md hover:shadow-lg cursor-pointer"
    >
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-primary mr-3" />
        <h4 className="text-lg font-semibold">{name}</h4>
      </div>
      <ul className="list-disc list-inside space-y-1">
        {description.map((item, index) => (
          <li key={index} className="text-sm text-muted-foreground leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}