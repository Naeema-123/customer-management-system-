import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';


const routes: Routes = [
{path: 'customer' , component :CustomerListComponent},
{path:'create-customer', component:CreateCustomerComponent},
{path:'customer-list', component:CustomerListComponent},
{path:'', redirectTo:'customer', pathMatch:'full' },
{path:'update-customer/:id', component:UpdateCustomerComponent},
{path:'customer-details/:id',component:CustomerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
