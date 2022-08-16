import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent implements OnInit {
  public idProject : string = ""
  public nkIsVisible: boolean = false
  public opsIsVisible: boolean = false
  public optIsVisible: boolean = false
  public otherIsVisible: boolean = false
  normalSize: boolean = true
  container: boolean = true
  bigSize: boolean = false
  helpError: boolean = false
  listCommand : string = 'Les commandes : [ --cv : vous permettra de voir les grandes lignes de mon cv] [ -p ou --projet pour voir la liste des projets] [ -jmf ou --jemenfiche pour avoir des blagues]'
  cv: string = '$ Après une carrière dans le paramédical, j\ai suivi un bootcamp intensif en développement web avant d\'intégrer Aum Biosync comme analyste développeuse durant un an. Pour plus de détail consulter mon cv '
  projet: string = '$ Après avoir participé à des challenges front-end et intégration je me suis concentrée sur mon projet personnel [Natura-kid.fr]. Vous retrouverez également les projets d\'entreprise.'
  commandList : string = ''
  sentence: string =''
  values: string =''
  inputisNotVisible : boolean = false
  jmf: string = "C'est l'histoire d'une pomme de terre qui traverse la route et ce se fait pércuter par une voiture. Les passants ont dit : 'oh purée!' ahahahah"

  constructor(
    private elementRef: ElementRef
  ) {}
    

  ngOnInit(): void {
    // this.elementRef.nativeElement.ownerDocument
    //         .body.style.backgroundColor =  'white';
  }

  public terminalClose(){
    this.container = false
  }

  public help(value: string){
    console.log(value)
    if(value === '-h' || value === '--help'){
      this.commandList = this.listCommand
      this.helpError = false
      this.values = ''
      this.inputisNotVisible = true
    
    }
    else if (value === '--cv' || value === '-cv'){
      this.commandList = this.cv
      this.helpError = false
      this.values = ''
      this.inputisNotVisible = true
    }
    else if (value === '-p' || value === 'projet'){
      this.commandList = this.projet
      this.helpError = false
      this.values = ''
      this.inputisNotVisible = true
    }
    else if (value === '-jmf' || value === 'jemenfiche'){
      this.commandList = this.jmf
      this.helpError = false
      this.values = ''
      this.inputisNotVisible = true
    }
    else if (value === '-nk'){
      this.nkVisible('nk')
      this.helpError = false
      this.values = ''
      this.inputisNotVisible = true
    }
    else{
      this.commandList = ''
      this.values = ''
      this.helpError = true
      this.sentence = "$ Cette commande n'est pas permise; -h ou --help"
    }
    console.log(this.sentence)
  }

  someMethod(event:any){ 
    if(event.keyCode == 13){ 
        this.help(this.values)
    }
  }
  scrollToElement(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  nkVisible(id:string){
    this.idProject = id
    this.opsIsVisible = false
    this.optIsVisible = false
    this.otherIsVisible = false
    this.nkIsVisible = true
    this.scrollToElement(this.idProject)
  }

}
