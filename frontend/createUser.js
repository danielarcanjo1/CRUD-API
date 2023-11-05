const form = document.querySelector('#myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  
  const inputName = document.querySelector('#name');
  const inputEmail = document.querySelector('#email');
  const InputPassword = document.querySelector('#password')
  
  
  const dados = {
    name: inputName.value,
    email: inputEmail.value,
    password: InputPassword.value,
    avatar: "foto.jpg"
  };
  
  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(dados) 
  })
  .then(response => {
    if (response.ok) {
      window.location.href = "confirmation.html"
    } else {
      console.error('Erro ao enviar os dados para a API.');
    }
  })
  .catch(error => {
    console.error('Erro na solicitação:', error);
  });

});

