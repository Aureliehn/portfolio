import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-identity-card',
  templateUrl: './identity-card.component.html',
  styleUrls: ['./identity-card.component.css']
})
export class IdentityCardComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument
    .body.style.backgroundColor =  '#0d1a2d';
}
  }


