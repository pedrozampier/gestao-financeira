const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;
    recarregar(value);
    button.disabled = true;
    setTimeout(() => {
      button.disabled = false;
    }, 5000);
  });
});

function recarregar(value) {
  console.log(`Recarga de R$${value},00 via Pix`);
  alert(`Recarga de R$${value},00 realizada com sucesso via Pix!`);
}
