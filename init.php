<?php

ini_set("display_errors", "ON");
error_reporting(E_ALL & ~E_NOTICE & ~E_DEPRECATED & ~E_STRICT);


if(function_exists('xdebug_disable'))
		xdebug_disable();
	
	date_default_timezone_set('America/Mexico_City');
	//header('Content-type: text/html; charset=utf-8');
ini_set("session.gc_maxlifetime","86400");
ini_set("memory_limit","2048M");
ini_set("max_execution_time","7200");

?>