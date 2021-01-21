let title = document.createElement('title');
title.innerHTML = 'Call_to_Action#3';

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');

console.log(title);
console.log(metaUtf8);

document.head.appendChild(title);
document.head.appendChild(metaUtf8);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
h1.classList.add('choose');

let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all twis mistaken idea of denounsing';
p1.classList.add('but');

document.body.appendChild(h1);
document.body.appendChild(p1);

let divCont = document.createElement('div');
divCont.classList.add('cont');

document.body.appendChild(divCont);

//one
let divOne = document.createElement('div');
divOne.classList.add('one');

divCont.appendChild(divOne);

let pStudio1 = document.createElement('p');
pStudio1.innerHTML = 'FREELANCER';
pStudio1.classList.add('studio1');

divOne.appendChild(pStudio1);

let pIni1 = document.createElement('p');
pIni1.innerHTML = 'Initially designed to';
pIni1.classList.add('ini1');

divOne.appendChild(pIni1);

let pButt1 = document.createElement('p');
pButt1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
pButt1.classList.add('butt1');

divOne.appendChild(pButt1);

let button1 = document.createElement('button');
button1.classList.add('button1')

divOne.appendChild(button1);


let a1 = document.createElement('a');
a1.href = '#';
button1.appendChild(a1);

let pStart1 = document.createElement('p');
pStart1.innerHTML = 'Start here';
pStart1.classList.add('start1');

a1.appendChild(pStart1);

//two
let divTwo = document.createElement('div');
divTwo.classList.add('two');

divCont.appendChild(divTwo);

let pStudio = document.createElement('p');
pStudio.innerHTML = 'STUDIO';
pStudio.classList.add('studio');

divTwo.appendChild(pStudio);

let pIni = document.createElement('p');
pIni.innerHTML = 'Initially designed to';
pIni.classList.add('ini');

divTwo.appendChild(pIni);

let pButt = document.createElement('p');
pButt.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
pButt.classList.add('butt');

divTwo.appendChild(pButt);

let button = document.createElement('button');
button.classList.add('button')

divTwo.appendChild(button);


let a = document.createElement('a');
a.href = '#';
button.appendChild(a);

let pStart = document.createElement('p');
pStart.innerHTML = 'Start here';
pStart.classList.add('start');

a.appendChild(pStart);

let style = document.createElement('style');
style.innerHTML = `
*{
	margin: 0;
	padding: 0;
}

body {
	width: 100%;
	background: #FFFFFF;
}

.cont {
	display: flex;
	justify-content: center;
}

.choose {
	text-align: center;
	margin: 115px 0 0;
	font-family: 'Arvo', serif;
	font-style: normal;
	font-weight: normal;
	font-size: 36px;
	line-height: 48px;
	color: #212121;
}

.but {
	text-align: center;
	margin: 25px 0 0;
	font-family: 'Open Sans', sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 26px;
	color: #9FA3A7;
}

.one, 
.two {
	display: inline-block;
	text-align: center;
	vertical-align: center;
}

.one {
	margin-top: 60px;
	margin-bottom: 139px;
	width: 400PX;
	height: 478px;
	border: 1px solid #9FA3A7;
	border-radius: 5px 0 0 5px;
	padding-right: 2px;
}

.two {
	margin-top: 60px;
	margin-bottom: 139px;
	width: 400PX;
	height: 480px;
	background: #8F75BE;
	border-radius: 0 5px 5px 0;
}

.studio1 {
	font-family: 'Montserrat', sans-serif;
	font-style: normal;
	font-weight: bold;
	text-transform: uppercase;
	font-size: 12px;
	line-height: 15px;
	margin: 81px 0 0;
	letter-spacing: 2.4px;
	color: #9FA3A7;
;
}

.ini1 {
	font-family: 'Arvo', serif;
	font-style: normal;
	font-weight: normal;
	font-size: 36px;
	line-height: 46px;
	width: 210px;
	margin: 19px 95px 0;
	color: #212121;
}

.butt1 {
	width: 210px;
	margin: 25px 95px 0;
	font-family: 'Open Sans', sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 22px;
	color: #9FA3A7;
}

.button1 {
	border: 3px solid #FFC80A;
	border-radius: 30px;
	background-color: transparent;
	margin-top: 58px;
}

.button1 a{
	text-decoration: none;
}

.button1 p:hover {	
	color: #FFC80A;
}

.start1 {
	font-family: 'Montserrat', sans-serif;
	text-transform: uppercase;
	margin: 16px 23px 16px;
	font-style: normal;
	font-weight: bold;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 2.4px;
	color: #212121;
}	

.ini {
	font-family: 'Arvo', serif;
	font-style: normal;
	font-weight: normal;
	font-size: 36px;
	line-height: 46px;
	width: 210px;
	margin: 19px 95px 0;
	color: #212121;
}

.studio {
	font-family: 'Montserrat', sans-serif;
	font-style: normal;
	font-weight: bold;
	text-transform: uppercase;
	font-size: 12px;
	line-height: 15px;
	margin: 83px 0 0;
	letter-spacing: 2.4px;
	color: #FFC80A;
}

.button {
	border: 3px solid #FFC80A;
	border-radius: 30px;
	background-color: transparent;
	margin-top: 58px;
}

.button a{
	text-decoration: none;
}

.button p:hover {	
	color: #FFC80A;
}
			
.start {
	font-family: 'Montserrat', sans-serif;
	text-transform: uppercase;
	margin: 16px 23px 16px;
	font-style: normal;
	font-weight: bold;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 2.4px;
	color: #FFFFFF;
}

.butt {
	width: 210px;
	margin: 25px 95px 0;
	font-family: 'Open Sans', sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 22px;
	color: #FFFFFF
}
`;

document.head.appendChild(style);