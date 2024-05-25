document.addEventListener('DOMContentLoaded', function() {
  const loginCard = document.getElementById('login-card');
  const registerCard = document.getElementById('register-card');
  const showRegisterBtn = document.getElementById('show-register');
  const showLoginBtn = document.getElementById('show-login');
  const loginBtn = document.getElementById('login-btn');
  const registerBtn = document.getElementById('register-btn');

  // Mostra o formulário de criar conta e esconde o formulário de login
  showRegisterBtn.addEventListener('click', function() {
      loginCard.style.display = 'none';
      registerCard.style.display = 'block';
  });

  // Mostra o formulário de login e esconde o formulário de criar conta
  showLoginBtn.addEventListener('click', function() {
      registerCard.style.display = 'none';
      loginCard.style.display = 'block';
  });

  // Criação de conta
  registerBtn.addEventListener('click', function(event) {
      event.preventDefault();
      const newUsername = document.getElementById('new-username').value;
      const newPassword = document.getElementById('new-password').value;
      const newUser = { username: newUsername, password: newPassword };
      
      // Verifica se o usuário já existe
      let users = JSON.parse(localStorage.getItem('users')) || [];
      const existingUser = users.find(user => user.username === newUsername);
      if (existingUser) {
          alert('Usuário já existe!');
      } else {
          users.push(newUser);
          localStorage.setItem('users', JSON.stringify(users));
          alert('Usuário criado com sucesso!');
          loginCard.style.display = 'block';
          registerCard.style.display = 'none';
          document.getElementById('username').value = newUsername;
          document.getElementById('password').value = newPassword;
      }
  });

  // Login
  loginBtn.addEventListener('click', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      let users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
          alert('Login bem-sucedido!');
          window.location.href = '/gestao-financeira/index.html';
      } else {
          alert('Usuário ou senha inválidos!');
      }
  });
});
