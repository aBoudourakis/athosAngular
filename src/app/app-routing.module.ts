import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  /**
   * TODO
   * refactor modules to add '.module.ts' files to support lazy loading pages in modules
   * use ng generate module dashboard --route dashboard --module app.module
   */
  //   path: '',
  //   loadChildren: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  // },
  // {
  //   path: 'register',
  //   loadChildren: () => import('./registration/registration.component').then(m => m.RegistrationComponent)
  // },
  // {
  //   path: 'welcome',
  //   loadChildren: () => import('./welcome/welcome.component').then(m => m.WelcomeComponent)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
