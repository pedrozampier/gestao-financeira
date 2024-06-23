'use strict';

const url = 'http://localhost:3000/finances';
const navButton = document.getElementById('nav-toggler-button');
const navCollapse = document.getElementById('navbarNav');

navButton.addEventListener('click', () => {
  navCollapse.classList.toggle('show');
});

const overlay = document.querySelector('.blur');

function warning() {
  alert('Ainda está aqui?');
  if (confirm('Deseja continuar na página?')) {
    overlay.style.display = 'none';
    setTimeout(applyBlur, 30000);
  } else {
    window.location.href = '/gestao-financeira/app/pages/finances-list/finances-list.html';
  }
}

const applyBlur = () => {
  overlay.style.display = 'block';
  setTimeout(warning, 100);
};

setTimeout(applyBlur, 5000);

window.onload = () => {
  const param = new URLSearchParams(window.location.search);
  let financeInfo;
  const paramId = param.get('id');

  $.ajax({
    url: `${url}/${paramId}`,
    type: 'GET',
    success: function (data) {
      financeInfo = data;
      let childElements = $('.register-section').children().children();

      childElements[0].textContent = financeInfo.title;
      $('#finance-value').html(`Valor: R$ ${financeInfo.value.toFixed(2)}`);
      childElements[2].value = financeInfo.type;
      childElements[3].textContent = financeInfo.description || 'Sem descrição';
    },
    error: function (error) {
      alert('Erro ao carregar dados. Erro: ' + error);
    }
  });
};

const financeInput = document.getElementById('finance-type');
$('#finance-type').addClass('cover');

$('#finance-type').on('mouseover', () => {
  $('#finance-type').removeClass('cover');
});

$('#finance-type').on('mouseout', () => {
  $('#finance-type').addClass('cover');
});
