<div class="row row-form">
    <form id='form-contact' class="form-ajax form-stripped-2"  method="POST" onsubmit="return false">
        <input name="typeSend" type="hidden" value="nocv">
        <div class="col-md-6">
            <div class="form-group">
                <label class="sr-only">Nombre</label>
                <input required name= "name" type="text" class="form-control" placeholder="Nombre">
            </div>

            <div class="form-group">
                <label class="sr-only">Telefono</label>
                <input required name= "telefono" type="number" class="form-control" placeholder="Telefono">
            </div>
            <div class="form-group">
                <label class="sr-only">Email</label>
                <input required name= "email" type="email" class="form-control" placeholder="Email">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label class="sr-only">Mensaje</label>
                <textarea required name= "message" class="form-control" rows="5" placeholder="Mensaje"></textarea>
            </div>
            <button type="button" class="btn btn-primary pull-right" id="btn-form">Enviar</button>
        </div>
    </form>
    <div class="col-md-12">
        <div class="loader-container" id ="loading">
            <div class="sk-folding-cube">
                <div class="sk-cube1 sk-cube"></div>
                <div class="sk-cube2 sk-cube"></div>
                <div class="sk-cube4 sk-cube"></div>
                <div class="sk-cube3 sk-cube"></div>
            </div>
            Enviando..
        </div>
    </div>
</div>
