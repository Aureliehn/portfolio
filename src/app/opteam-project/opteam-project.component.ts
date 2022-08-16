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
 
  type:string
  methodeDeTravail:string
  ide:string
}
@Component({
  selector: 'app-opteam-project',
  templateUrl: './opteam-project.component.html',
  styleUrls: ['./opteam-project.component.css']
})
export class OpteamProjectComponent implements OnInit {
  public url:string='https://www.aumbiosync.com/fr/'
  public myProject:project[] = [
    {identifiant: 1,type:'application web', titre:'Opteam', img:'assets/img/opteam.png', contexte:'Application web à destination des pompiers. Travail en équipe au sein de AUM BIOSYNC. Sur ce produit j\'ai participé aux amélioratoins continues et réglage de bug.', annee: 2022, backTechno:'Flask, sqlAlchemy, Marshmallow, Alembic', frontTechno:'Angular, Bootstap', bddTechno:'PostgreSQL', methodeDeTravail: 'Agile', ide: 'VIsual Studio Code'},
    
  ];
  constructor() { }

  ngOnInit(): void {
  }
  public gotToWbsite(url: string){
    window.open(url, "_blank")
  }
}
