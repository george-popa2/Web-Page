
    //   if( blockToClick.style.top != 'unset' ){
    //     alert("You win !!")
  
  
    //   }
      

    //   // if(blockToClick.style.top >= "590px" ){
    //   //   alert("Finish");
    //   //   blockToClick.style.opacity = "0"; 


    //   // }

    // }


    	

     

   



    // function startGame(){
    //   containerUi.style.display = "none";
    //   window.setInterval('moveDownBlock2()', 700); 

      


    // }


  var playButton = document.getElementById("playButtonButton");
  var okButton = document.getElementById("okButtonButton");
  var topMargin = 0;
  var topDistance = 0;
  var blockPlayer = document.getElementById("demo").style.top ;
  var blockEnemy = document.getElementById("enemyBlock");

  


  function startGame(){
    
    setTimeout(() => {   containerUi.style.display = 'none'; }, 1000);

    document.getElementById('containerUi').className = 'index3Animation';
    
    
  }


  function readedInstructions(){

    setTimeout(() => {   containerUiInstructions.style.display = 'none'; }, 1000);

    document.getElementById('containerUiInstructions').className = 'index3Animation';

  }

 

    


  function moveDownBlock1() {
      
    document.getElementById("block").addEventListener("click", function() {
      
    

    var blockToClick = document.getElementById('block');
    var backgroundContainer = document.getElementById('container');
    var adder = 50;
    topMargin = topMargin + adder ;

   
   
    backgroundContainer.style.background = 'rgb(38, 0, 255)';
    blockToClick.style.background = 'rgb(41, 255, 41)';

    blockToClick.style.top = topMargin + 'px';

    

    
   
  

  });
  }





  function moveDownBlock2() {

    var blockToClick2 = document.getElementById('enemyBlock');
    var backgroundContainer = document.getElementById('container');
    var adder2 = 10;
   
    topDistance = topDistance + adder2 ;

    backgroundContainer.style.background = 'rgb(38, 0, 255)';
    blockToClick2.style.background = 'rgb(255, 0, 0)';

    blockToClick2.style.top = topDistance + 'px';
    

  
   
  }



  // LEVEL SELECTED FUNCTIONS*******************************


  function level1Selected(){
    containerUiLevels.style.display = 'none';


    window.setInterval('moveDownBlock2()', 500);
    moveDownBlock1();
   



   

    if ( blockPlayer >= '590px' ){
      alert("YOU WIN");


    }

   
  }






    


      