import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroJobAdComponent } from './components/hero-job-ad.component';
import { HeroProfileComponent } from './components/hero-profile.component';
import { AdBannerComponent } from './components/ad-banner.component';
import { AdService } from './services/ad.service';
import { AdDirective } from './directives/ad.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdBannerComponent,
    AdDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
