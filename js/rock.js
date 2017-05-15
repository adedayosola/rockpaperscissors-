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


    //user selects a choice
   // var x = $('.img-box').click(function(){
   //     var userChoice= $(this).attr('id');
   //     console.log(userChoice);
   //     return userChoice;
   //  })

   // console.log('Hey x returns ' + x[0].id)
   //  console.log('Hey x returns ' + x[1].id);

    var x =  $('.img-box').click(function(){
        userChoice= $(this).attr('id');
        console.log("inside the function: "+ userChoice);
        return userChoice ;
     });

    // console.log("x na:" + userChoice)


    // console.log("outside the function: "+ userChoice);






    //choice is randomly generated for computer

var computerChoices = function(){
    var computerChoice= Math.random(0,1);
    if (computerChoice < 0.34) {
        return computerChoice = "rock";
    }
    else if(computerChoice <= 0.67) {
        return computerChoice = "paper";
    }
    else {
        return computerChoice = "scissors";
    }
    console.log("Computer: " + computerChoice);
}()

if (computerChoices==="rock"){
    $("#img").append("<img id='comp-image' src='images/rock.png'/>");
}
else if (computerChoices==="paper"){
    $("#img").append("<img id='comp-image' src='images/paper.png'/>");
}
else{
    $("#img").append("<img id='comp-image' src='images/scissors.png'/>");
}


    //function to compare options of user and computer
    var compare= function(choice1,choice2){

        choice1 = x;
        choice2=computerChoices;

        // console.log(choice2)

    var i;
    for(i= 0; i<choice1.length; i++){
        console.log(x[i].id);
        if (x[0].id===computerChoices){
            console.log("a")
        }

        if (x[1].id===computerChoices){
            console.log("b")
        }
        if (x[2].id===computerChoices){
            console.log("c")
        }

        // if (choice1[i].id === choice2){
        // // return "The result is a tie!";
        // console.log(choice1[i])
        // // console.log("The result is a tie!");
        // }
   }


//     // if (choice1 === choice2){
//     //     return "The result is a tie!";
//     //     console.log("The result is a tie!");
//     //     }
//     // else if (choice1==='rock'){
//     //     if (choice2 === "scissors"){
//     //     return "rock wins";
//     //     console.log("rock wins");
//     //     }
//     //     else {
//     //     return "paper wins";
//     //     console.log("paper wins");
//     //     }
//     // }
// //     else if (choice1=='paper'){
// //         if (choice2 === "rock"){
// //         return "paper wins";
// //         console.log("paper wins");
// //         }
// //         else {
// //         return "scissors wins";
// //         console.log("scissors wins");
// //         }
//
// //     }
// //     else if (choice1=='scissors'){
// //         if (choice2 === "rock"){
// //         return "rock wins";
// //         console.log("rock wins");
// //         }
// //         else {
// //         return "scissors wins";
// //         console.log("scissors wins");
// //         }
//
// //     }
// }()
//
// //Call the function
//
// //compare(choice,computerChoice);
//
// })
//
// /*var userChoice = prompt("Do you choose rock, paper or scissors?");
// var computerChoice = Math.random();
// if (computerChoice < 0.34) {
// 	computerChoice = "rock";
// } else if(computerChoice <= 0.67) {
// 	computerChoice = "paper";
// } else {
// 	computerChoice = "scissors";
// } console.log("Computer: " + computerChoice);
//
// var compare= function(choice1,choice2){
//     if (choice1 === choice2){
//         return "The result is a tie!";
//         }
//     else if (choice1==='rock'){
//         if (choice2 === "scissors"){
//         return "rock wins";
//         }
//         else {
//         return "paper wins";
//         }
//     }
//     else if (choice1=='paper'){
//         if (choice2 === "rock"){
//         return "paper wins";
//         }
//         else {
//         return "scissors wins";
//         }
//
//     }
//      else if (choice1=='scissors'){
//         if (choice2 === "rock"){
//         return "rock wins";
//         }
//         else {
//         return "scissors wins";
//         }
//
//     }
// }
//
// compare(userChoice,computerChoice);*/
//
// // var userChoice= function(id){
// //         var y= document.getElementById(id);
// //         if (id === 'rock') {
// //             console.log('rock')
// //         }else if (id === 'paper') {
// //             console.log('paper')
// //         }else if (id === 'scissors') {
// //             console.log('scissors')
// //         }else {
// //             console.log('Please choose a category')
// //         }
// //         // console.log(y);
// //     };
