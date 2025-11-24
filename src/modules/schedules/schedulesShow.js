import dayjs from 'dayjs'

const listContainer = document.getElementById('list-container')

// chama a função de construção para cada agendamento no banco de dados.
export function schedulesShow({ dailySchedules }) {
  try {
    listContainer.innerHTML = ''

    dailySchedules
      // ordena os agendamentos por horário antes de carregar na tela.
      .sort((a, b) => a.hour.localeCompare(b.hour))
      // renderiza os horários.
      .forEach((schedule) => {
        const li = createSchedule(schedule)
        listContainer.appendChild(li)
      })
  } catch (error) {
    console.log('Não foi possível exibir os agendamentos:', error)
  }
}

// Constrói o elemento.

function createSchedule(schedule) {
  const li = document.createElement('li')
  li.classList.add('schedule-container')

  const header = createHeader(schedule)
  const content = createScheduleContent(schedule)

  li.append(header, content)
  return li
}

function createHeader(schedule) {
  const header = document.createElement('header')

  const dayDiv = document.createElement('div')
  dayDiv.classList.add('day')

  const title = document.createElement('h2')
  title.textContent = schedule.hour

  // Hora

  const time = schedule.hour
  const slicedTime = Number(time.slice(0, 2))

  // Período do dia.
  const h2 = document.createElement('h2')

  const img = document.createElement('img')
  if (slicedTime >= 8 && slicedTime < 12) {
    img.src = 'src/assets/icons/morning-icon.svg'
    h2.textContent = 'Manhã'
  } else if (slicedTime >= 12 && slicedTime < 19) {
    img.src = 'src/assets/icons/afternoon-icon.svg'
    h2.textContent = 'Tarde'
  } else if (slicedTime >= 19 && slicedTime < 22) {
    img.src = 'src/assets/icons/night-icon.svg'
    h2.textContent = 'Noite'
  }

  header.append(dayDiv, title)
  dayDiv.append(img, h2)
  return header
}

function createScheduleContent(schedule) {
  const wrapper = document.createElement('div')
  wrapper.classList.add('schedule')

  // Hora
  const time = document.createElement('div')
  time.classList.add('schedule-time')
  time.textContent = schedule.hour

  // Cliente + Pet
  const client = document.createElement('div')
  client.classList.add('schedule-client')
  client.innerHTML = `
    <span class="pet-name">${schedule.petName}</span> /
    <span class="owner-name">${schedule.name}</span>
  `

  // Serviço
  const service = document.createElement('div')
  service.classList.add('service')
  service.textContent = schedule.service || 'Serviço não informado'

  // Botão de remover
  const remove = document.createElement('div')
  remove.classList.add('remove')
  remove.textContent = 'Remover agendamento'

  wrapper.append(time, client, service, remove)
  return wrapper
}
