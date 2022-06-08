const inputs = document.querySelectorAll('.input'); // querySelectorAll por que será + de um input que iremos pegar.
const button = document.querySelector('.login__button'); // acessando o botão

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



const handleChange = () => {
  const [username, password] = inputs; // array destructor
  // escrever dessa forma seria o mesmo que declarar 2 variaveis = input[0] e input[1]

  // Condição para o desabled
  if (username.value && password.value.length >= 8) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', '');
  }
 // aqui passamos 2 parametros, estamos mudando o "disabled" por um valor vazio. Por exemplo, pode ser usado em uma imagem.
// ('disabled', 'teste');  Ficaria assim no HTMl: disabled="teste"
}


// Eventos

inputs.forEach((input) => input.addEventListener('focus', handleFocus)); 
//escutador de eventos (Foi usado para adicionarmos um evento no input).

inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut)); //fizemos essa mesma estrutura para trabalharmos na remoção do span.

inputs.forEach((input) => input.addEventListener('input', handleChange));
// 