localStorage.getItem("loged")||(window.location.href="/gestao-financeira/index.html");const e=document.getElementById("nav-toggler-button"),t=document.getElementById("navbarNav");e.addEventListener("click",function(){t.classList.toggle("show")});const a=document.getElementById("input-title-id"),n=document.getElementById("input-description-id"),l=document.getElementById("input-value-id"),i=document.getElementById("select-type-id");document.getElementById("register-button").addEventListener("click",()=>{var e,t,o,c;if(!a.value||!l.value||!i.value){alert("Existe campos vazios");return}let r=(e=a.value.charAt(0).toUpperCase()+a.value.slice(1),t=l.value,o=i.value,c=n.value,{title:e,value:parseFloat(t.replace(/\./g,"").replace(",",".")),type:o,description:c,id:`${btoa(e)}`});$.ajax({url:"http://localhost:3000/finances",type:"POST",contentType:"application/json",data:JSON.stringify(r),success:function(){window.location.href="/gestao-financeira/app/pages/finances-list/finances-list.html"},error:function(e){alert("Erro ao cadastrar valor. Erro: "+e)}})}),l.addEventListener("input",e=>{var t;e.target.value=(((0,e.target.value).replace(/\D/g,"")/100).toFixed(2)+"").replace(".",",").replace(/(\d)(?=(\d{3})+\,)/g,"$1.")});
//# sourceMappingURL=register-finance.cf1968a9.js.map