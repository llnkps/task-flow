import {create} from 'zustand'
import {persist} from 'zustand/middleware'

const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [],

      addTask: (task) => set((state) => ({
        tasks: [...state.tasks, {...task, id: Date.now().toString()}]
      })),

      updateTask: (id, updatedTask) => set((state) => ({
        tasks: state.tasks.map(task =>
          task.id === id ? { ...task, ...updatedTask} : task
        )
      })),

      deleteTask: (id) => set((state) => ({
        tasks: state.tasks.filter(task => task.id !== id)
      })),
    }),
    {
      name: 'taskflow-storage',
    }
  )
)

export default useTaskStore