import TaskList from '../components/tasks/TaskList';
import TaskForm from "../components/tasks/TaskForm";

const TasksPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">My tasks</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <TaskList />
        </div>

        <div className="md:col-span-1">
          <TaskForm />
        </div>
      </div>
    </div>
  );
};

export default TasksPage;