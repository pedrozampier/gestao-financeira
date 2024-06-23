'use strict';

if (!localStorage.getItem('loged')) window.location.href = '/index.html';

const url = 'http://localhost:3000/finances';
const navButton = document.getElementById('nav-toggler-button');
const navCollapse = document.getElementById('navbarNav');

navButton.addEventListener('click', function () {
    navCollapse.classList.toggle('show');
});

const registerFinance = function (title, value, type, description) {
    return {
        title: title,
        value: parseFloat(value.replace(/\./g, '').replace(',', '.')),
        type: type,
        description: description,
        id: `${btoa(title)}`
    };
};

const titleData = document.getElementById('input-title-id');
const description = document.getElementById('input-description-id');
const valueData = document.getElementById('input-value-id');
const typeData = document.getElementById('select-type-id');

const generateButton = document.getElementById('register-button');

generateButton.addEventListener('click', () => {
    if (!titleData.value || !valueData.value || !typeData.value) {
        alert('Existe campos vazios');
        return;
    }
    const title = titleData.value.charAt(0).toUpperCase() + titleData.value.slice(1);
    const newFinance = registerFinance(title, valueData.value, typeData.value, description.value);

    $.ajax({
        url: url,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(newFinance),
        success: function () {
            window.location.href = '/app/pages/finances-list/finances-list.html';
        },
        error: function (error) {
            alert('Erro ao cadastrar valor. Erro: ' + error);
        }
    });
});

valueData.addEventListener('input', (e) => {
    e.target.value = formatReal(e.target.value);
});

function formatReal(value) {
    value = value.replace(/\D/g, '');
    value = (value / 100).toFixed(2) + '';
    value = value.replace('.', ',');
    value = value.replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
    return value;
}
