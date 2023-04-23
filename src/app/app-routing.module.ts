import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebsiteDesignComponent } from './Web/website-design/website-design.component';
import { WebsiteDevelopmentComponent } from './Web/website-development/website-development.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }, 
  { path: 'WebsiteDesign', component: WebsiteDesignComponent },
  { path: 'WebsiteDevelopment', component: WebsiteDevelopmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
