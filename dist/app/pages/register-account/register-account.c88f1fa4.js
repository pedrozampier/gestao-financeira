class e{constructor(e,t,n,a,o){this.name=e,this.email=t,this.passwordMaster=n,this.cpf=a,this.phone=o}userInfo(){return{name:this.name,email:this.email,passwordMaster:this.passwordMaster,cpf:this.cpf,phone:this.phone}}}const t=document.getElementById("nav-toggler-button"),n=document.getElementById("navbarNav");t.addEventListener("click",function(){n.classList.toggle("show")}),$(document).ready(function(){$('.form-control[placeholder="CPF"]').mask("000.000.000-00")}),$(document).ready(function(){$('.form-control[placeholder="Número de Telefone"]').mask("(00) 00000-0000")});const a=$(".form-control").children().prevObject;document.getElementById("register-button").addEventListener("click",()=>{let t;if(!a[0].value||!a[1].value||!a[2].value||!a[3].value||!a[4].value)return;let n=new e(a[0].value,a[1].value,a[2].value,a[3].value,a[4].value);$.ajax({url:"http://localhost:3000/users",type:"POST",contentType:"application/json",data:JSON.stringify(n),success:function(){t=prompt("Informe o código enviado ao seu celular")},error:function(e){alert(`Erro ao registrar: ${e}`)}}),"123"===t&&window.location.href("/gestao-financeira/app/pages/finances-list/finances-list.html")});
//# sourceMappingURL=register-account.c88f1fa4.js.map
