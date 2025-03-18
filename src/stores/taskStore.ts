import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Task, TaskFormData} from "../types"

interface TaskState
    tasks: Task[];
    addTask: (taskData: TaskFormData) => void;
    updateTask: (id: string, taskData: Partial<TaskFormData>) => void;
    deleteTask: (id: string) => void;
}

const useTaskStore =create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],

      addTask: (taskData: TaskFormData) => set((state) => {
        const newTask: Task = {
          ...taskData,
          id: Date.now().toString(),
          createdAt: new Date().toISOString(),
        };
        return { tasks: [...state.tasks, newTask] };
      }),

      updateTask: (id: string, taskData: Partial<TaskFormData>) => set((state) => ({
        tasks: state.tasks.map(task =>
        task.id === id ? {
          ...task,
          ...taskData,
          updateAt: new Date().toISOString(),
        } : task
        )
      })),

      deleteTask: (id: string) => set((state) => ({
        tasks: state.tasks.filter(task => task.id !== id)
      })),
    }),
    {
      name: 'taskflow-storage',
    }
  )
)

export default useTaskStore;