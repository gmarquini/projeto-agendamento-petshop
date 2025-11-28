export function getPhoneNumber() {
  // máscara do input de telefone.
  const inputTelefone = document.getElementById('phone-number')

  inputTelefone.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '') // remove tudo que não é número

    if (v.length > 11) v = v.slice(0, 11)

    if (v.length >= 7) {
      e.target.value = `(${v.slice(0, 2)}) ${v.slice(2, 7)} ${v.slice(7)}`
    } else if (v.length >= 3) {
      e.target.value = `(${v.slice(0, 2)}) ${v.slice(2)}`
    } else {
      e.target.value = v
    }
  })

  function cleanPhoneNumber(number) {
    return number.replace(/\D/g, '')
  }
  return cleanPhoneNumber(inputTelefone.value)
}
