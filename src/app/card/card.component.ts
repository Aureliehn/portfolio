import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface project{
  identifiant:number;
  titre:string;
  img:string;
  contexte:string;
  annee:number;
  backTechno:string;
  frontTechno:string;
  bddTechno:string;
  librairy:string;
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {

  public nkIsVisible: boolean = false
  public opsIsVisible: boolean = false
  public optIsVisible: boolean = false
  public otherIsVisible: boolean = false
  public title: string = 'Les projets'
  public project: number = 0
  public projectSelected: project[] = []
  public idProject : string = ""

  public myProject:project[] = 
  [

    {identifiant: 1, titre:'Natura-kid', img:'', contexte:'', annee: 2022, backTechno:'', frontTechno:'', bddTechno:'', librairy:''},
    {identifiant: 1, titre:'Opsready', img:'', contexte:'', annee: 2022, backTechno:'', frontTechno:'', bddTechno:'', librairy:''},
    {identifiant: 1, titre:'Opteam', img:'', contexte:'', annee: 2022, backTechno:'', frontTechno:'', bddTechno:'', librairy:''},
    {identifiant: 1, titre:'Referend\'Aum', img:'', contexte:'', annee: 2022, backTechno:'', frontTechno:'', bddTechno:'', librairy:''},
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  // public goToDetail(project: number){
  //   this.detailIsVisible = true
  //   this.project = project
  //   this.projectSelected = this.myProject[0]

  // }
  // public closeProjectSelect(validate: boolean): void {
  //   this.detailIsVisible = false
  //   if (!validate)
  //     return
  // }
  // public openProjectSelect(event: Event | undefined = undefined): void {
  //   this.detailIsVisible = true
  
  //   if (event) {
  //     event.preventDefault()
  //     event.stopPropagation()
  //   }
  // }
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
