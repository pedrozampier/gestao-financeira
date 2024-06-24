'use strict';

const url = 'http://localhost:3000/users';
const navButton = document.getElementById('nav-toggler-button');
const navCollapse = document.getElementById('navbarNav');

navButton.addEventListener('click', function () {
  navCollapse.classList.toggle('show');
});

import { User } from "../../model/user.js";

$(document).ready(function () {
  $('.form-control[placeholder="CPF"]').mask('000.000.000-00');
});

$(document).ready(function () {
  $('.form-control[placeholder="Número de Telefone"]').mask('(00) 00000-0000');
});

const userValues = ($('.form-control').children()).prevObject;


const registerButton = document.getElementById('register-button');

registerButton.addEventListener('click', () => {
  if (!userValues[0].value || !userValues[1].value || !userValues[2].value || !userValues[3].value || !userValues[4].value) {
    return;
  }

  let code
  const payload = new User(
    userValues[0].value,
    userValues[1].value,
    userValues[2].value,
    userValues[3].value,
    userValues[4].value
  );

  $.ajax({
    url: url,
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(payload),
    success: function () {
      code = prompt('Informe o código enviado ao seu celular');
    },
    error: function (error) {
      alert(`Erro ao registrar: ${error}`);
    }
  });

  if (code === '123') {
    window.location.href('/gestao-financeira/app/pages/finances-list/finances-list.html')
  };
});