document.addEventListener('DOMContentLoaded', function() {
    const btnCadastrarDespesa = document.querySelector('#btnCadastrarDespesa');
    const btnCadastrarEntrada = document.querySelector('#btnCadastrarEntrada');
    const modal = document.querySelector('#expenseModal');
    const closeButton = document.querySelector('.close-button');
    const expenseValueInput = document.querySelector('#expenseValue');
    const expenseForm = document.querySelector('#expenseForm');
  
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
  
    // Evento de submissão do formulário
    expenseForm.addEventListener('submit', function(event) {
        event.preventDefault();
  
        // Obtém os valores dos campos do formulário
        const expenseTitle = document.querySelector('#expenseTitle').value;
        const expenseValue = document.querySelector('#expenseValue').value;
        const expenseType = document.querySelector('#expenseType').value;
  
        // Cria um objeto com os valores do formulário
        const expenseData = {
            title: expenseTitle,
            value: expenseValue,
            type: expenseType
        };
  
        // Obtém os dados existentes do local storage ou um array vazio se não houver dados
        let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  
        // Adiciona o novo dado ao array de despesas
        expenses.push(expenseData);
  
        // Salva o array atualizado no local storage
        localStorage.setItem('expenses', JSON.stringify(expenses));
  
        // Fecha o modal
        modal.classList.remove('show');
  
        // Reseta o formulário
        expenseForm.reset();
    });

    function formataDados(data){
        let timeSeries = data['Time Series (Daily)'];

        let dates = Object.keys(timeSeries).reverse();
        let values = dates.map(date => parseFloat(timeSeries[date]['4. close']));

        renderChart(dates, values);
    }

    let chart = echarts.init(document.getElementById('main'));

            // Função para buscar dados da API
            async function fetchData() {
                try {
                    let response = await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=PETR4.SA&apikey=I67ROA0OG2A40859');
                    let data = await response.json();
                    formataDados(data);

                    localStorage.setItem('dadosAcoes', JSON.stringify(data));

                } catch (error) {

                    let data = localStorage.getItem('dadosAcoes')

                    if(data){
                        formataDados(data);
                    }else{
                        console.error('Erro ao buscar dados da API:', error);
                    }
                }
            }

            // Função para renderizar o gráfico
            function renderChart(dates, values) {
                let option = {
                    title: {
                        text: 'Preço Diário da Ação PETR4.SA'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        data: dates
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: values,
                        type: 'line'
                    }]
                };

                chart.setOption(option);
            }

            // Chama a função para buscar e renderizar os dados
            fetchData();
  });
  