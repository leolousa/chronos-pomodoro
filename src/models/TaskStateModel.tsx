import type { TaskModel } from './TaskModel'

// Estado -> Componente -> Filhos

export type TaskStateMoodel = {
  task: TaskModel[] // Precisamos ele no histórico , MainForm
  secondsRemaining: number // Home, CountDown, Histórico, MainForm, Button
  formattedSecondsRemaining: string //Título, CountDown
  activeTask: TaskModel | null //CountDown, Histórico, MainForm, Button
  currentCycle: number //1 a 8 na Home
  config: {
    workTime: number // MainForm
    shortBreakTime: number // MainForm
    longBreakeTime: number // MainForm
  }
}
