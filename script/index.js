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

let mainImg=document.getElementById('mainIng');
const smallImg=document.getElementsByClassName('small-img');



smallImg[1].onclick=function(){

    mainImg.src=smallImg[1].src;
}
smallImg[0].onclick=function(){

    mainImg.src=smallImg[0].src;
}

smallImg[2].onclick=function(){

    mainImg.src=smallImg[2].src;
}

smallImg[3].onclick=function(){

    mainImg.src=smallImg[3].src;
}

