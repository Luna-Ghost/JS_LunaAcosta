function cuadros(){
return Math.round(Math.random() * 3) + 1;
} 

function cambia(numero= 0)
{
    switch (numero)
    {
        case "cuadro1":
            console.log("soy uno");
            const c1 = document.getElementById('cuadro1');
            setTimeout(()=>{
                c1.style.backgroundColor= "#ff3a96";
            }, 1000)
            setTimeout(()=>{
                c1.style.backgroundColor= "#FF38E1";
            }, 1500)
            break;
        case "cuadro2": 
            console.log("soy dos");
            const c2 = document.getElementById('cuadro2');
            setTimeout(()=>{
            c2.style.backgroundColor="#3f31ff";
            },1000)
            setTimeout(()=>{
                c2.style.backgroundColor="#319FFF";
            },1500)
            break;
        case "cuadro3":
            console.log("soy tres");
            const c3 = document.getElementById('cuadro3');
            setTimeout(()=>{
            c3.style.backgroundColor="#fa7900";
            },1000)
            setTimeout(()=>{
                c3.style.backgroundColor="#FA9A00";
            },1500)
            break;
        case "cuadro4":
            console.log("soy cuatro");
            const c4 = document.getElementById('cuadro4');
            setTimeout(()=>{
                c4.style.backgroundColor="#0f9103";
            }, 1000)
            setTimeout(()=>{
                c4.style.backgroundColor="#3EFF00";
            }, 1500)
            break;
    }
}

window.addEventListener('load', ()=>{
    const inicio = document.getElementById('boton');
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
        return new Promise((resolve)=>{
            let l= secuencia[0];
            cambia(l);
            resolve(secuencia);
        })
    }).then((secuencia)=>{
        return new Promise((resolve)=>{
            let m= secuencia[1]
            setTimeout(()=>{
                cambia(m);
            },1000)
            resolve(secuencia);
        })
    }).then((secuencia)=>{
        return new Promise((resolve)=>{
            let n= secuencia[2]
            setTimeout(()=>{
                cambia(n);
            }, 2000)
            resolve(secuencia);
        })
    }).then((secuencia)=>{
        return new Promise((resolve)=>{
            let o= secuencia[3];
            setTimeout(()=>{
                cambia(o);
            }, 3000)
            resolve(secuencia);
        })
    }).then((secuencia)=>{
        return new Promise((resolve)=>{
            let p= secuencia[4];
            setTimeout(()=>{
                cambia(p);
            }, 4000)
            resolve(secuencia);
        })
    }).then((secuencia)=>{
        let sec_usuario = [];
        let ganar = 0;

        let cuadro1 = document.getElementById("cuadro1");
        let cuadro2 = document.getElementById("cuadro2");
        let cuadro3 = document.getElementById("cuadro3");
        let cuadro4 = document.getElementById("cuadro4");

        cuadro1.addEventListener('click', ()=>{
            let cuadro1 = document.getElementById("cuadro1");
            let cuadro2 = document.getElementById("cuadro2");
            let cuadro3 = document.getElementById("cuadro3");
            let cuadro4 = document.getElementById("cuadro4");
            cuadro1.style.backgroundColor = "#FF3A96";
            cuadro2.style.backgroundColor = "#319FFF";
            cuadro3.style.backgroundColor = "#FA9A00";
            cuadro4.style.backgroundColor = "#3EFF00";
            sec_usuario.push("cuadro1");
            let longitud = sec_usuario.length;
            ganadora(longitud, sec_usuario, ganar, secuencia);
        })
        cuadro2.addEventListener('click', ()=>{
            cuadro1.style.backgroundColor = "#FF38E1";
            cuadro2.style.backgroundColor = "#3f31ff";
            cuadro3.style.backgroundColor = "#FA9A00";
            cuadro4.style.backgroundColor = "#3EFF00";
            sec_usuario.push("cuadro2");
            let longitud = sec_usuario.length;
            ganadora(longitud, sec_usuario, ganar, secuencia);

        })
        cuadro3.addEventListener('click', ()=>{
            cuadro1.style.backgroundColor = "#FF38E1";
            cuadro2.style.backgroundColor = "#319FFF";
            cuadro3.style.backgroundColor = "#fa7900";
            cuadro4.style.backgroundColor = "#3EFF00";
            sec_usuario.push("cuadro3");
            let longitud = sec_usuario.length;
            ganadora(longitud, sec_usuario, ganar, secuencia);

        })
        cuadro4.addEventListener('click', ()=>{
            cuadro1.style.backgroundColor = "#FF38E1";
            cuadro2.style.backgroundColor = "#319FFF";
            cuadro3.style.backgroundColor = "#FA9A00";
            cuadro4.style.backgroundColor = "#0f9103";
            sec_usuario.push("cuadro4");
            let longitud = sec_usuario.length;
            ganadora(longitud, sec_usuario, ganar, secuencia);

        })
        console.log(sec_usuario);
    })
})

function ganadora(longitud, sec_usuario, ganar, secuencia)
{
    if(longitud===5)
    {
        console.log(sec_usuario); 
        for(let x=1; x<=5; x++)
        {
            if(secuencia[x]===sec_usuario[x])
            {
                ganar+=1;
            }
        }
        
        let eliminar = document.getElementsByClassName("eliminados");
        console.log(eliminar)
        document.body.innerHTML = "";
        if(ganar===5)
        {
            document.body.innerHTML = ("<h1>Disco de Yoohoo :D</h1><br><br><br><br><br><br><br><br><br><br><br><h1>Ganaste</h1><br><br><br><br><br><br><br><br><br><br><br><br><br><h3>Hecho por Luna e Irandy</h3>");
            console.log("Ganaste");
        }
        else{
            document.body.innerHTML = ("<h1>Disco de Yoohoo :D</h1><br><br><br><br><br><br><br><br><br><br><br><h1>Perdiste</h1><br><br><br><br><br><br><br><br><br><br><br><br><br><h3>Hecho por Luna e Irandy</h3>");
            console.log("Perdiste con "+ganar+" buenas de 5");
        }
    }
}
