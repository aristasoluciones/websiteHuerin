<?php
include ('../../../init.php');
include ('../../../config.php');
include ('../../../libraries.php');
$contacto->setName($_POST['name']);
$contacto->setPhone($_POST['telefono']);
$contacto->setEmail($_POST['email']);
$contacto->setMensaje($_POST['message']);
$contacto->setTypeSend($_POST['typeSend']);
if($contacto->SendCorreo()){
    echo "ok[#]";
    $smarty->display(DOC_ROOT."/templates/forms/errors.tpl");
}else{
    echo "fail[#]";
    $smarty->display(DOC_ROOT."/templates/forms/errors.tpl");
}
