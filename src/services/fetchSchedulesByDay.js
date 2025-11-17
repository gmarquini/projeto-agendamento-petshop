import dayjs from 'dayjs'
import { apiConfig } from './apiConfig'

export async function fetchScheduleByDay({ date }) {
  try {
    // Requisição
    const response = await fetch(`${apiConfig.baseUrl}/schedules`)
    // Converte para json
    const data = await response.json()
  } catch (error) {
    console.log(error)
    alert('Não foi possível buscar o agendamento do dia selecionado.')
  }
}
