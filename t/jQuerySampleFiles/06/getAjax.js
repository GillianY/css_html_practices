// JavaScript Document
$(document).ready(init);
function init()
{
	$("#submit").click(submitHandler);
}

function submitHandler(){
	var firstNameValue = $("#firstName").val();
	var lastNameValue = $("#lastName").val();
	$.get("http://10.0.1.12/getAction.php",
			{firstName:firstNameValue,lastName:lastNameValue},
			callbackFun);
	
}
function callbackFun(data){
	$(".response").html(data);
}

/*
First Name:<input type="text" id="firstName"/>
Last Name:<input type="text" id="lastName"/>
<input type="button" id="submit" value="AJAX GET"/>

<div class="response">Watch here!</div>
*/