import dayjs from 'dayjs'
import { submitForm } from './submit'

const newScheduleButton = document.getElementById('new-schedule-button')
const modalSpace = document.getElementById('modal-space')

newScheduleButton.addEventListener('click', (event) => {
  event.preventDefault()
  openModalForm()
})

function openModalForm() {
  document.body.style.overflow = 'hidden' // bloqueia o scroll quando o modal estiver aberto.

  const modalHtml = `<div class="modal">
          <form id='form' action="post">
            <div class="header">
              <h1>Agende um atendimento</h1>
              <p>Preencha os dados do cliente para realizar o agendamento:</p>
            </div>
            <!-- INPUTS -->
            <label for="input-owner-name">Nome do tutor</label>
            <input
              type="text"
              name="input-owner-name"
              id="input-owner-name"
              placeholder="Helena Souza"
              required
            />
            <label for="input-pet-name">Nome do pet</label>
            <input
              type="text"
              name="input-pet-name"
              id="input-pet-name"
              placeholder="Cheddar"
              required
            />
            <label for="phone-number">Telefone</label>
            <input
              type="text"
              name="phone-number"
              id="phone-number"
              placeholder="(00) 0 000-0000"
              required
            />
            <label for="description">Descrição do serviço</label>
            <textarea
              name="description"
              id="description"
              placeholder="Insira a descrição aqui."
              required
            ></textarea>
            <div>
              <label for="input-date">Data</label>
              <input type="date" name="input-date" id="input-date" required />
              <label for="input-time">Hora</label>
              <input
                type="time"
                value="08:00"
                name="input-time"
                id="input-time"
                required
              />
            </div>
            <button type="submit">AGENDAR</button>
          </form>
        </div>`

  // cria o overlay do modal
  const modalOverlay = document.createElement('div')
  modalOverlay.classList.add('modal-overlay')
  modalSpace.append(modalOverlay)

  // cria o container
  const modal = document.createElement('div')
  modal.innerHTML = modalHtml
  modalOverlay.append(modal)

  modal.addEventListener('click', (event) => {
    // impede que o clique do pai (modalOverlay) se propague para o filho (modal)
    event.stopPropagation()
  })

  modalOverlay.addEventListener('click', (event) => {
    modalOverlay.classList.add('hide-animation')

    setTimeout(() => {
      modalSpace.innerHTML = ''
      document.body.style.overflow = 'hidden'
    }, 250)
  })

  // Define a data de hoje como valor padrão do input-date.
  const inputDate = document.getElementById('input-date')
  inputDate.value = dayjs().format('YYYY-MM-DD')

  submitForm()
}
