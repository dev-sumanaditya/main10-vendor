import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './login/signup/signup.module#SignupPageModule' },
  { path: 'forgot', loadChildren: './login/forgot/forgot.module#ForgotPageModule' },
  { path: 'tnc', loadChildren: './login/tnc/tnc.module#TncPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
