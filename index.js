"use strict";

let loged;
let arrayMails = [];
const urlUsers = 'http://localhost:3000/users';
const urlFinances = 'http://localhost:3000/finances';

// Função autoexecutável
(function () {
  loged = false;
})();

// Acessando os elementos por getElementById()
$(document).ready(function () {
  $('.navbar-toggler').click(function () {
    $('#nav-bar').toggleClass('show');
  });
});

$.ajax({
  url: urlUsers,
  type: 'GET',
  success: function (data) {
    arrayMails = data.map(obj => { return { email: obj.email, password: obj.passwordMaster } });
  },
  error: function (error) {
    console.error('Erro ao carregar usuários:', error);
  }
});

document.getElementById('login-button').onclick = function () {
  // Acessando elemento por getElementsByName()
  const email = document.getElementsByName('email-input')[0].value.trim();
  // Acessando elemento apenas pelo Id
  const password = window["password-input"].value;

  arrayMails.forEach(user => {
    if (user.email == email && user.password == password) {
      window.location.href = '/gestao-financeira/app/pages/finances-list/finances-list.html';
      loged = true;
      const logedAtTime = {
        date: new Date(),
        email: user.email
      };
      localStorage.setItem('loged', loged);
      localStorage.setItem('logedAtTime', JSON.stringify(logedAtTime));
    }
  });
  if (!loged) alert('Email ou senha incorreto');

  document.getElementsByName('email-input')[0].value = '';
};

// Evento de formulário onfocus
$(document).ready(function () {
  let intervalId;

  $('input').on('click', function () {
    if (!intervalId) {
      createAlert('block');
      intervalId = setInterval(function () {
        createAlert($('#alert-box').css('display') === 'none' ? 'block' : 'none');
      }, 2000);
    }
  });

  $('input').on('blur', function () {
    clearInterval(intervalId);
    intervalId = null;
    createAlert('none');
  });
});

const createAlert = function (display) {
  let alertBox = $('#alert-box');
  const text = 'Crie uma senha forte!';
  if (display === 'block') {
    alertBox.text(text).fadeIn(300);
  } else {
    alertBox.fadeOut(300);
  }
};

const showAlert = function (alertFunction) {
  alertFunction('block');
  setTimeout(() => alertFunction('none'), 4000);
};

$(document).ready(() => {
  $('input').on('focus', () => {
    $(document).off('keypress').on('keypress', function (e) {
      if (e.which === 13) {
        $('#login-button').click();
      }
    });
  });
});

