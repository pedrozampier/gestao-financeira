const e=document.getElementById("nav-toggler-button"),t=document.getElementById("navbarNav");e.addEventListener("click",()=>{t.classList.toggle("show")});const n=document.querySelector(".blur");function o(){alert("Ainda está aqui?"),confirm("Deseja continuar na página?")?(n.style.display="none",setTimeout(a,3e4)):window.location.href="/gestao-financeira/app/pages/finances-list/finances-list.html"}const a=()=>{n.style.display="block",setTimeout(o,100)};setTimeout(a,5e3),window.onload=()=>{let e;let t=new URLSearchParams(window.location.search).get("id");$.ajax({url:`http://localhost:3000/finances/${t}`,type:"GET",success:function(t){e=t;let n=$(".register-section").children().children();n[0].textContent=e.title,$("#finance-value").html(`Valor: R$ ${e.value.toFixed(2)}`),n[2].value=e.type,n[3].textContent=e.description||"Sem descrição"},error:function(e){alert("Erro ao carregar dados. Erro: "+e)}})},document.getElementById("finance-type"),$("#finance-type").addClass("cover"),$("#finance-type").on("mouseover",()=>{$("#finance-type").removeClass("cover")}),$("#finance-type").on("mouseout",()=>{$("#finance-type").addClass("cover")});
//# sourceMappingURL=finance-inspect.7b2a12de.js.map
