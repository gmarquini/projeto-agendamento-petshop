import dayjs from 'dayjs'

const listContainer = document.getElementById('list-container')

export function schedulesShow({ dailySchedules }) {
  try {
    console.log('schedulesShow funcionando!')
    listContainer.innerHTML = ''

    dailySchedules.forEach((schedule) => {
      const li = createScheduleItem(schedule)
      listContainer.appendChild(li)
    })
  } catch (error) {
    console.log('Não foi possível exibir os agendamentos:', error)
  }
}

function createScheduleItem(schedule) {
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
  title.textContent = dayjs(schedule.when).format('HH:mm')

  // Hora

  const time = dayjs(schedule.when).format('HH:mm')
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

  console.log(typeof slicedTime, slicedTime)

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
  time.textContent = dayjs(schedule.when).format('HH:mm')

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
  remove.classList.add('remove-schedule')
  remove.textContent = 'Remover agendamento'

  wrapper.append(time, client, service, remove)
  return wrapper
}

/*
          <li class="schedule-container">

            <header>
              <div class="day">
                <img
                  src="src/assets/icons/morning-icon.svg"
                  alt="ícone de manhã"
                />
                <h2>Manhã</h2>
              </div>
              <h2>09h-12h</h2>
            </header>

            <div class="schedule">
              <div class="schedule-time">9:00</div>
              <div class="schedule-client">
                <span class="pet-name">Thor</span>
                <span class="pet-owner">Fernanda Costa</span>
              </div>
              <div class="service">Vacinação</div>

              <div class="remove">Remover agendamento</div>
            </div>

          </li>
*/
