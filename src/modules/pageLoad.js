// Arquivo para capturar o evento de quando a tela terminar de carregar os elementos e exibir os horários.

import { schedulesDay } from '../services/loadSchedule'

document.addEventListener('DOMContentLoaded', function () {
  schedulesDay()
})
