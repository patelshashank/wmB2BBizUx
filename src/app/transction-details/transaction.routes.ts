import { RouterModule, Routes } from '@angular/router';
import { TransctionDetailsComponent } from './transction-details.component';

export const transaction_routes: Routes=[
    { path: ':TransactionID', component: TransctionDetailsComponent}
]; 