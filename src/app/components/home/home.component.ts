import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('banner', {static:true}) bannerElement:ElementRef;

  public bannerOffset: Number = null;

  constructor() { }

  ngAfterViewInit() {
    this.bannerOffset = this.bannerElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll')
  checkOffsetTop() {
    if (window.pageYOffset >= this.bannerOffset) {
      let element = document.getElementById('navbar');
      element.style.background = '#FCFCFC';
      let anchorElement = document.getElementsByClassName('item')
      for(let i = 0; i < anchorElement.length; i++) {
        anchorElement[i]['style']['color'] = '#777777';
      }
    } else {
      let element = document.getElementById('navbar');
      element.style.background = '#131212';
      let anchorElement = document.getElementsByClassName('item')
      for(let i = 0; i < anchorElement.length; i++) {
        anchorElement[i]['style']['color'] = '#f1f1f1';
      }
    }
  }

}
