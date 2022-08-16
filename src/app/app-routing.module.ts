import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { IdentityCardComponent } from './identity-card/identity-card.component';
import { ProjectComponent } from './project/project.component';
import { ProjetcDetailComponent } from './projetc-detail/projetc-detail.component';
import { TerminalComponent } from './terminal/terminal.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'welcome'},
  { path : 'welcome', component: WelcomePageComponent },
  { path : 'terminal', component: TerminalComponent },
  { path : 'identityCard', component: IdentityCardComponent },
  { path : 'card', component: CardComponent },
  { path : 'project_detail', component: ProjetcDetailComponent},
  { path : 'footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
