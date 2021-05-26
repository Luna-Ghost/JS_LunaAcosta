window.addEventListener("load",()=>{
    let dibujar = document.getElementById("dibujar");
    dibujar.addEventListener("click",()=>{
        let color = $("#1").val();
        let color2 = $("#2").val();
        let fondo = $("#relleno").val();
        let figura = $("#figura").val();
        console.log(color,color2,fondo,figura)
        switch(figura){
            case "estrella":
                var estrella = document.getElementById("canvas");
                if (estrella && estrella.getContext) {
                    var ctx = estrella.getContext("2d");
                    ctx.clearRect(0,0,500,500);
                    if (ctx) {
                        if(fondo=="solido")
                        {
                            ctx.fillStyle = color;
                        }else if(fondo=="lineal"){
                            let degradado = ctx.createLinearGradient(70,70,70,450);
                            degradado.addColorStop(0,color);
                            degradado.addColorStop(1,color2);
                            ctx.fillStyle = degradado;
                        }else{
                            let degradado = ctx.createRadialGradient(250,250,10,250,250,150);
                            degradado.addColorStop(0,color);
                            degradado.addColorStop(1,color2);
                            ctx.fillStyle = degradado;
                        }
                        var coordX = 250;
                        var coordY = 250;
                        var radio = 200;
                        
                        var lados = 5;
                        var paso = 2;
        
                        var est= lados / paso
                        var rad = (Math.PI*2) / est;
                        
                        ctx.beginPath();
                        for( var i = 0; i < lados; i++ ){
                        x = coordX + radio * Math.cos( rad*i );
                        y = coordY + radio * Math.sin( rad*i );
                        ctx.lineTo(x, y);
                        }
                        ctx.closePath();
                        ctx.fill();
                    }
                }
                break;
            case "micky":
                var micky = document.getElementById("canvas");
                if (micky && micky.getContext) {
                    var ctx = micky.getContext("2d");
                    ctx.clearRect(0,0,500,500);
                    if (ctx) {
                        if(fondo=="solido")
                        {
                            ctx.fillStyle = color;
                        }else if(fondo=="lineal"){
                            let degradado = ctx.createLinearGradient(70,70,70,380);
                            degradado.addColorStop(0,color);
                            degradado.addColorStop(1,color2);
                            ctx.fillStyle = degradado;
                        }else{
                            let degradado = ctx.createRadialGradient(250,250,60,250,250,250);
                            degradado.addColorStop(0,color);
                            degradado.addColorStop(1,color2);
                            ctx.fillStyle = degradado;
                        }
                        var coordX = 250;
                        var coordY = 300;
                        var radio1 = 150;
                        var coordX1 = 130;
                        var coordY1= 180;
                        var coordX2 = 370;
                        var radio2 = 100;
                        
                        ctx.beginPath();
                        ctx.arc(coordX,coordY,radio1,0,Math.PI*2);
                        ctx.arc(coordX1,coordY1,radio2,0,Math.PI*2);
                        ctx.arc(coordX2,coordY1,radio2,Math.PI*2,0);
                        ctx.closePath();
                        ctx.fill();
                    }
                }
                break;
            case "torre":
                var torre = document.getElementById("canvas");
                if (torre && torre.getContext) {
                    var ctx = torre.getContext("2d");
                    ctx.clearRect(0,0,500,500);
                    if (ctx) {
                        if(fondo=="solido")
                        {
                            ctx.fillStyle = color;
                        }else if(fondo=="lineal"){
                            let degradado = ctx.createLinearGradient(0,0,0,500);
                            degradado.addColorStop(0,color);
                            degradado.addColorStop(1,color2);
                            ctx.fillStyle = degradado;
                        }else{
                            let degradado = ctx.createRadialGradient(250,250,50,250,250,240);
                            degradado.addColorStop(0,color);
                            degradado.addColorStop(1,color2);
                            ctx.fillStyle = degradado;
                        }
                        var coordX1_base = 50;
                        var coordY1_base = 430;
                        var coordX2_base = 400;
                        var coordY2_base = 500;
                        var coordX1_torre = 100;
                        var coordY1_torre = 100;
                        var coordX2_torre = 300;
                        var coordY2_torre = 400;
                        var coordY1 = 0;
                        var coordY2 = 100;
                        
                        ctx.beginPath();
                        ctx.rect(coordX1_base,coordY1_base,coordX2_base,coordY2_base);
                        ctx.rect(coordX1_torre,coordY1_torre,coordX2_torre,coordY2_torre);
                        ctx.rect(coordX1_torre,coordY1,70,coordY2);
                        ctx.rect(215,coordY1,70,coordY2);
                        ctx.rect(330,coordY1,70,coordY2);
                        ctx.rect(65,60,370,100);
                        ctx.closePath();
                        ctx.fill();
                    }
                }
                break;
        }
    })
})