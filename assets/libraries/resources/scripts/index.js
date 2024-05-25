document.addEventListener('DOMContentLoaded', function() {
  const btnCadastrarDespesa = document.querySelector('#btnCadastrarDespesa');
  const btnCadastrarEntrada = document.querySelector('#btnCadastrarEntrada');
  const modal = document.querySelector('#expenseModal');
  const closeButton = document.querySelector('.close-button');
  const expenseValueInput = document.querySelector('#expenseValue');

  btnCadastrarDespesa.addEventListener('click', function() {
      modal.classList.add('show');
  });

  btnCadastrarEntrada.addEventListener('click', function() {
      modal.classList.add('show');
  });

  closeButton.addEventListener('click', function() {
      modal.classList.remove('show');
  });

  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.classList.remove('show');
      }
  });

  // Adiciona um evento de entrada para o campo de valor
  expenseValueInput.addEventListener('input', function() {
      let value = this.value.replace(/\D/g, '');
      value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      this.value = value;
  });
});
