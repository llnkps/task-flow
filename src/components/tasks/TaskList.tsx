import React from 'react';
import useTaskStore from '../../stores/taskStore';
import TaskCard from './TaskCard';

const TaskList: React.FC = () => {
  const tasks = useTaskStore((state) => state.tasks);

  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <p className="text-gray-500">No tasks. Add new task.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;