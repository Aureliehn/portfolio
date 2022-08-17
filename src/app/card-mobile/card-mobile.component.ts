import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-mobile',
  templateUrl: './card-mobile.component.html',
  styleUrls: ['./card-mobile.component.css']
})
export class CardMobileComponent implements OnInit {
  public nkIsVisible: boolean = false
  public opsIsVisible: boolean = false
  public optIsVisible: boolean = false
  public otherIsVisible: boolean = false
  public idProject : string = ""
  constructor() { }

  ngOnInit(): void {
  }
  nkVisible(id:string){
    this.idProject = id
    this.opsIsVisible = false
    this.optIsVisible = false
    this.otherIsVisible = false
    this.nkIsVisible = true
    this.scrollToElement(this.idProject)
  }
  opsVisible(id:string){
    this.idProject = id
    this.opsIsVisible = true
    this.optIsVisible = false
    this.otherIsVisible = false
    this.nkIsVisible = false
    this.scrollToElement(this.idProject)
  }
  optVisible(id:string){
    this.idProject = id
    this.opsIsVisible = false
    this.optIsVisible = true
    this.otherIsVisible = false
    this.nkIsVisible = false
    this.scrollToElement(this.idProject)
  }
  otherVisible(id:string){
    this.idProject = id
    this.opsIsVisible = false
    this.optIsVisible = false
    this.otherIsVisible = true
    this.nkIsVisible = false
    this.scrollToElement(this.idProject)
  }
  scrollToElement(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
