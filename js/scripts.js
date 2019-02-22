//business logic

var question1 = $("input:radio[name=que1]:checked").val();
var question2 = &("input:radio[name=que2]:checked").val();
var question3 = &("input:radio[name=que3]:checked").val();
var question4 = &("input:radio[name=que4]:checked").val();
var sum=function(question1, question2, question3, question4){
 return (question1+question2+question3+question4);
alert( sum);
}
