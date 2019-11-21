import { HomeService } from './../../service/home.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  updates: any[];
  updates1;
  updates2;
  facebookTargetUrl = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcontacto.proyecto99&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId";
  facebookUrl: SafeResourceUrl;
  youtubeTargetUrl = "https://www.youtube.com/embed/f8pXONYEsMs";
  youtubeUrl: SafeResourceUrl;
  constructor(
    private sanitizer: DomSanitizer,
    public hService: HomeService
    ) {
    this.facebookUrl = sanitizer.bypassSecurityTrustResourceUrl(this.facebookTargetUrl);
    this.youtubeUrl = sanitizer.bypassSecurityTrustResourceUrl(this.youtubeTargetUrl);
   }

  ngOnInit() {
    this.updates=[
      {id: 1, img: "https://via.placeholder.com/200/0000FF/808080?text=story+1", story: "This is an example story to publish on the newsfeed. It holds no relevant information and serves as an example. This is an example story to publish on the newsfeed. It holds no relevant information and serves as an example.", publishedOn: new Date(2019, 10, 8)},
      {id: 2, img: "https://via.placeholder.com/300/FFFF00/000000?text=story+2", story: "This is also an example story to publish on the newsfeed. It holds no relevant information and serves as an example. This is an example story to publish on the newsfeed. It holds no relevant information and serves as an example.", publishedOn: new Date(2019, 10, 7)}
    ];
    this.updates1=this.updates[0];
    this.updates2=this.updates[1];
    this.hService.getNews(2).subscribe((reply)=>
    {
      //console.log(reply);
      this.updates2=reply;
    })
    this.hService.getNews(2).subscribe((reply)=>
    {
      console.log(reply[0]);
      this.updates2=reply[0];
    })
    this.hService.getNews(1).subscribe((reply)=>
    {
      console.log(reply[0]);
      this.updates1=reply[0];
    })

    console.log(this.updates2)
  }

}
