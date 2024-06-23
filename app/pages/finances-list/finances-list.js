'use strict';

if (!localStorage.getItem('loged')) window.location.href = '/index.html';

const url = 'http://localhost:3000/finances';
const navButton = document.getElementById('nav-toggler-button');
const navCollapse = document.getElementById('navbarNav');

navButton.addEventListener('click', function () {
    navCollapse.classList.toggle('show');
});

function createBlock(title_content, value_content, type_content, id) {
    let main_div = document.querySelector('.main');
    let new_div = document.createElement('div');
    let new_link = document.createElement('a');

    new_link.setAttribute('href', `/app/pages/finance/finance.html?id=${id}`);
    new_link.classList.add('block-link');
    new_div.classList.add('block');

    let title = document.createElement('h3');
    title.textContent = title_content;

    let value = document.createElement('p');
    value.textContent = `Valor: R$ ${value_content.toFixed(2)}`;

    let type = document.createElement('p');
    type.textContent = `Tipo: ${type_content}`;

    new_div.appendChild(title);
    new_div.appendChild(value);
    new_div.appendChild(type);

    new_link.appendChild(new_div);
    main_div.appendChild(new_link);
}

window.onload = () => {
    $.ajax({
        url: url,
        type: 'GET',
        success: function (data) {
            data.forEach(element => {
                createBlock(element.title, element.value, element.type, element.id);
            });
            renderChart(data);
        },
        error: function (error) {
            alert('Erro ao carregar valores. Erro: ' + error);
        }
    });
};

const submitButton = document.getElementById('submit-button');
submitButton.onclick = () => {
    alert('Teste');
}

function renderChart(data) {
    const ctx = document.getElementById('financeChart').getContext('2d');
    const financeTitles = data.map(finance => finance.title);
    const financeValues = data.map(finance => finance.value);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: financeTitles,
            datasets: [{
                label: 'Valores das Contas',
                data: financeValues,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
