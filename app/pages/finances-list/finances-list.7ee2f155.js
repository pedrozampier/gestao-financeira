localStorage.getItem("loged")||(window.location.href="/index.html");const e=document.getElementById("nav-toggler-button"),t=document.getElementById("navbarNav");e.addEventListener("click",function(){t.classList.toggle("show")}),window.onload=()=>{$.ajax({url:"http://localhost:3000/finances",type:"GET",success:function(e){var t;e.forEach(e=>{var t,a,n,o;let l,d,r,c,i,s;t=e.title,a=e.value,n=e.type,o=e.id,l=document.querySelector(".main"),d=document.createElement("div"),(r=document.createElement("a")).setAttribute("href",`/app/pages/finance/finance.html?id=${o}`),r.classList.add("block-link"),d.classList.add("block"),(c=document.createElement("h3")).textContent=t,(i=document.createElement("p")).textContent=`Valor: R$ ${a.toFixed(2)}`,(s=document.createElement("p")).textContent=`Tipo: ${n}`,d.appendChild(c),d.appendChild(i),d.appendChild(s),r.appendChild(d),l.appendChild(r)}),t=e,new Chart(document.getElementById("financeChart").getContext("2d"),{type:"bar",data:{labels:t.map(e=>e.title),datasets:[{label:"Valores das Contas",data:t.map(e=>e.value),backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgba(54, 162, 235, 1)",borderWidth:1}]},options:{responsive:!0,scales:{y:{beginAtZero:!0}}}})},error:function(e){alert("Erro ao carregar valores. Erro: "+e)}})},document.getElementById("submit-button").onclick=()=>{alert("Teste")};
//# sourceMappingURL=finances-list.7ee2f155.js.map
