import { TalleresService } from './../../../../../service/talleres.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContentTallerModComponent } from './content-taller-mod/content-taller-mod.component';

@Component({
  selector: 'app-ctalleres',
  templateUrl: './ctalleres.component.html',
  styleUrls: ['./ctalleres.component.css']
})
export class CtalleresComponent implements OnInit {

  talleresD;
  talleresI;
  talleresA;

  constructor(
    public dialog: MatDialog,
    public tService: TalleresService
  ) { }

  ngOnInit() {
    this.talleresD=[
      {
        title:"Basket",
        image:"https://vanguardia.com.mx/sites/default/files/styles/paragraph_image_large_desktop_1x/public/basket-callejero.jpg",
        desc:"El baloncesto, basquetbol o básquetbol (del inglés basketball; de basket, 'canasta', y ball, 'pelota') o simplemente básquet,1​ es un deporte de equipo, jugado entre dos conjuntos de cinco jugadores cada uno durante cuatro períodos o cuartos de diez2​ o doce minutos cada uno. El objetivo del equipo es anotar puntos introduciendo un balón por la canasta, un aro a 3,05 metros sobre la superficie de la pista de juego del que cuelga una red. La puntuación por cada canasta o cesta es de dos o tres puntos, dependiendo de la posición desde la que se efectúa el tiro a canasta, o de uno, si se trata de un tiro libre por una falta de un jugador contrario. El equipo ganador es el que obtiene el mayor número de puntos. ",
        horario:[
            {
              dia:"lunes",
              hora:"16:00-17:00"
            },
            {
              dia:"Sabado",
              hora:"10:00-11:00"
            },
          ],
        voluntario:["Pedro Dias","El otro","ese otro x2"]

      },
      {
        title:"Futboll",
        image:"https://sanantonio.cl/media/k2/items/cache/4ef84c2d266de593c13072053c16d228_XL.jpg",
        Descripcion:"fut",
        desc:"El fútbol o futbol2​ (del inglés británico football, traducido como balompié)3​ es un deporte de equipo jugado entre dos conjuntos de once jugadores cada uno y algunos árbitros que se ocupan de que las normas se cumplan correctamente. Es ampliamente considerado el deporte más popular del mundo, pues lo practican unas 270 millones de personas.4​ También se le conoce como futbol asociación o fútbol asociación, nombre derivado de The Football Association, primera federación oficial del mundo en este deporte y que utilizó ese nombre para distinguirlo de otros deportes que incluyen la palabra 'futbol' o 'fútbol'.​ En algunos países de habla inglesa también se le conoce como soccer, abreviatura de association, puesto que el nombre de football en esos países se asocia mayoritariamente a otros deportes con esa denominación (principalmente en Estados Unidos donde el nombre football aplica para el fútbol americano, un deporte totalmente distinto). ",
        horario:[
            {
              dia:"martes",
              hora:"13:00-15:00"
            },
            {
              dia:"Sabado",
              hora:"11:00-12:00"
            },
          ],
        voluntario:["Mano Dias","El hermano del otro"]
      }
    ];

    this.tService.getTalleres("deportivo").subscribe((reply)=>{
      console.log("deportivos:",reply);
      this.talleresD=reply;
    })

    this.talleresI=[
      {
        title:"Ingles basico",
        image:"https://dev-res.thumbr.io/libraries/19/17/24/lib/1466673908951_13.jpg?size=854x493s&ext=jpg"
      }
    ];

    this.tService.getTalleres("idioma").subscribe((reply)=>{
      console.log("idioma:",reply);
      this.talleresI=reply;
    })

    this.talleresA=[
      {
        title:"Folklore",
        image:"https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2016/04/17/compania_danza_folklorica.jpg?itok=ed8E-A2-"
      },
      {
        title:"Guitarra",
        image:"https://www.guitarraviva.com/wp-content/uploads/2015/09/stock-nylon-bossa_67587098-1400x787.jpg"
      }
    ];

    this.tService.getTalleres("arte").subscribe((reply)=>{
      console.log("arte:",reply);
      this.talleresA=reply;
    })
  }
  /*
    title: string;
    desc: string;
    horario: object;
    voluntarios:object;
  */
  loadMod(info): void {
    if(info)
    {
      const dialogRef = this.dialog.open(ContentTallerModComponent, {
        width: '750px',
        data: {title: info.title, desc: info.desc, horario: info.horario, voluntarios:info.voluntario,id:info._id}
      });
      //after closes updates te list (to see if it is errased)
      dialogRef.afterClosed().subscribe((reply)=>{
        this.tService.getTalleres("deportivo").subscribe((reply)=>{
          console.log("deportivos:",reply);
          this.talleresD=reply;
        })

        this.tService.getTalleres("idioma").subscribe((reply)=>{
          console.log("idioma:",reply);
          this.talleresI=reply;
        })

        this.tService.getTalleres("arte").subscribe((reply)=>{
          console.log("arte:",reply);
          this.talleresA=reply;
        })
      })
    }
    else
    {
      const dialogRef = this.dialog.open(ContentTallerModComponent, {
        width: '750px',
        data:{title: "", desc: "", horario:  "", voluntarios: ""}
      });
      //after closes updates te list (to see if it is created)
      dialogRef.afterClosed().subscribe((reply)=>{
        this.tService.getTalleres("deportivo").subscribe((reply)=>{
          console.log("deportivos:",reply);
          this.talleresD=reply;
        })

        this.tService.getTalleres("idioma").subscribe((reply)=>{
          console.log("idioma:",reply);
          this.talleresI=reply;
        })

        this.tService.getTalleres("arte").subscribe((reply)=>{
          console.log("arte:",reply);
          this.talleresA=reply;
        })
      })
    }
    
  };
}
