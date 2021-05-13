class Pokemón
{
    constructor(nombre,naturaleza,tipo,vida,ataque,defensa,velocidad,nivel)
    {
        this.nombre = nombre;
        this.naturaleza = naturaleza;
        this.tipo = tipo;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
        this.nivel = nivel;
    }

    subir_nivel()
    {
        if(this.nivel<100)
        {
            console.log ("Su pokémon ha subido de nivel: ");
            this.nivel++;
            console.log (this.nivel);
            if(this.naturaleza == 'Audaz')
            {
                this.ataque+=4;
                console.log ("Subió en ataque a " + this.ataque)
            } else if(this.naturaleza == 'Osada')
            {
                this.defensa+=4;
                console.log ("Subió en defensa a " + this.defensa)
            } else if(this.naturaleza == 'Cauta')
            {
                this.vida+=4;
                console.log ("Subió en vida a " + this.vida)
            } else
            {
                this.velocidad+=4;
                console.log ("Subió en velocidad a " + this.velocidad)
            }
        } else
        {
            console.log ("Tu Pokémon ya es nivel 100, ha llegado al máximo")
        }
        
    }

    presentarse()
    {
        console.log ("Hola, me llamo " + this.nombre + " soy tipo " + this.tipo + " y estoy en el nivel " + this.nivel);
    }

    suma_estadisticas()
    {
        console.log (this.velocidad + this.defensa + this.ataque + this.vida);
    }

    promedio_estadisticas()
    {
        console.log ((this.velocidad + this.defensa + this.ataque + this.vida)/4);
    }
}

const SANDSLASH = new Pokemón('Sandslash','Osada','Tierra',60,72,84,48,12);
const NINETALES = new Pokemón('Ninetales','Alegre','Fuego',15,15,15,18,3);
const SCYTHER = new Pokemón('Scyther','Audaz','Bicho',90,126,90,126,18);
const ZARUDE = new Pokemón('Zarude','Audaz','Siniestro',420,480,420,420,60);
const XERNEAS = new Pokemón('Xerneas','Cauta','Hada',712,712,534,534,89);