import dayjs from 'dayjs'
import { fetchScheduleByDay } from './fetchSchedulesByDay.js'
import { schedulesShow } from '../modules/schedules/schedulesShow.js'

const selectedDate = document.getElementById('date')
selectedDate.value = dayjs().format('YYYY-MM-DD')

export async function schedulesDay() {
  // Obtém a data do input
  const date = selectedDate.value

  // Busca na API os agendamentos.
  const dailySchedules = await fetchScheduleByDay({ date })

  // Exibe os agendamentos.
  schedulesShow({ dailySchedules })
}
