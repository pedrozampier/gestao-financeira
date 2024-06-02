document.addEventListener('DOMContentLoaded', function() {
  // Função para obter dados do local storage
  function getExpenseData() {
      return JSON.parse(localStorage.getItem('expenses')) || [];
  }

  // Configuração do gráfico principal
  function renderMainChart(data) {
      const chartDom = document.getElementById('mainChart');
      const myChart = echarts.init(chartDom);
      const option = {
          title: {
              text: 'Despesas e Entradas',
              left: 'center'
          },
          tooltip: {
              trigger: 'axis'
          },
          legend: {
              data: ['Despesas', 'Entradas'],
              top: '10%'
          },
          xAxis: {
              type: 'category',
              data: data.map(item => item.title)
          },
          yAxis: {
              type: 'value'
          },
          series: [
              {
                  name: 'Despesas',
                  type: 'bar',
                  data: data.filter(item => item.type === '1').map(item => parseFloat(item.value.replace(/\./g, '')))
              },
              {
                  name: 'Entradas',
                  type: 'bar',
                  data: data.filter(item => item.type === '2').map(item => parseFloat(item.value.replace(/\./g, '')))
              }
          ]
      };

      myChart.setOption(option);
  }

  // Configuração do gráfico por tipo
  function renderTypeChart(data) {
      const chartDom = document.getElementById('typeChart');
      const myChart = echarts.init(chartDom);
      const totalDespesas = data.filter(item => item.type === '1').reduce((sum, item) => sum + parseFloat(item.value.replace(/\./g, '')), 0);
      const totalEntradas = data.filter(item => item.type === '2').reduce((sum, item) => sum + parseFloat(item.value.replace(/\./g, '')), 0);
      
      const option = {
          title: {
              text: 'Distribuição de Despesas e Entradas',
              left: 'center'
          },
          tooltip: {
              trigger: 'item'
          },
          legend: {
              top: '10%'
          },
          series: [
              {
                  name: 'Tipo',
                  type: 'pie',
                  radius: '50%',
                  data: [
                      { value: totalDespesas, name: 'Despesas' },
                      { value: totalEntradas, name: 'Entradas' }
                  ]
              }
          ]
      };

      myChart.setOption(option);
  }

  // Obtém os dados do local storage
  const expenseData = getExpenseData();

  // Renderiza os gráficos
  renderMainChart(expenseData);
  renderTypeChart(expenseData);
});
