// This UI component defines how a TaskCard looks like

import React from "react";

// defining the structure of the properties that the
// TaskCard would accept
interface TaskCardProps {
  title: string;
  description: string;
}

export default function TaskCard({ title, description }: TaskCardProps) {
  return (
    <div className="border p-4 rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
