$(document).ready(function(){

    console.log('Listo')

    //  Obtén la fecha actual y actualízala en el DOM.
    let fecha = new Date
    let fechaActual = fecha.toLocaleDateString()

    $('#date').html(fechaActual)

    //  Escribe un evento, cuando se hace clic en el botón eviar.
    $('#button').click(function(){

        //  Obtén el valor del texto, del área de texto, con el método 'val()'.
        let text_value = $('#text').val()

        let emoticon, url_emoji

        //  Conviértelo en un objeto JS.
        //  Proporciona una 'clave' aquí y en escribe lo mismo en el archivo app.py; también para extraer los datos.
        let input_text = {'customer_review' : text_value}

        //  Requerimiento AJAX.
        $.ajax({

            //  Tipo de requerimiento web.
            type : 'POST',

            //FALTO EL URL
            url: '/reviews',

            //  Datos a ser enviados en formato JSON.
            data : JSON.stringify(input_text),

            //  Tipo de respuesta esperada en JSON.
            dataType : 'json',

            //  contentType - (tipo de contenido).
            contentType : 'application/json',

            //  Si todo es exitoso, ejecuta esta función.
            success : function(result){

                // Extrae la predicción y la URL del emoticón del resultado.
                emoticon = result.data.predicted_emotion
                url_emoji = result.data.predicted_emotion_img_url

                //  Actualiza los elementos del DOM.
                $("#sentiment").html(emoticon)
                $("#emoji").attr('src', url_emoji)

                //  Muestra los elementos.
                $("#sentiment").css('display', 'block')
                $("#emoji").css('display', 'block')

            },

            //  Si hay algún error, ejecuta esta función.
            error : function(result){

                console.log(result)
            }
        })


        //  Borra el cuadro de texto después de cada clic en el botón.
        //$('#text').val("")
    })
        
})