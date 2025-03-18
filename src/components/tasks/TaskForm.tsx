import React, {useState} from 'react';
import useTaskStore from '../../stores/taskStore';
import { TaskFormData } from '../../types';
import Button from '../ui/Button';

const TaskForm: React.FC = () => {
  const addTask = useTaskStore((state) => state.addTask);
  const [form, setForm] = useState<TaskFormData>({
    title: '',
    description: '',
    status: 'todo',
    priority: 'medium',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(form);
    setForm({
      title: '',
      description: '',
      status: 'todo',
      priority: 'medium',
    });
  };

  const labelStyles = "block text-gray-700 mb-2";
  const inputStyles = "w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow p-6"
    >
      <h2 className="text-xl font-bold mb-4">New task</h2>

      <div className="mb-4">
        <label className={labelStyles} htmlFor="title">
          Name
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
          className={inputStyles}
          required
        />
      </div>

      <div className="mb-4">
        <label className={labelStyles} htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={form.description || ''}
          onChange={handleChange}
          className={inputStyles}
          rows={3}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className={labelStyles} htmlFor="status">
            Status
          </label>
          <select
            id="status"
            name="status"
            value={form.status}
            onChange={handleChange}
            className={inputStyles}
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>

        <div>
          <label className={labelStyles} htmlFor="priority">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            value={form.priority}
            onChange={handleChange}
            className={inputStyles}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <Button type="submit" variant="primary" className="w-full">
        Add Task
      </Button>
    </form>
  )
}

export default TaskForm;