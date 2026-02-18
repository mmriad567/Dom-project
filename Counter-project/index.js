const count=document.querySelector('.count')
const minus=document.querySelector('.minus')
const plus=document.querySelector('.plus')
const reset=document.querySelector('.reset')

minus.addEventListener('click', () =>{
    const countValue=parseInt(count.innerText);
    count.innerText=countValue-1;
})

plus.addEventListener('click', () =>{
    
    count.innerText=parseInt(count.innerText)+1;
})

reset.addEventListener('click', () =>{
    
    count.innerHTML=0;
})