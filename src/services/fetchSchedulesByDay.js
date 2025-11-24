import dayjs from 'dayjs'
import { apiConfig } from './apiConfig.js'

export async function fetchScheduleByDay({ date }) {
  try {
    // Requisição
    const response = await fetch(`${apiConfig.baseUrl}/schedules`)

    // Converte para json
    const data = await response.json()

    // Filtra os agendamentos pelo dia selecionado.
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, 'day')
    )
    console.log(dailySchedules)
    return dailySchedules
  } catch (error) {
    console.log(error)
    alert('Não foi possível buscar o agendamento do dia selecionado.')
  }
}
/* 

"schedules": [
    {
      "id": "1",
      "time-start": "9",
      "time-end": "11",
      "pet": "Thor",
      "owner": "João",
      "service": "vacinação",
      "date": "18/11/2025"
    }
  ] 
*/
