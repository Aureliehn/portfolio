import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { TerminalComponent } from './terminal/terminal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CvComponent } from './cv/cv.component';
import { ProjectComponent } from './project/project.component';
import { SliderComponent } from './slider/slider.component';
import { ParcoursComponent } from './parcours/parcours.component';
import { IdentityCardComponent } from './identity-card/identity-card.component';
import { CardComponent } from './card/card.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjetcDetailComponent } from './projetc-detail/projetc-detail.component';
import { OpsreadyProjectComponent } from './opsready-project/opsready-project.component';
import { OpteamProjectComponent } from './opteam-project/opteam-project.component';
import { OtherProjectComponent } from './other-project/other-project.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    TerminalComponent,
    CvComponent,
    ProjectComponent,
    SliderComponent,
    ParcoursComponent,
    IdentityCardComponent,
    CardComponent,
    MenuComponent,
    NavbarComponent,
    ProjetcDetailComponent,
    OpsreadyProjectComponent,
    OpteamProjectComponent,
    OtherProjectComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
