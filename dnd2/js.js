const block = document.querySelector('#block');
let offset;
let dndMode = false;


/*(event.altKey)?*/ sli() /*:notSli();*/



/*function notSli(){alert(`dNd`)};*/
    
    function sli(){
block.style.position=`absolute`;
block.style.zIndex = 1000;
block.style.backgroundColor = `red`;
document.addEventListener(`mousemove`,dNd2)}
}


function dNd2(event){block.style.left=event.pageX-block.offsetWidth/2+`px`;//offset отступ относиетльно внутренней границы объекта
block.style.top=event.pageY-block.offsetHeight/2+`px`;
}

block.addEventListener(`mousedown`,dNd1);

function dNd3(){buttonD.style.backgroundColor = ``;
    document.removeEventListener(`mousemove`,dNd2);
    }
block.addEventListener(`mouseup`,dNd3);
document.body.appendChild(block);


/*
block.addEventListener('mousedown', ev => {
    dndMode = true;
    block.style.position = 'absolute';
    offset = {
        x: ev.offsetX,
        y: ev.offsetY
    };
});
document.addEventListener('mouseup', () => {
    dndMode = false;
});
document.addEventListener('mousemove', ev => {
   
    }
    console.log(ev);
    block.style.left = ev.clientX - offset.x + 'px';
    block.style.top = ev.clientY - offset.y + 'px';
});*/