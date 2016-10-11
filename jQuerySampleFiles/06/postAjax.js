// JavaScript Document
$(document).ready(init);
function init()
{// JavaScript Document
$(document).ready(init);
function init()
{
	$("#submit").click(submitHandler);	
}


function submitHandler()
{	
	$.post("http://10.0.1.12/postAction.php",{firstName:$("#firstName").val(),lastName:$("#lastName").val()}, callbackhandler);
	}
	
	function callbackhandler(data)
	{
		$(".response").html(data);
		
		}
}
