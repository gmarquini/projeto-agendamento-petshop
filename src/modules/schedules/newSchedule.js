import { apiConfig } from '../../services/apiConfig'

export async function newSchedule(scheduleData) {
  try {
    console.log('newSchedule rodado!')
    // Gera um id seguro com o prefixo 'id-' para evitar a conversão automática.
    const id = `id-${Date.now()}`

    // Desestruturação da variável enviada para receber os dados separadamente.
    const { name, petName, phone, service, when, hour } = scheduleData

    // Faz a requisição para enviar os dados do agendamento.
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, petName, phone, service, when, hour }),
    })

    // Exibe mensagem de agendamento realizado.
    alert('Agendamento realizado com sucesso.')
  } catch (error) {
    console.log(error)
    alert('Não foi possível agendar. Tente novamente mais tarde.')
  }
}
