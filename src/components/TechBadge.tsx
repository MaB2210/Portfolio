// src/components/TechBadge.tsx
interface Props {
    label: string;
  }
  export default function TechBadge({ label }: Props) {
    return (
      <span className="text-xs bg-gray-900/70 border border-gray-700 rounded-full px-3 py-1 text-gray-200">
        {label}
      </span>
    );
  }
  