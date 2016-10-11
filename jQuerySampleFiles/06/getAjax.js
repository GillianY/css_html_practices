// JavaScript Document
$(document).ready(init);
function init()
{
	$("#submit").click(submitHandler);	
}


function submitHandler()
{	
	$.get("http://10.0.1.12/getAction.php",{firstName:$("#firstName").val(),lastName:$("#lastName").val()}, callbackhandler);
	}
	
	function callbackhandler(data)
	{
		$(".response").html(data);
		
		}