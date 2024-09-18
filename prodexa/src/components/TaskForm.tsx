// We want to allow users to create new tasks by submitting a form. This form will ask for a task's title and description, and when submitted, the new task will appear in the task list.

import React, { useState } from "react";

interface TaskFormProps {
  onSubmit: (title: string, description: string) => void;
}

export default function TaskForm({ onSubmit }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description) {
      onSubmit(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // Update title state when user types
          className="border p-2 w-full"
          placeholder="Enter task title"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)} // Update description state when user types
          className="border p-2 w-full"
          placeholder="Enter task description"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Task
      </button>
    </form>
  );
}
