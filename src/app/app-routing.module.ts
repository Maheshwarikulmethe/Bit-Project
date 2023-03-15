import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {
    path:'first',
    component:FirstComponent,
    children:[
      {
        
          path:'second',
          component:SecondComponent
        
      }
    ]
  },
  {
    path:'second',
    component:SecondComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
