<?php

include_once(DOC_ROOT.'/properties/errors.es.php');
require(DOC_ROOT.'/libs/Smarty.class.php');
require(DOC_ROOT.'/libs/nusoap.php');
//require(DOC_ROOT.'/libs/phpmailer/class.phpmailer.php');

/*include_once(DOC_ROOT.'/classes/db.class.php');
$db = new DB;*/
include_once(DOC_ROOT.'/classes/class.phpmailer.php');
include_once(DOC_ROOT.'/classes/error.class.php');
include_once(DOC_ROOT.'/classes/main.class.php');
include_once(DOC_ROOT.'/classes/util.class.php');
include_once(DOC_ROOT.'/classes/sendmail.class.php');
include_once(DOC_ROOT.'/classes/contacto.class.php');
$send = new SendMail();
$util = new Util();
$error = new Error();
$contacto = new Contacto();

function dd(array $array){
    echo "<pre>";
    print_r($array);
}
$smarty = new Smarty;

$smarty->assign('DOC_ROOT',DOC_ROOT);
$smarty->assign('WEB_ROOT',WEB_ROOT);
$smarty->assign('property', $property);


?>