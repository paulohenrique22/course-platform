import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './pages/courses/courses.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DefaultLayoutComponent } from './pages/default-layout/default-layout.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'panel/dashboard',
    pathMatch: 'full'
  },
  {
    path:'panel',
    component:DefaultLayoutComponent,
    children:[
      {
        path: 'dashboard',
        component:DashboardComponent
      },
      {
        path: 'courses',
        component:CoursesComponent
      }
    ]
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
