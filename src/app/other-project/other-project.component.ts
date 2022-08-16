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
  selector: 'app-other-project',
  templateUrl: './other-project.component.html',
  styleUrls: ['./other-project.component.css']
})
export class OtherProjectComponent implements OnInit {
  public url:string='https://www.aumbiosync.com/fr/'
  public myProject:project[] = [
    {identifiant: 1,type:'application web', titre:'Référend\'AUM', img:'assets/img/aumb.png', contexte:'Application web à destination du service qualité et commercial. Travail en équipe au sein de AUM BIOSYNC. J\'ai eu la chance de participer à ce projet dès le démarrage. J\'ai ainsi travaillé au développement des fonctionnalités, puis les améliorations continues.', annee: 2021, backTechno:'Flask, sqlAlchemy, Marshmallow, Alembic', frontTechno:'Angular, Bootstap', bddTechno:'PostgreSQL', methodeDeTravail: 'Agile', ide: 'VIsual Studio Code'},
    
  ];
  constructor() { }

  ngOnInit(): void {
  }
  public gotToWbsite(url: string){
    window.open(url, "_blank")
  }
}
