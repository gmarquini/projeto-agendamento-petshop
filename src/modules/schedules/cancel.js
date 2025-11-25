import { scheduleCancel } from '../../services/schedule-cancel.js'
import { schedulesDay } from '../../services/loadSchedule.js'

const listContainer = document.getElementById('list-container')

// Delegação de eventos
listContainer.addEventListener('click', async (event) => {
  if (event.target.classList.contains('remove')) {
    const item = event.target.closest('li')
    const { id } = item.dataset

    if (id) {
      const isConfirm = confirm(
        'Tem certeza que deseja cancelar o agendamento?'
      )

      if (isConfirm) {
        await scheduleCancel({ id })
        schedulesDay()
      }
    }
  }
})
