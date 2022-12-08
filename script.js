let count=0;

let dec=document.querySelector('body > div.choice > button.decrease');
let reset=document.querySelector('body > div.choice > button.reset');
let inc=document.querySelector('body > div.choice > button.increase');
let counter=document.querySelector('.counter');

function displayDecrease(){
    counter.innerHTML=count-1;
    count--;
    if(count<0){
        counter.style.color='red';
    }
}

function displayReset(){
    counter.innerHTML=0;
    count=0;
    if(count==0){
        counter.style.color='rgb(62, 151, 180)';
    }
}

function displayIncrease(){
    counter.innerHTML=count+1;
    count++;
    if(count==0){
        counter.style.color='rgb(62, 151, 180)';
    }
    if(count>0){
        counter.style.color='green';
    }
}

dec.addEventListener('click',displayDecrease);
reset.addEventListener('click',displayReset);
inc.addEventListener('click',displayIncrease);
