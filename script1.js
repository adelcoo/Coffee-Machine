
//document.addEventListener('DOMContentLoaded');
// alert('cucucu');
let change = document.querySelector('#change-btn');


// change.addEventListener('click', function(){
//   change.innerHTML = '<span style="color:black;">Заберите сдачу!</span>';
// }); 1-й способ!!!

// change.removeEventListener()///

//---------------------------------------------------
// change.onclick = function(){
//   change.innerHTML = '<span style="color:black;">Заберите сдачу...</span>';
// } // 2-й способ!!! но хуже 

//---------------------------------------------------


change.addEventListener('click', function(){
  change.style.backgroundColor = '#5CFFC3';
  change.style.borderRadius = '50%';
  change.style.border = '5px dashed gold';
  change.innerHTML = '<span>Заберите сдачу...</span>'; // так лучше!
//   change.innerText = 'Заберите сдачу...';
  change.childNodes[0].style.color = 'black';
}); 

function noChange(){
  alert('No Change!');
}

// let oper = document.querySelector('#coffe-oper');
// oper.childNodes
