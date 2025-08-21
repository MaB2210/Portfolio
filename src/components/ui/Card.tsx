// src/components/ui/Card.tsx
import { ReactNode } from "react";

export interface CardProps {
  className?: string;
  children: ReactNode;
}

export function Card({ className = "", children }: CardProps) {
  return (
    <div className={`rounded-2xl bg-gray-800/80 border border-gray-700 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children }: CardProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
