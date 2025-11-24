import { apiConfig } from './api-config.js'

export async function newSchedule({ name, petName, hour, service, when }) {
  try {
    // Gera um id seguro com o prefixo 'id-' para evitar a conversão automática.
    const id = `id-${Date.now()}`

    // Faz a requisição para enviar os dados do agendamento.
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, petName, hour, service, name, when }),
    })

    console.log(typeof id, id)

    // Exibe mensagem de agendamento realizado.
    alert('Agendamento realizado com sucesso.')
  } catch (error) {
    console.log(error)
    alert('Não foi possível agendar. Tente novamente mais tarde.')
  }
}
