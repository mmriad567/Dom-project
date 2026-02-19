let suggest=document.querySelector('h5')
let addbutton=document.querySelector('#addbutton')
// let removebutton=document.querySelector('#removebutton')
let double=0;

addbutton.addEventListener('click',function(){
    if (double==0){
        suggest.innerHTML="Friend"
        suggest.style.color='green'
        addbutton.innerHTML="Remove"
        addbutton.style.backgroundColor="red"
        double=1

    }else{
        suggest.innerHTML="Suggest Friend"
        suggest.style.color='black'
        addbutton.innerHTML="Add Friend"
        addbutton.style.backgroundColor="blue"
        double=0
    }
})



// removebutton.addEventListener('click',function(){
//     suggest.innerHTML="Suggest Friend"
//     suggest.style.color='black'

// })