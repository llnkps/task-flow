import React from 'react';
import { Task, TaskStatus, TaskPriority } from '../../types';
import useTaskStore from '../../stores/taskStore';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const deleteTask = useTaskStore((state) => state.deleteTask);

  const statusColor: Record<TaskStatus, string> = {
    'todo': 'bg-yellow-100 text-yellow-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    'done': 'bg-green-100 text-green-800',
  };

  const priorityColors: Record<TaskPriority, string> = {
    low: 'bg-gray-100 text-gray-800',
    medium: 'bg-orange-100 text-orange-800',
    high: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <h3 className="font-medium text-lg">{task.title}</h3>
        <div className="flex gap-2">
          <button
            className="text-gray-500 hover:text-red-500"
            onClick={() => deleteTask(task.id)}
            type="button"
          >
            ✕
          </button>
        </div>
      </div>

      {task.description && (
        <p className="text-gray-600 mt-2">{task.description}</p>
      )}

      <div className="flex gap-2 mt-4">
        <span
          className={`px-2 py-1 rounded text-xs ${statusColor[task.status]}`}
        >
          {task.status}
        </span>

        <span
          className={`px-2 py-1 rounded text-xs ${priorityColors[task.priority]}`}
        >
          {task.priority}
        </span>
      </div>
    </div>
  )
}

export default TaskCard;