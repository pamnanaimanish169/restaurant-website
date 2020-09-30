import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplaySpeed:10,
    animateIn: 'fadeIn',
    animateOut:'fadeOut',
    navSpeed: 700,
    navText: ['<img src="../../../assets/images/left-arrow.png">', '<img src="../../../assets/images/right-arrow.png">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay: true,
    autoplaySpeed:10,
    animateIn: 'fadeIn',
    animateOut:'fadeOut',
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  customOptions3: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    autoplaySpeed:10,
    animateIn: 'fadeIn',
    animateOut:'fadeOut',
    navSpeed: 700,
    navText: ['<img src="../../../assets/images/left-arrow-small.png">', '<img src="../../../assets/images/right-arrow-small.png">'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  customOptions4: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    autoplaySpeed:10,
    animateIn: 'fadeIn',
    animateOut:'fadeOut',
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
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
