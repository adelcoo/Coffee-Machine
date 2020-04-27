<!doctype html>
<html lang='ru'>
  <head>
    <!-- Required meta tags -->
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>

    <!-- Bootstrap CSS -->
    <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'>
    
    <!-- <link href='https://fonts.googleapis.com/css?family=Comfortaa|Open+Sans&display=swap' rel='stylesheet'> -->

    <title>Coffee Machine</title>
    <style>
      @import url('https://fonts.googleapis.com/css?family=Comfortaa|Open+Sans&display=swap');
      
       body{
         overflow:  hidden;
       } 
      .coffee-list{
        background:url(img/coffee-bg.jpg);
        background-size:cover;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
       
      }
      .coffee-list img{
        height: 50px;
        width: 50px;
        background-color:white;
      }
      .coffee-item{
        background-color: rgba(0,0,0,.5);
        color:white;
        border-radius:50px 0 0 50px;
        cursor: pointer
      }
     .coffee-item:hover{
        background-color: rgba(50,0,0,.7);
      }  
      .coffee-item span{
        font-family: 'Comfortaa', cursive;
        /* font-family: 'Open Sans', sans-serif; */
      }
      .coffee-oper{
        background: lightgrey;
        height:100%;
        padding:15px;
      }
      .display{
        background-color:lightgreen;
        height:8rem;
        border: 0.3rem solid black;
        padding:10px;
      }
      .change-box{
        min-height:7rem;
        background-color:grey;
        border:1px solid black;
        box-shadow:inset 0 0 50px rgba(0,0,0,.8);
        /* cursor: pointer; */
      }
      .cup img{
        margin-top:50px;
        height: 250px;
        width: 250px;
        opacity: 0;
      }
      
      .cash-item{
        cursor: pointer;
        user-select:none;
      }
      
    </style>
  </head>
  <body>
    <div class='container mt-5'>
       <div class='row'>
        <div class='col-6 p-0'> <!-- выбор кофе --> 
          <div class='coffee-list p-4 h-100'>
             <div class='coffee-item my-3'  cost='60'>
               <img class='rounded-circle' src='img/americano.png' alt='cap of americano'>
                 <span class='ml-4'>Американо - 60 руб</span>
             </div>
             <div class='coffee-item my-3'  cost='53'>
               <img class='rounded-circle' src='img/cappuccino.png' alt='cap of cappuccino'>
               <span class='ml-4'>Капучино - 53 руб</span>
             </div>
             <div class='coffee-item my-3'  cost='45'>
               <img class='rounded-circle' src='img/espresso.png' alt='cap of espresso'>
                 <span class='ml-4'>Эспрессо - 45 руб</span >
             </div>
             <div class='coffee-item my-3'  cost='65'>
               <img class='rounded-circle' src='img/Latte1.png' alt='cap of latte'>
               <span class='ml-4'>Латте - 65 руб</span>
             </div>
          </div>
        </div>
        <div class='col-6 p-0'>
          <div class='coffee-oper'>
            <div class='row'>
              <div class='col-6'>
                <div class='display' id='display_id'>
                  <span class='display-text'>Выберите кофе</span>
                  <span>...</span>
                    <div class="progress mt-3 d-none"> <!-- Progressbar-->
                      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 0%">
                        </div>
                    </div>
                  <div class="cup mt-5 text-center"><img src="img/americano.png" alt=""></div>
                </div>
              </div>
              <div class='col-6'>
                <div class="input-group mb-3">
                  <input type="text" class="form-control balance" placeholder="Баланс" aria-label="Баланс" aria-describedby="basic-addon2" disabled>
                  <div class="input-group-append ">
                    <span class="input-group-text" id="basic-addon2">.руб</span>
                  </div>
                </div>
                <div class='atm text-center'><img src="img/bill_acc.png" alt="atm"></div>
                <div class='change-atm mt-3' >
                  <button type="button" class="btn btn-success btn-lg btn-block" id="change-btn">Получить сдачу</button>
                </div>
                <div class="change-box mt-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3 text-center"> <!-- row  с деньгами!-->
        <div class="col"><img class="cash-item" src="img/50rub.jpg" alt="50rub" cash = '50'></div>
        <div class="col"><img class="cash-item" src="img/100rub.jpg" alt="100rub" cash = '100'></div>
        <div class="col"><img class="cash-item" src="img/500rub.jpg" alt="500rub" cash = '500'></div>
      </div>
      
      
    </div>
    
    

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src='https://code.jquery.com/jquery-3.3.1.slim.min.js' integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo' crossorigin='anonymous'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js' integrity='sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1' crossorigin='anonymous'></script>
    <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM' crossorigin='anonymous'></script>
    <script src='script.js'></script>
  </body>
</html>