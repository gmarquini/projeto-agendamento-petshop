import dayjs from 'dayjs'
import { apiConfig } from './apiConfig.js'

export async function fetchScheduleByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules`)
    const data = await response.json()

    const dailySchedules = data.filter((schedule) => {
      const scheduleDay = dayjs(schedule.when).format('YYYY-MM-DD')
      const selectedDay = dayjs(date).format('YYYY-MM-DD')

      return scheduleDay === selectedDay
    })

    return dailySchedules
  } catch (error) {
    console.log(error)
    alert('Não foi possível buscar o agendamento do dia selecionado.')
  }
}
