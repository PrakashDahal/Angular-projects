import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NavBarComponent } from './header-footer/nav-bar/nav-bar.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { InterestComponent } from './index/interest/interest.component';
import { SkillComponent } from './index/skill/skill.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PortfolioComponent,
    NavBarComponent,
    FooterComponent,
    InterestComponent,
    SkillComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
