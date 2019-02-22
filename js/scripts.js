//Business logic
function sum (question1, question2, question3, question4){
 return (question1+question2+question3+question4);
}

//User logic
$(document).ready(function(){
  $("#question").submit(function(event) {
    event.preventDefault();
var question1 =parseInt($("input:radio[name=que1]:checked").val());
var question2 =parseInt($("input:radio[name=que2]:checked").val());
var question3 = parseInt($("input:radio[name=que3]:checked").val());
var question4 =parseInt($("input:radio[name=que4]:checked").val());
var total = sum(question1, question2, question3, question4);

// var percent = (total/40)*100;
//alert(percent + "%");
// if (percent>80 && percent <=100) {
  // alert("Excellent")
// } else if(percent<80 && percent>=50){
  // alert("fairly passed");
// } else {
  // alert("failed!Retake");
// }
});
});
