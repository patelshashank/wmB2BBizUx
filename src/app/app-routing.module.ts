import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TransctionDetailsComponent } from './transction-details/transction-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path:'', component:HomeComponent},
  // { path:'transactions', loadChildren:()=> 
  //   import('./transction-details/transaction.routes').then(r=>r.transaction_routes)
  // },
  { path:':TransactionID', component:TransctionDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
