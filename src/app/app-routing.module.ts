import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachPageComponent } from './coach-page/coach-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { ComparisonPageComponent } from './comparison-page/comparison-page.component';
import { SupportPageComponent } from './support-page/support-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'coach/:id', component: CoachPageComponent },
  { path: 'course/:id', component: CoursePageComponent },
  { path: 'compare', component: ComparisonPageComponent },
  { path: 'support', component: SupportPageComponent },
  { path: 'search/:searchparams', component: SearchPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'agbs', component: TermsAndConditionsComponent },
  { path: 'datenschutz', component: DataProtectionComponent },
  {path:'registration',component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
