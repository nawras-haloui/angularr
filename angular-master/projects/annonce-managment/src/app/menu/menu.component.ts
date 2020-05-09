import { Component, OnInit ,ViewChild, HostListener} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  opened = true;
  sticky: boolean = false;
  
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  //@ViewChild('toolbar', { static: true }) toolbar:  ElementRef;
  barPosition: any;
  constructor() { }

  ngOnInit(): void {
    console.log(window.innerWidth)
    if (window.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 65;
      this.opened = true;
    }
  }

  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 65;
      this.opened = true;
    }
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }
  @HostListener('window:scroll', ['$event'])
    handleScroll(){
        const pos = document.getElementById("tool").offsetTop;
        const windowScroll = window.pageYOffset;
       
        if(windowScroll >= pos){
            this.sticky = true;
        } else {
            this.sticky = false;
        }
    }


}
