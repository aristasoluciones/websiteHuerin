var AJAX_PATH = WEB_ROOT+"/assets/plugins/contactform/contact.php";
jQuery(document).ready(function($){
    if($('#btn-form').length>0)
    {
        $('#btn-form').on('click',function (e) {
            e.preventDefault();
            var id =  this.id;
            var form = $(this).parents('form:first');
            var fd =  new FormData(form[0]);
            $.ajax({
                url: AJAX_PATH,
                data: fd,
                processData: false,
                contentType: false,
                type: 'POST',
                beforeSend: function(){
                    $('#'+id).hide();
                    $('#loading').show();
                },
                success: function(response){
                    var splitResp = response.split("[#]");
                    var content = '<div class="white-popup"><div class="message">'+splitResp[1]+'</div></div>';
                    if(splitResp[0]=='ok')
                    {
                        form.trigger("reset");
                        $('#loading').hide();
                        $('#'+id).show();
                        $.magnificPopup.open({
                            items:{
                                src:content,
                                type:'inline'
                            }
                        });
                    }else{
                        $('#loading').hide();
                        $('#'+id).show();
                        $.magnificPopup.open({
                            items:{
                                src:content,
                                type:'inline'
                            }
                        });
                    }

                },
            });
        });
    }

});