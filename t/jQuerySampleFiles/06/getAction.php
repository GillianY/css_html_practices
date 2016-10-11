<?php
if(!isset($_GET["firstName"]))
{
	$_GET["firstName"]="N/A";
}

if(!isset($_GET["lastName"]))
{
	$_GET["lastName"]="N/A";
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
printf("PHP Response： Hello %s %s, This message is from PHP by GET method!", $_GET["firstName"], $_GET["lastName"]);
?>
</body>
</html>