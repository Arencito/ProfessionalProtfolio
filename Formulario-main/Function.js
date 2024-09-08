function enviar (){
    const valorNombre = document.getElementById('nombre').value;
    const valorApellido = document.getElementById('apellido').value;
    const valorCorreo = document.getElementById('correo').value;

    const object = {
      
        nombre : valorNombre,
        apellido : valorApellido,
        correo : valorCorreo,
    };

    console.log(object);



(function(){
         

    var saludo = function(){
       
       alert('Se ha enviado el  formulario con éxito :D')
    };
    var boton = document.getElementById('boton');

    boton.addEventListener('click', saludo);

   }()
   )
}