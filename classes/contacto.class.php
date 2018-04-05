<?php
  class Contacto extends Main{

      private $name;
      function setName($value){
          $this->Util()->ValidateRequireField($value,'Nombre');
          $this->name=$value;

      }
      private $email;
      function setEmail($value){
          if($this->Util()->ValidateRequireField($value,'Email'))
          {
              $this->Util()->ValidateMail($value);
              $this->email=$value;
          }

      }
      private $telefono;
      function setPhone($value){
          $this->telefono=$value;
      }
      private $messaje;
      function setMensaje($value){
          $this->Util()->ValidateString($value,5000,1,"Mensaje");
          $this->messaje=$value;
      }
      private $type;
      function setTypeSend($value){
          $this->type=$value;
      }
      function SendCorreo(){
          global $send;
          $body = "<pre> Datos de contacto";

          if($this->Util()->PrintErrors()){
              return false;
          }
          if($this->name!="")
              $body .="<br> Nombre: ".$this->name;
          if($this->telefono!="")
              $body .="<br> Telefono: ".$this->telefono;
          if($this->email!="")
              $body .="<br> Email: ".$this->email;

          if($this->messaje!="")
              $body .="<br><br><br> Mensaje: ".$this->messaje;

          switch($this->type){
              case 'nocv':
                  $attachment="";
                  $name_file = "";
                  $subject ="CONTACTO POR INTERNET";

              break;
              case 'whitcv':
                  $attachment="";
                  $name_file = "";
                  if($_FILES['cv']['error']===1){
                      $this->Util()->setError(0,'complete',"El archivo a subir no debe exceder los  2MB");
                      $this->Util()->PrintErrors();
                      return false;
                  }elseif($_FILES['cv']['error']===0){
                      $attachment = $_FILES['cv']['tmp_name'];
                      $name_file = $_FILES['cv']['name'];
                      $body .="<br><br> C.V adjunto al correo";
                  }

                  $subject ="CONTACTO VACANTE POR INTERNET";
               break;
          }
         if($send->PrepareMultiple($subject,$body,unserialize(RECEPTOR),'ADMIN WEB',$attachment,$name_file,'','',$this->email,$this->name)){
             $this->Util()->setError(0,'complete',"Correo enviado correctamente");
             $this->Util()->PrintErrors();
             return true;
         }else{
             $this->Util()->setError(0,'error',"Hubo un error al enviar correo intentelo de nuevo");
             $this->Util()->PrintErrors();
            return false;
         }





      }
  }
?>