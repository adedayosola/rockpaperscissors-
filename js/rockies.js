$(document).ready(function(){
    //Makes the div flash continiously
    $( '.ready-text' ).hide();
    setInterval(function(){
     $( '.ready-text' ).fadeIn(1000).fadeOut(1000);},0)
    //fades out pop up on press of button    
    $('#btn-1').click(function(){
        
      $('.pop-up').fadeOut('slow');
    })
    //closes window on confirm
    $('#btn-2').click(function(){
        var ask= confirm("Are you sure you want to exit this page?")
    //add if true function
        console.log(ask);
    })
   

 
   
    $('.img-box').click(function(){
        userChoice= $(this).attr('id');
        console.log("inside the function: "+ userChoice);
        // return userChoice ;
  
      

    
    
        var computerChoice= Math.random(0,1);
            if (computerChoice < 0.34) {
                computerChoice = "rock";
            } 
            else if(computerChoice <= 0.67) {
                computerChoice = "paper";
            } 
            else {
                computerChoice = "scissors";
            } 


            if (computerChoice==="rock"){
                $("#img").append("<img id='comp-image' src='images/rock.png'/>");
            }
            else if (computerChoice==="paper"){
                $("#img").append("<img id='comp-image' src='images/paper.png'/>");
            }
            else{
                $("#img").append("<img id='comp-image' src='images/scissors.png'/>");
            }
            console.log('computerChoice is ' + computerChoice);
           



 

   //  //function to compare options of user and computer
    var compare= function(choice1,choice2){
        choice2 = computerChoice ;
        console.log("choice2 is: "+ choice2);

        if (choice1 === choice2){
            $(".winner").append("<p>THE RESULT IS A TIE!!!</p>");
            return "The result is a tie!";
        }
        else if (choice1==='rock'){
            if (choice2 === "scissors"){
                $(".winner").append("<p>ROCK WINS!!!</p>");
                return "rock wins";
            }
            else {
                $(".winner").append("<p>PAPER WINS!!!</p>");
                return "paper wins";
            }
        }  
        else if (choice1=='paper'){
            if (choice2 === "rock"){
                $(".winner").append("<p>PAPER WINS!!!</p>");
                return "paper wins";
            }
            else {
                $(".winner").append("<p>SCISSORS WINS!!!</p>");
                return "scissors wins";
            }
            
        }
        else if (choice1=='scissors'){
            if (choice2 === "rock"){
                $(".winner").append("<p>ROCK WINS!!!</p>");
                return "rock wins";
            
            }
            else {
                $(".winner").append("<p>SCISSORS WINS!!!</p>");
            return "scissors wins";
            
            }
            
        }
    }

//Call the function

compare(userChoice,computerChoice);
   })

})

