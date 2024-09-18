//Creating a UI component that is responsible to displaying the tasks
import React from "react";
import TaskCard from "./TaskCard";

// defining a structure of props for the component
interface Task {
  id: string;
  title: string;
  description: string;
}

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          title={task.title}
          description={task.description}
        />
      ))}
    </div>
  );
}
