var urlLoc = document.location.hostname;

if(urlLoc == "localhost")
    var WEB_ROOT = "http://" + urlLoc + "/huerinv2";
else if(urlLoc == "192.168.1.76")
    var WEB_ROOT = "http://" + urlLoc + "/huerinv2";
else
    var WEB_ROOT = "http//" + urlLoc + "";
console.log(WEB_ROOT);
var LOADER = "<img src='"+WEB_ROOT+"/images/loading.gif'><br>Cargando...";
var LOADER2 = "<img src='"+WEB_ROOT+"/images/loader.gif'>";
var LOADER3 = "<div align='center'><img src='"+WEB_ROOT+"/images/loading.gif'><br>Cargando...</div>";
var LOADER4 = "<div align='center'><img src='"+WEB_ROOT+"/images/icons/loading.gif'><br>Buscando...</div>";

var msgFail = "Ocurrio un error al cargar los datos.";
var msgError = "Something went wrong...";