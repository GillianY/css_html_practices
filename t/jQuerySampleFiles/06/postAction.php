<?php
if(!isset($_POST["firstName"]))
{
	$_POST["firstName"]="N/A";
}

if(!isset($_POST["lastName"]))
{
	$_POST["lastName"]="N/A";
}

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Untitled Document</title>
</head>

<body>
<?php
printf("PHP Response： Hello %s %s, Are you like AJAX?", $_POST["firstName"], $_POST["lastName"]);
?>
</body>
</html>