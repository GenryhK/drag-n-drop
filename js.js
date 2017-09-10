//drag'n drop
let buttonD=document.createElement(`button`);
buttonD.textContent=`d'nd`;

function dNd1(event){
(event.altKey)? sli() :notSli();



function notSli(){alert(`dNd`)};
	
	function sli(){
buttonD.style.position=`absolute`;
buttonD.style.zIndex = 1000;
buttonD.style.backgroundColor = `red`;
document.addEventListener(`mousemove`,dNd2)}
}


function dNd2(event){buttonD.style.left=event.pageX-buttonD.offsetWidth/2+`px`;//offset отступ относиетльно внутренней границы объекта
buttonD.style.top=event.pageY-buttonD.offsetHeight/2+`px`;
}

buttonD.addEventListener(`mousedown`,dNd1);

function dNd3(){buttonD.style.backgroundColor = ``;
	document.removeEventListener(`mousemove`,dNd2);
	}
buttonD.addEventListener(`mouseup`,dNd3);
document.body.appendChild(buttonD);












//
let div =document.createElement(`div`);
div.textContent=`this div is fly`;
function begin(event){//console.log(event.target)
	if(event.target.tagName == `DIV`){console.log(div)};
	div.setAttribute(`onselectstart`,`return false`);
	div.style.position=`absolute`;
	div.style.zIndex = 1000;// эта строчка нужна, что б див показывался над всеми остальными элемнетами
	div.style.backgroundColor=`green`;
	document.addEventListener(`mousemove`,midel)


};div.addEventListener(`mousedown`,begin);
function midel(event){div.style.left=event.pageX-div.offsetWidth/2+`px`;
div.style.top=event.pageY-div.offsetHeight/2+`px`
};



function end(event){div.style.backgroundColor=``;
	document.removeEventListener(`mousemove`,midel);
};
div.addEventListener(`mouseup`,end);
document.body.appendChild(div)
//
/*let div2=document.createElement(`div`);
div2.textContent=`123`;
function wh(event){console.log(div2);console.log(event.target.MozMousePixelScroll)};
div2.addEventListener(`wheel`,wh);
document.body.appendChild(div2);*/
/*
фуекция для любого объекта


let div =document.createElement(`div`);


div.textContent=`this div is fly`;

function foo(a){
function begin(event){
	
	a.setAttribute(`onselectstart`,`return false`);
	a.style.position=`absolute`;
	a.style.zIndex = 1000;// эта строчка нужна, что б див показывался над всеми остальными элемнетами
	a.style.backgroundColor=`green`;
	document.addEventListener(`mousemove`,midel)


};a.addEventListener(`mousedown`,begin);
function midel(event){a.style.left=event.pageX-a.offsetWidth/2+`px`;
a.style.top=event.pageY-a.offsetHeight/2+`px`
};



function end(event){a.style.backgroundColor=``;
	document.removeEventListener(`mousemove`,midel);
};
a.addEventListener(`mouseup`,end);}
foo(div)
document.body.appendChild(div)*/