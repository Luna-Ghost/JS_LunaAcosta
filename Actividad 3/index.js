function Hola() {
    alert("Bienvenido a la aventura de Hansel y Gretel");
    let si = confirm("¿Quieres iniciar?");

    if(si)
    {
        let op1;
        let op2;
        let cam1 = prompt("Escribe 'derecha' o 'izquierda' según el camino que quieras escoger");
        if(cam1 == "derecha" || cam1 == "Derecha")
        {
            document.cookie = "camino1=2";
        }
        if(cam1 === "izquierda" || cam1 === "Izquierda")
        {
            document.cookie = "camino1=1";
        }
        let cam2 = prompt("Escribe 'derecha' o 'izquierda' según el camino que quieras escoger");
        if(cam2 == "derecha" || cam2 == "Derecha" )
        {
            document.cookie = "camino2=2";
        }
        if(cam2 === "izquierda" || cam2 === "Izquierda")
        {
            document.cookie = "camino2=1";
        } 
        let cookies = document.cookie;
        let arrCookies = cookies.split('; ');
        console.log(arrCookies);
        let arreglo = [];
        for(const valor of arrCookies)
        {
            const cookie = valor.split('=');
            console.log(cookie);
            arreglo.push(cookie);
            if(cookie[0]==='camino1')
            {
                op1 = cookie[1];
            }
            if(cookie[0]==='camino2')
            {
                op2 = cookie[1];
            }
        }
        console.log(document.cookie);
        console.log(op1+" - "+op2);
        if(op1==1)
        {
            if(op2==1)
            {
                console.log("En casita");
                document.cookie = "camino1=1; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                document.cookie = "camino2=1; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                window.location.href = "./destinos/destino1.html";
            }
            else{
                console.log("Tronquito");
                document.cookie = "camino1=1; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                document.cookie = "camino2=1; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                window.location.href = "./destinos/destino2.html";
            }
        }
        if(op1==2)
        {
            if(op2==1)
            {
                console.log("Hongo");
                document.cookie = "camino1=1; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                document.cookie = "camino2=1; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                window.location.href = "./destinos/destino3.html";
            }
            else{
                console.log("Casa bruja");
                document.cookie = "camino1=1; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                document.cookie = "camino2=1; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                window.location.href = "./destinos/destino4.html";
            }
        }
    } 
    else 
    {
        alert("Está bien, será en otra ocasión.");
    }
}
setTimeout(Hola,1000);
//setInterval(Hola, 1000);
clearTimeout();
//clearInterval();