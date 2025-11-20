const modalForm = document.getElementById('modal-form')
const page = document.getElementById('page')

modalForm.addEventListener('click', (event) => {
  openModalForm()
})

function openModalForm() {
  document.body.style.overflow = 'hidden' // bloqueia o scroll quando o modal estiver aberto.

  // cria o overlay do modal
  const modalOverlay = document.createElement('div')
  modalOverlay.classList.add('modal-overlay')
  page.append(modalOverlay)

  // cria o container
  const modalContainer = document.createElement('div')
  modalContainer.classList.add('.modal')
  modalOverlay.append(modalContainer)

  console.log('Botão clicado!')
}
