// JavaScript Document
$(document).ready(init);
function init()
{
	$("#submit").click(submitHandler);
}

function submitHandler(){
	var firstNameValue = $("#firstName").val();
	var lastNameValue = $("#lastName").val();
	$.post("http://10.0.1.12/postAction.php",
			{firstName:firstNameValue,lastName:lastNameValue},
			callbackFun);
	
}
function callbackFun(data){
	$(".response").html(data);
}
