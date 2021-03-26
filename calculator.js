function calculate(e){
    const target=e.target;
    const displayarea=document.getElementById('displayarea');

    switch (target){
        case document.getElementById('zero'):
            //document.write("You Clicked on the number zero");
            displayarea.value+= 0;
            break;
        case document.getElementById('one'):
            displayarea.value+='1';
            break;
        case document.getElementById('two'):
            displayarea.value+='2';
            break;
        case document.getElementById('plus'):
            displayarea.value+='+';
            break;
        case document.getElementById('three'):
            displayarea.value+='3';
            break;
        case document.getElementById('four'):
            displayarea.value+='4';
            break;
        case document.getElementById('five'):
            displayarea.value+='5';
            break;  
        case document.getElementById('minus'):
            displayarea.value+='-';
            break;
        case document.getElementById('six'):
            displayarea.value+='6';
            break;
        case document.getElementById('seven'):
            displayarea.value+='7';
            break;
        case document.getElementById('eight'):
            displayarea.value+='8';
            break;
        case document.getElementById('multiply'):
            displayarea.value+='*';
            break;    
        case document.getElementById('nine'):
            displayarea.value+='9';
            break;
        case document.getElementById('clear'):
            displayarea.value='';
            break;
        case document.getElementById('equals'):
            displayarea.value=eval(displayarea.value);
            break;
        case document.getElementById('division'):
            displayarea.value+='/';
            break;
        case document.getElementById('decimaldot'):
            displayarea.value+='.'
            break;
        }
}

const holder=document.getElementById('holder');
holder.addEventListener('click',(e)=>{calculate(e);});