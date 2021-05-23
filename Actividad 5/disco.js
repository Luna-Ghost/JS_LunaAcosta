function cuadros(){
    return Math.round(Math.random() *10);
     return Math.round(Math.random() * 3) + 1;
 } 

 window.addEventListener('load', ()=>{
     const inicio = document.getElementById('boton');
     const c1 = document.getElementById('caudro1');
     const c2 = document.getElementById('cuadro2');
     const c3 = document.getElementById('cuadro3');
     const c4 = document.getElementById('cuadro4');
     new Promise((resolve,reject)=> {
         inicio.addEventListener("click", ()=>{
             console.log("hola");
             resolve();
         })
     }).then(()=>{
         return new Promise((resolve)=>{
            setTimeout(()=>{
                let secuencia = [];
                for(i=1; i<6; i++)
                {
                    let sacar_sec = cuadros();
                    if(sacar_sec<=4 && sacar_sec>=1)
                    {
                        console.log("cuadro"+sacar_sec);
                        secuencia.push("cuadro"+sacar_sec);
                    }else if(sacar_sec>4)
                    {
                        let util = Math.round
                        sacar_sec = 4;
                        console.log("cuadro"+sacar_sec);
                        secuencia.push("cuadro"+sacar_sec);
                    }else if(sacar_sec<1)
                    {
                        sacar_sec = 1;
                        console.log("cuadro"+sacar_sec);
                        secuencia.push("cuadro"+sacar_sec);
                    }
                }
                console.log(secuencia);
                resolve(secuencia);
            })
        })
    }).then((secuencia)=>{
        let i;
        let s;
        setTimeout(()=>{
            for(i=0; i<5; i++)
            {
                s= secuencia[i];
                switch (s)
                {
                    case "cuadro1":
                        console.log("soy uno");
                        c1.style.backgroundColor= "#ff3a96";
                        break;
                    case "cuadro2": 
                        console.log("soy dos");
                        break;
                    case "cuadro3":
                        console.log("soy tres");
                        break;
                    case "cuadro4":
                        console.log("soy cuatro");
                        break;
                }
            }
        })
    })
 })