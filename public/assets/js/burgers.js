const audio1 = new Audio("/../assets/sounds/Get in my belly.mp3");
const audio2 = new Audio("/../assets/sounds/Im gonna eat you.mp3")





$(document).ready(function(){

$("#subBtn").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    audio1.play();
    let nBurger = $("#bur").val();
    console.log(nBurger);
      $.ajax({
        method: "POST",
        url: "/burgers", 
        data: {name:nBurger}
      }).then(function(data) {
        // reload page to display devoured burger in proper column
        setTimeout(function(){ location.reload(); }, 2500);
      });
  });

$(".btn").on("click", function(event) {
  event.preventDefault();
  audio2.play();
  let id = this.parentNode[0].value;
  
  $.ajax({
    method: "PUT",
    url: "/burgers/" + id
  }).then(function(data){
    setTimeout(function(){ location.reload(); }, 2900);
  })



})













})




