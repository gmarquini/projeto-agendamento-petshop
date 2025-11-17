import { apiConfig } from './apiConfig.js'

export async function fetchScheduleByDay() {
  try {
    // Requisição
    const response = await fetch(`${apiConfig.baseUrl}/schedules`)
    // Converte para json
    const data = await response.json()
    console.log(data)

    return data
  } catch (error) {
    console.log(error)
    alert('Não foi possível buscar o agendamento do dia selecionado.')
  }
}

fetchScheduleByDay()
