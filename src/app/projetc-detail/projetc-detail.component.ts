import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  selector: 'app-projetc-detail',
  templateUrl: './projetc-detail.component.html',
  styleUrls: ['./projetc-detail.component.css']
})
export class ProjetcDetailComponent implements OnInit {
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>()
  @Output() validate: EventEmitter<void> = new EventEmitter<void>()
  @Input() public project: 0 | undefined

  public url:string='https://natura-kid.fr/#/accueil'
  public myProject:project[] = [
    {identifiant: 1, titre:'Natura-kid', img:'assets/img/Capture.png', contexte:'Projet personnel réalisé en dehors de mes horaires de travail pour le passage du titre de developpeuse web. J\'ai entièrement réalisé le projet, du cahier des charges en passant par la maquette, le développement jusqu\'à la mise en production', annee: 2022, backTechno:'Flask, sqlAlchemy, Marshmallow, Alembic', frontTechno:'Angular, Bootstap', bddTechno:'PostgreSql', librairy:'Open Weather, LeafletJS, JSPDF, LeafletGPX, MailJet, Pytest, pypi'},
    {identifiant: 1, titre:'Opsready', img:'', contexte:'', annee: 2022, backTechno:'', frontTechno:'', bddTechno:'', librairy:''},
    {identifiant: 1, titre:'Opteam', img:'', contexte:'', annee: 2022, backTechno:'', frontTechno:'', bddTechno:'', librairy:''},
    {identifiant: 1, titre:'Referend\'Aum', img:'', contexte:'', annee: 2022, backTechno:'', frontTechno:'', bddTechno:'', librairy:''},
  ];


  constructor() { }

  ngOnInit(): void {
  }
  public gotToWbsite(url: string){
    window.open(url, "_blank")
  }
}
