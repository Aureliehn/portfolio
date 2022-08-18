import { Component, OnInit } from '@angular/core';
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
  public urlNK:string='https://natura-kid.fr/#/accueil'
  public urlAUM:string='https://www.aumbiosync.com/fr/'
  public myProject:project[] = [
    {identifiant: 1, titre:'Natura-kid', img:'assets/img/Capture.png', contexte:'Projet personnel réalisé en dehors de mes horaires de travail pour le passage du titre de developpeuse web. J\'ai entièrement réalisé le projet, du cahier des charges en passant par la maquette, le développement jusqu\'à la mise en production', annee: 2022, backTechno:'Flask, sqlAlchemy, Marshmallow, Alembic', frontTechno:'Angular, Bootstap', bddTechno:'PostgreSql', librairy:'Open Weather, LeafletJS, JSPDF, LeafletGPX, MailJet, Pytest, pypi'},
    {identifiant: 2, titre:'Opsready', img:'', contexte:'Application métier à destination des pompiers, comprenant une application web correspondant au back-office admin et une application mobile pour les utilisateurs. S\'agissant de l\'application Xamarin j\ai essentiellement travaillé sur des améliorations continues. Pour la partie application Web j\ai travaillé sur de nouvelles features.', annee: 2022, backTechno:'Flask, sqlAlchemy, Marshmallow, Alembic', frontTechno:'Angular, Bootstap', bddTechno:'MariaDB', librairy:''},
    {identifiant: 3, titre:'Opteam', img:'', contexte:'Application web à destination des pompiers. Travail en équipe au sein de AUM BIOSYNC. Sur ce produit j\'ai participé aux amélioratoins continues et réglage de bug.', annee: 2022, backTechno:'Flask, sqlAlchemy, Marshmallow, Alembic', frontTechno:'Angular, Bootstap', bddTechno:'PostgreSQL', librairy:''},
    {identifiant: 4, titre:'Referend\'Aum', img:'', contexte:'Application web à destination du service qualité et commercial. Travail en équipe au sein de AUM BIOSYNC. J\'ai eu la chance de participer à ce projet dès le démarrage. J\'ai ainsi travaillé au développement des fonctionnalités, puis les améliorations continues.', annee: 2021, backTechno:'Flask, sqlAlchemy, Marshmallow, Alembic', frontTechno:'Angular, Bootstap', bddTechno:'PostgreSQL', librairy:''},
  ];
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
  public gotToWbsite(url: string){
    window.open(url, "_blank")
  }
}
