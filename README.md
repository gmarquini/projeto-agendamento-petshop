# 🐾 PetShop Scheduler — Sistema de Agendamentos

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![API](https://img.shields.io/badge/API-008000?style=for-the-badge&logo=fastapi&logoColor=white)

Sistema web para **agendamento de serviços de petshop**, desenvolvido em **JavaScript** com foco em organização, boas práticas e integração com API.  
O projeto possibilita registrar atendimentos, armazenar dados do tutor e do pet, listar horários e manter uma agenda dinâmica.

---

![alt text](src/assets/screenshot.png)

## Desenvolvedor

**Gabriel Marquini**  
Estudante de desenvolvimento web com foco em JavaScript.

---

## Tecnologias Utilizadas

### **Frontend**

- **HTML5** – estrutura da aplicação
- **CSS3** – estilização e layout responsivo
- **JavaScript (ES6+)** – lógica principal
- ES Modules (`import/export`)
- Manipulação do DOM
- Eventos (`addEventListener`)

### **APIs e Serviços**

- Consumo de **API local/JSON** para leitura e escrita dos agendamentos
- Utilização de `fetch()` com `async/await` para operações assíncronas

---

## Funcionalidades

- Cadastro completo de agendamento
- Máscara de telefone personalizada com limpeza automática
- Seleção de data e horário
- Validação e sanitização de campos
- Geração de ID único por timestamp
- Persistência via API
- Organização modular das funções
- Carregamento automático da agenda do dia

---

Organização pensada seguindo o princípio de **responsabilidade única**, garantindo manutenção fácil e código escalável.

---

## Aprendizados Durante o Desenvolvimento

### 🔹 JavaScript Avançado

- Uso de módulos ES6
- Manipulação detalhada do DOM
- Criação de máscaras manuais para inputs
- Funções puras, reutilizáveis e legíveis
- Validação e limpeza de dados do formulário

### 🔹 Arquitetura e Boas Práticas

- Estruturação modular
- Separação por pastas e responsabilidades
- Evitar `innerHTML` e priorizar criação dinâmica de elementos
- Fluxo de dados organizado

### 🔹 API e Assincronicidade

- Consumo de API via `fetch()`
- Tratamento de dados assíncronos com `async/await`
- Simulação de banco de dados JSON

### 🔹 UX e Interface

- Mensagens de erro claras
- Prevenção de submissões inválidas
- Máscaras e validações sem dependências externas
