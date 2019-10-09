import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string;
  facebookTargetUrl = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId";
  facebookUrl: SafeResourceUrl;
  nav_menu_items: string[];
  videoUrl = "https://www.youtube.com/embed/2YBtspm8j8M";
  logoSrc: string;
  coverSrc: string;
  safeUrl: SafeResourceUrl;
  updates: any[];

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
    this.facebookUrl = sanitizer.bypassSecurityTrustResourceUrl(this.facebookTargetUrl);
  }

  ngOnInit(){
    this.nav_menu_items = ["Inicio", "Sobre Nosotros", "Talleres", "Contacto"];
    this.title = "Inicio";
    this.logoSrc = "https://via.placeholder.com/40?text=logo";
    this.coverSrc = "https://via.placeholder.com/1200x400?text=Proyecto+99+Cover+Photo";

    this.updates=[
      {id: 1, img: "https://via.placeholder.com/200/0000FF/808080?text=story+1", story: "This is an example story to publish on the newsfeed. It holds no relevant information and serves as an example. This is an example story to publish on the newsfeed. It holds no relevant information and serves as an example.", publishedOn: new Date(2019, 10, 8)},
      {id: 2, img: "https://via.placeholder.com/300/FFFF00/000000?text=story+2", story: "This is also an example story to publish on the newsfeed. It holds no relevant information and serves as an example. This is an example story to publish on the newsfeed. It holds no relevant information and serves as an example.", publishedOn: new Date(2019, 10, 7)}
    ];
    
  }

  

}

