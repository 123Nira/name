const api = `https://randomuser.me/api`
const addUser=document.getElementById("user-btn")
const mainapp=document.getElementById("app")

addUser.addEventListener('click',async()=>{
const userData= await fetch(api,{
  method: "GET"
})
const userJson=await userData.json()
  console.log(userJson.results[0]);
  const userEl=document.createElement('div')
  const user = userJson.results[0];
 userEl.innerHTML=`<div>
 ${user.name.title}  ${user.name.first}  ${user.name.last}  
 </div>`
 mainapp.appendChild(userEl);
})