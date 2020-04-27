let coffeeItems = document.querySelectorAll('.coffee-item');

let cup = document.querySelector('.cup img');

let cooking = false;

for(let i = 0; i < coffeeItems.length; i++){
    coffeeItems[i].addEventListener('click', cookCoffee); // cookCoffee - это функция, здесь пишем без скобок!! это исключение!!
}
function cookCoffee(){
  if(cooking === true){
    return;
  }
  cup.style.cursor = 'default';
  let balance = document.querySelector('.balance');
  let displayText = document.querySelector('.display-text');
  let progressBar = document.querySelector('.progress');
  let coffeeName = this.querySelector('span').innerHTML; // взяли текст из спана -- это название кофе в строке на русском с ценой 
//   let progressBarAnimate = progressBar.childNodes[3];
  let progressBarAnimate = progressBar.querySelector('.progress-bar');
  coffeeName = coffeeName.slice(0,coffeeName.indexOf('-')-1);
  let cupImg = document.querySelector('.cup').childNodes[0];
  
  let cupSrc = this.childNodes[1].getAttribute('src');
  
  //-----
  
  
  balance.style.border = 'none';
  display_id.style.backgroundColor = '';
 // displayText.innerHTML = 'Выберите напиток';
  if(balance.value < +this.getAttribute('cost')){
   // alert('Не достаточно средств');
      display_id.style.backgroundColor = 'red';
      balance.style.border = '2px solid red';
 //   disp.innerText = 'Не достаточно средств';
      displayText.innerHTML = 'Не достаточно средств';
    return;
  }
  cooking = true; // флаг на то что готовится кофе
  cupImg.setAttribute('src', cupSrc);
  
  balance.value -= +this.getAttribute('cost');
  progressBar.classList.toggle('d-none');
 
 
  let percent = 0;
 
  let interval = setInterval(function(){
    percent++;
    progressBarAnimate.style.width = percent + 15 + '%';
    displayText.innerHTML = `Ваш ${coffeeName} готовится ${percent} %`;
    cupImg.style.opacity = percent/100;
    if(percent == 100){
       cup.style.cursor = 'pointer';
       clearInterval(interval);
       displayText.innerHTML = `Ваш ${coffeeName} готов`;
       progressBarAnimate.style.width = 0;
       progressBar.classList.toggle('d-none');
      
      }
  },100);
}
  
cup.addEventListener('click', getCoffee);
function getCoffee(){
  if(cup.style.opacity >=1){
    cup.style.opacity = 0;
    cooking = false;
    cup.style.cursor = 'default';
  }
}


//--------------------------------------------------
//-------------------Drag and Drop------------------

let cashItems = document.querySelectorAll('.cash-item');
for (let i = 0; i < cashItems.length; i++){
  cashItems[i].addEventListener('mousedown', takeCash); 
}

function takeCash(){
  let cashItem = this.cloneNode(); // сделали клон купюр
  cashItem.style.transform = 'rotate(-90deg)'; // повернули на 90 деньги
  document.body.append(cashItem); // пихнули в бодИ , для безопасности, что бы на его ничего не влияло из настроек контейнера 
  cashItem.style.zIndex = "1000";
  cashItem.style.position = 'absolute';
  
  //----------------- move function--------------
  document.addEventListener('mousemove', moveTo); // событие на движение мышки
  function moveTo(event){
  event.preventDefault();
    let data = cashItem.getBoundingClientRect(); //дает данные об объекте к кторому применяется
    // console.log(data);
    cashItem.style.left = event.clientX - data.height/2 + 'px'; // позиция банкноты на экране
    cashItem.style.top = event.clientY - data.width/2 + 'px';
  }
   cashItem.addEventListener('mouseup', dropTo); // отпускает банкноту
   function dropTo(){
     document.removeEventListener('mousemove', moveTo);
     if(inAtm(cashItem)){
       let balance = document.querySelector('.balance');
       balance.value = +balance.value + +cashItem.getAttribute('cash');
       
     } cashItem.remove();
     cashItem.removeEventListener('mouseup', dropTo)
  }
}

// создание елементов

function createCoin(coinName){
  let src = '';
  switch (coinName){
    case '1': 
      src = 'img/1rub.png';
      break;    
    case '2': 
      src = 'img/2rub.png';
      break;    
    case '5': 
      src = 'img/5rub.png';
      break;    
    case '10': 
      src = 'img/10rub.png';
      break;
      case '500': 
      src = 'img/500rub.jpg';
      break;    
    }
  
  // Нашли ченчь бокс, затем узнали его параметры, расположение , ширину и высоту.  
    
  let changeBox = document.querySelector('.change-box');
  let changeBoxData = changeBox.getBoundingClientRect(); // получили данные о блоке change-box
  // console.log(changeBoxData);
  changeBox.style.cursor = 'pointer';
  let posX = changeBoxData.x + Math.floor(Math.random()*(changeBoxData.width - 50)); // ограничили границами блока change-box 
  let posY = changeBoxData.y + Math.floor(Math.random()*(changeBoxData.height - 50)); 
  
  
  let coin = document.createElement('img');
  coin.setAttribute('src', src); // attribute  переписывает ВСЕ атрибуты!!!!!
  coin.classList.add('coin'); // создали новый класс coin
  coin.style.position = 'absolute';
  coin.style.zIndex = 1000;
  coin.style.top = posY +'px';
  coin.style.left = posX + 'px';
  coin.style.width = '50px';
  coin.style.height = '50px';
  coin.style.cursor = 'pointer';
  
  document.body.append(coin);
  coin.addEventListener('click', function(){
    this.remove();
  });
}

function inAtm(elem){
  let elemData = elem.getBoundingClientRect(); // infa dlya kupuri
  let atm = document.querySelector('.atm');
  let atmData = atm.getBoundingClientRect(); // infa dlya atm
  let x = elemData.x; // координаты верхнего края купюры
  let y = elemData.y;
  let x2 = x + elemData.width;

  let atmX = atmData.x; // координаты верхнего и нижнего края купюроприемника
  let atmY = atmData.y;
  let atmX2 = atmX + atmData.width;
  let atmY2 = atmY + atmData.height/3;
  // console.log(elemData);
  // console.log(atmData);
  if(x >= atmX && y >= atmY && x2 <= atmX2 && y <= atmY2){
    // console.log('in Atm');
    return true;
  } return false;
}


// выдаем сдачу!!
 function takeChange(){
   let balance = document.querySelector('.balance');
   if(balance.value == 0){
     return;
   }
   if(balance.value%10 == 0){
     balance.value -= 10;
     createCoin('10');
     takeChange();
     return;
   }
   if(balance.value%5 == 0){
     balance.value -= 5;
     createCoin('5');
     takeChange();
     return;
   }   
   if(balance.value%2 == 0){
     balance.value -= 2;
     createCoin('2');
     takeChange();
     return;
   }   
   if(balance.value%1 == 0){
     balance.value -= 1;
     createCoin('1');
     takeChange();
     return;
   }
 }

let changeBtn = document.querySelector('#change-btn');
changeBtn.addEventListener('click', takeChange);







