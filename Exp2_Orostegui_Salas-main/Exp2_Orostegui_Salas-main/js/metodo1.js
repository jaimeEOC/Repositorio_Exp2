$(function(){
    $("#mi-formulario").validate({
        rules:{
            nom:{
                required:true
            },
            correo:{
                required:true,
                email:true
            },
            pass:{
                required:true
            },
            fono:{
                required:true,
                number:true
            },
            fecha:{
                required:true
            },
            pass2:{
                required:true,
                equalTo:pass
            }

        },//rules
        messages:{
            nom:{
                required: 'Ingrese nombre de usuario',
                minlength: 'Caracteres insuficientes (3)'
            },
            correo:{
                required: 'Ingrese correo de usuario',
                email: 'Formato de correo inválido'
            },
            pass:{
                required: 'Ingrese contraseña',
                minlength: 'Caracteres insuficientes (8)'
            },
            fono:{
                required: 'Ingrese teléfono',
                minlength: 'Cantidad de digitos insuficientes (9)'
            },
            fecha:{
                required: 'Seleccione una fecha válida',
                min: 'Fecha no corresponde'
            },
            pass2:{
                required: 'Ingrese una contraseña',
                minlength: 'Caracteres insuficientes (8)',
                equalTo: 'Contraseñas no coinciden'
            },
        },//messages
    })//validate

})//function

function colorAmarillo(obj){
    obj.style.backgroundColor='black';
}

function colorNegro(obj){
    obj.style.backgroundColor='white';
}

function colorNegro(obj){
    obj.style.backgroundColor='white';
}

function colorFondo(obj){
    obj.style.backgroundColor='red';
}

function CrearCarta(){
    var a=document.getElementById("afavorito").value;
    var b=document.getElementById("ateme").value;
    var c=document.getElementById("exanimal").value;
    var d=document.getElementById("nmascota").value;
    var e=document.getElementById("gatoperro").value;
    var f=document.getElementById("canimales").value;
    var g=document.getElementById("aconocer").value;
    var h=document.getElementById("anoconocer").value;

    var cadena= "Sus preferencias en una tabla \n" + "\n" +
    "Su animal favorito es/son: " + a + "\n" + "El animal al que usted le teme es: " + b + "\n"+ "Su experiencia con animales es: " + c 
    + "\n" + "El nombre de su primera mascota es: "+ d + "\n" + "Usted prefiere los: " + e 
    + "\n" + "Los animales que ha visto ha(n) sido: " + f + "\n" + "Los animales que le gustaria conocer son: " + g 
    + "\n" + "Los animales que no le gustaria encontrarse son: " + h;
    
document.getElementById("carta").value=cadena;
}

$(document).ready(function(){

    $("#sumar").click(function(){
        var a= parseInt($("#num1").val());
        var b= parseInt($("#num2").val());
        var suma=a+b;
        $("#resultado").val(suma);
    });

    $("#multiplicar").click(function(){
        var a= parseInt($("#num1").val());
        var b= parseInt($("#num2").val());
        var mul=a*b;
        $("#resultado").val(mul);
    })

    $("#restar").click(function(){
        var a= parseInt($("#num1").val());
        var b= parseInt($("#num2").val());
        var res=a-b;
        $("#resultado").val(res);
    });
});

$(document).ready(function(){
    $("#enviar").click(function(){

        $.get("https://aves.ninjas.cl/api/birds",function(data){

            $.each(data.categories,function(i, item){
                $("#categorias").append("<tr><td>" + item.idCategory+"</td><td>"+ item.strCategory+
                    "</td><td><img src='"+item.strCategoryThumb+"'>"+
                    "</td><td>"+item.strCategoryDescription+"</td></tr>");
            });
        });
    });
});

let url='https://aves.ninjas.cl/api/birds';
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData=(data)=>{
    console.log(data)
    let body=""
    for(var i=0; i<data.length; i++)
    {
        body+=`<tr>
                <td>${data[i].uid}</td>
                <td><p class="texto">
                    <td>${data[i].name.spanish}</td></p>
                <td><img src="${data[i].images.main}" >    
                </tr>`
    }//for
    document.getElementById('data').innerHTML=body
}

