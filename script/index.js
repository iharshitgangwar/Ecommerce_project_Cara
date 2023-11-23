const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const closes=document.getElementById('close');
if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if (closes){
    closes.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}