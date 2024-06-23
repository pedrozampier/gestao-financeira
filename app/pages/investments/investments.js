'use strict';

// Dados de exemplo para o gráfico
const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];
const data = [1500, 1800, 2000, 1700, 2100, 1900];

// URL da API da Alpha Vantage
const apiUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=PETR4.SA&apikey=I67ROA0OG2A40859';

// Elementos do DOM
const ctx = document.getElementById('investmentChart').getContext('2d');
const investmentInformationElem = document.getElementById('investmentInformation');

// Requisição AJAX para obter dados da API da Alpha Vantage
$.ajax({
    url: apiUrl,
    type: 'GET',
    success: function (response) {
        // Extrair dados relevantes da resposta da API
        const metaData = response['Meta Data'];
        const timeSeriesData = response['Time Series (Daily)'];

        // Informações adicionais sobre o investimento
        const investmentInformation = `
            <p><strong>Símbolo:</strong> ${metaData['2. Symbol']}</p>
            <p><strong>Última Atualização:</strong> ${metaData['3. Last Refreshed']}</p>
            <p><strong>Time Zone:</strong> ${metaData['5. Time Zone']}</p>
        `;
        investmentInformationElem.innerHTML = investmentInformation;

        // Preparar dados para o gráfico
        const dates = Object.keys(timeSeriesData).reverse(); // Obter as datas em ordem decrescente
        const closingPrices = dates.map(date => parseFloat(timeSeriesData[date]['4. close'])).slice(0, 6); // Obter os preços de fechamento das últimas 6 datas

        // Renderizar o gráfico com os dados obtidos
        renderChart(labels.slice(0, 6), closingPrices);
    },
    error: function (error) {
        console.log('Erro ao carregar dados do segundo gráfico:', error);
    }
});

// Função para renderizar o gráfico com Chart.js
function renderChart(labels, data) {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Preço de Fechamento',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                data: data
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}
