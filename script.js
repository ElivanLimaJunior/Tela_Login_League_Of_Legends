const inputs = document.querySelectorAll('.input'); // querySelectorAll por que será + de um input que iremos pegar.

const handleFocus = (event) => {
  console.log(event.target); // esse evento nós conseguimos acessar o target e ver o evento que disparou a ação. Veremos que ele printo o nosso input.
}


//poderiamos fazer desse jeito, + é uma forma esquisita de fazer.
//inputs[0].addEventListener('click', () => console.log('testando'))


inputs.forEach((input) => input.addEventListener('focus', handleFocus)) 

// Adicionando Class no nosso span dinamicamente.
// const handleFocus = ({ target }) => {
//     const span = target.previousElementSibling;
//     span.classList.add('span-active');
//   }

// inputs.forEach((input) => input.addEventListener('focus', handleFocus));