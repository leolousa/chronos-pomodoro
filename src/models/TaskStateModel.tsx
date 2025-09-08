import type { TaskModel } from './TaskModel'

export type TaskStateMoodel = {
  task: TaskModel[]
  secondsRemaining: number
  formattedSecondsRemaining: string
  activeTask: TaskModel | null
  currentCycle: number //1 a 8
  config: {
    workTime: number
    shortBreakTime: number
    longBreakeTime: number
  }
}
