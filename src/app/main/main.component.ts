import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title: string;

  nav_menu_items: string[];
  videoUrl = "https://www.youtube.com/embed/2YBtspm8j8M";
  logoSrc: string;
  coverSrc: string;
  safeUrl: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    ) {
    this.safeUrl = sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

  ngOnInit(){
    this.nav_menu_items = ["Inicio", "Sobre Nosotros", "Talleres", "Contacto"];
    this.title = "Inicio";
    this.logoSrc = "https://via.placeholder.com/40?text=logo";
    this.coverSrc = "https://via.placeholder.com/1200x400?text=Proyecto+99+Cover+Photo";
  }


}
