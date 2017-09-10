const block = document.querySelector('#block');
block.style.position=`absolute`;

//drag'n drop

function dNd1(event){
/*(event.altKey)?*/ sli() /*:notSli();*/



    
    function sli(){
block.style.position=`absolute`;
block.style.zIndex = 1000;
block.style.backgroundColor=`red`;

document.addEventListener(`mousemove`,dNd2)}
}


function dNd2(event){block.style.left=event.pageX-block.offsetWidth/2+`px`;//offset отступ относиетльно внутренней границы объекта
block.style.top=event.pageY-block.offsetHeight/2+`px`;
}

block.addEventListener(`mousedown`,dNd1);

function dNd3(){block.style.backgroundColor=``;
    document.removeEventListener(`mousemove`,dNd2);
    }
block.addEventListener(`mouseup`,dNd3);
(function(){block.style.top=0+`px`;
function a(){return block.style.top= parseInt(block.style.top)+1+`px`};
setInterval(a,16)}())


/*function a(){return block.style.top= parseInt(block.style.top)+1+`px`};
setInterval(a,16)*/

/*let button =document.createElement(`button`);
button.textContent=`123`;
button.style.position=`absolute`;
button.style.top=0+`px`;
document.body.appendChild(button);

function a(){return button.style.top= parseInt(button.style.top)+1+`px`};
setInterval(a,16)*/
