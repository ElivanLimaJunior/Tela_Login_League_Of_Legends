const inputs = document.querySelectorAll('.input'); // querySelectorAll por que será + de um input que iremos pegar.

//adicionando a class

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling; //Acessando o elemento anterior ao nosso target inicial que é o input. Assim chegamos no span.
  span.classList.add('span-active'); // adicionando a class a tag span
}

// removendo a class

const handleFocusOut = ({ target }) => {
  if (target.value === ''){  
    const span = target.previousElementSibling;
    span.classList.remove('span-active');  //removendo a class da nossa tag span
  }
}


//poderiamos fazer desse jeito, + é uma forma esquisita de fazer.
//inputs[0].addEventListener('click', () => console.log('testando'))


inputs.forEach((input) => input.addEventListener('focus', handleFocus)); //escutador de eventos (Foi usado para adicionarmos um evento no input).

inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut)); //fizemos essa mesma estrutura para trabalharmos na remoção do span.
