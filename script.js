const inputs = document.querySelectorAll('.input'); // querySelectorAll por que será + de um input que iremos pegar.

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling //Acessando o elemento anterior ao nosso target inicial que é o input. Assim chegamos no span.
  span.classList.add('span-active') // adicionando a class a tag span
}


//poderiamos fazer desse jeito, + é uma forma esquisita de fazer.
//inputs[0].addEventListener('click', () => console.log('testando'))


inputs.forEach((input) => input.addEventListener('focus', handleFocus)) 
