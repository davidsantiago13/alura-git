//**querySelector */
const heading = document.querySelector('.header__texto h2'); // 0 o 1 elementos
heading.textContent = "Nuevo Titulo"

//**querySelectorAll */
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);   

enlaces[0].textContent = 'Nuevo Texto Para el enlace'
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('navegacion__enlace');


//**getElementById */

const heading2 = document.getElementById('heading')
console.log(heading2)