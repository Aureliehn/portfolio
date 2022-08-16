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
  technoMobile:string
  type:string
  methodeDeTravail:string
  ide:string
}
@Component({
  selector: 'app-opsready-project',
  templateUrl: './opsready-project.component.html',
  styleUrls: ['./opsready-project.component.css']
})
export class OpsreadyProjectComponent implements OnInit {
  public url:string='https://www.aumbiosync.com/fr/'
  public myProject:project[] = [
    {identifiant: 1,type:'application web + application mobile (android & IOS)', titre:'Opsready', img:'assets/videos/index.jpg', contexte:'Application métier à destination des pompiers, comprenant une application web correspondant au back-office admin et une application mobile pour les utilisateurs. S\'agissant de l\'application Xamarin j\ai essentiellement travaillé sur des améliorations continues. Pour la partie application Web j\ai travaillé sur de nouvelles features.', annee: 2022, backTechno:'Flask, sqlAlchemy, Marshmallow, Alembic', frontTechno:'Angular, Bootstap', bddTechno:'MariaDB', technoMobile:'Xamarin, C#', methodeDeTravail: 'Agile', ide: 'VIsual Studio'},
    
  ];
  constructor() { }

  ngOnInit(): void {
  }
  public gotToWbsite(url: string){
    window.open(url, "_blank")
  }

}
