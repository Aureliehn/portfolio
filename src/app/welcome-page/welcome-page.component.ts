import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  public cvIsVisible : boolean = false
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument
            .body.style.backgroundColor =  '#0d1a2d';
  }
  scrollToElement(element: any): void {
    
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    this.cvIsVisible = true
  }
}
