import dayjs from 'dayjs'
import { fetchScheduleByDay } from './fetchSchedulesByDay.js'
import { schedulesShow } from '../modules/schedules/schedulesShow.js'

const selectedDate = document.getElementById('date')

// define a data inicial como hoje
selectedDate.value = dayjs().format('YYYY-MM-DD')

// carrega os agendamentos do dia atual ao abrir a página
schedulesDay()

// dispara quando o usuário escolhe uma nova data
selectedDate.addEventListener('change', schedulesDay)

export async function schedulesDay() {
  const date = selectedDate.value

  const dailySchedules = await fetchScheduleByDay({ date })

  schedulesShow({ dailySchedules })
}
