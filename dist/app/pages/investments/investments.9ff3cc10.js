localStorage.getItem("loged")||(window.location.href="/gestao-financeira/index.html");const e=["Janeiro","Fevereiro","Março","Abril","Maio","Junho"],o=document.getElementById("investmentChart").getContext("2d"),t=document.getElementById("investmentInformation");$.ajax({url:"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=PETR4.SA&apikey=I67ROA0OG2A40859",type:"GET",success:function(a){let r=a["Meta Data"],n=a["Time Series (Daily)"],s=`
            <p><strong>S\xedmbolo:</strong> ${r["2. Symbol"]}</p>
            <p><strong>\xdaltima Atualiza\xe7\xe3o:</strong> ${r["3. Last Refreshed"]}</p>
            <p><strong>Time Zone:</strong> ${r["5. Time Zone"]}</p>
        `;t.innerHTML=s;let i=Object.keys(n).reverse().map(e=>parseFloat(n[e]["4. close"])).slice(0,6);new Chart(o,{type:"line",data:{labels:e.slice(0,6),datasets:[{label:"Preço de Fechamento",backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgba(54, 162, 235, 1)",borderWidth:1,data:i}]},options:{responsive:!0,scales:{y:{beginAtZero:!1}}}})},error:function(e){console.log("Erro ao carregar dados do segundo gráfico:",e)}});
//# sourceMappingURL=investments.9ff3cc10.js.map
