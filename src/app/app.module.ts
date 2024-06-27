import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { CoachPageComponent } from './coach-page/coach-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { SearchApiService } from './core/services/search-api.service';
import { ComparisonPageComponent } from './comparison-page/comparison-page.component';
import { CourseSnippetComponent } from './course-snippet/course-snippet.component';
import { CoachSnippetComponent } from './coach-snippet/coach-snippet.component';
import { SupportPageComponent } from './support-page/support-page.component';
import { CoachCarouselComponent } from './coach-carousel/coach-carousel.component';
import { CourseCarouselComponent } from './course-carousel/course-carousel.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { CourseCompareSnippetComponent } from './course-compare-snippet/course-compare-snippet.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { RegistrationComponent } from './registration/registration.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { SeminarPageComponent } from './seminar-page/seminar-page.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';





@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MainHeaderComponent,
    MainFooterComponent,
    CoachPageComponent,
    SearchBarComponent,
    CoursePageComponent,
    ComparisonPageComponent,
    CourseSnippetComponent,
    CoachSnippetComponent,
    SupportPageComponent,
    CoachCarouselComponent,
    CourseCarouselComponent,
    SearchPageComponent,
    CourseCompareSnippetComponent,
    ImpressumComponent,
    TermsAndConditionsComponent,
    DataProtectionComponent,
    RegistrationComponent,
    LoginComponent,
    SeminarPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule,
    MatCardModule,
    MatProgressBarModule,
    MatIconModule,
    FontAwesomeModule,
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,
    MatExpansionModule


  ],
  providers: [
    SearchApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
