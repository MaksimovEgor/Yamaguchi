const button1 = document.getElementById('btn1')
const table = document.querySelector('.table__up-img')
const button2 = document.getElementById('btn2')

button1.addEventListener('click', () => {
  table.classList.add('selected__up')
})

button2.addEventListener('click', () => {
  table.classList.remove('selected__up')
})
