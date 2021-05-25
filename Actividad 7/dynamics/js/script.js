$(document).ready(function() {
    $(".results").load("./dynamics/php/Consultas.php table");
    $(".submitcarr").on("click", ()=>{
        let carrera = $("input").val();
        let filtro = $(".filtmod").val();
        let peticion = $.ajax({
            url:"./dynamics/php/Consultas.php",
            data:{busq: carrera, dato: filtro},
            method:"POST"});
        peticion.done((resp)=>{
            $(".results").html(resp)
        })
        peticion.fail(()=>{
            alert("fallo")
        })
    })
    $(".filtmod").on("onChange", ()=>{
        let filtro = $(".filtmod").val();
        let peticion = $.ajax({
            url:"./dynamics/php/Consultas.php",
            data:{dato: filtro},
            method:"POST"});
        peticion.done((resp)=>{
            $(".results").html(resp)
        })
        peticion.fail(()=>{
            alert("fallo")
        })
    })
    
});
