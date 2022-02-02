import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import{ CustomerService } from '../customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customer!: Customer[];


  constructor(private customerService: CustomerService,
    private router :Router){}
 

  ngOnInit(): void {
 this.getCustomer();
}
private getCustomer(){
  this.customerService.getCustomerList().subscribe(data =>{
    this.customer=data;
  });
}

customerDetails(id:number){
  this.router.navigate(['customer-details',id]);
}
 
updateCustomer( id: number){
  this.router.navigate(['update-customer', id]);
  
}
deleteCustomer(id:number){
this.customerService.deleteCustomer(id).subscribe(data =>{
  console.log(data);
  this.getCustomer();

  
})
}
}


  

