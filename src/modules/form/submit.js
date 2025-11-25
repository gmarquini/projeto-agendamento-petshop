import { newSchedule } from '../schedules/newSchedule'
import { schedulesDay } from '../../services/loadSchedule'
import { getPhonenumber } from './phoneNumber'

export function submitForm() {
  // Seletores
  const inputOwnerName = document.getElementById('input-owner-name')
  const inputPetName = document.getElementById('input-pet-name')
  const phoneNumber = getPhonenumber()
  const description = document.getElementById('description')
  const date = document.getElementById('input-date')
  const time = document.getElementById('input-time')

  const form = document.getElementById('form')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    createSchedule()
  })

  function createSchedule() {
    try {
      const ownerNameValue = inputOwnerName.value.trim()
      const petNameValue = inputPetName.value.trim()
      const phoneValue = phoneNumber.value.trim()
      const descriptionValue = description.value.trim()
      const dateValue = date.value
      const timeValue = time.value

      if (
        !ownerNameValue ||
        !petNameValue ||
        !phoneValue ||
        !descriptionValue ||
        !dateValue ||
        !timeValue
      ) {
        alert('Preencha todos os campos!')
        return
      }

      const scheduleData = {
        id: String(Date.now()), // ID único
        name: ownerNameValue,
        petName: petNameValue,
        phone: phoneValue,
        service: descriptionValue,
        when: dateValue,
        hour: timeValue,
      }

      newSchedule(scheduleData)
      schedulesDay()
    } catch (error) {
      alert('Preencha os campos corretamente.')
      console.log(error)
    }
  }
}
