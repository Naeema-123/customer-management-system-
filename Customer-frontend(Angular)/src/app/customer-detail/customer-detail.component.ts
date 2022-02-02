import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
 id!: number
 customer!: Customer
  constructor(private route:ActivatedRoute,private customerService: CustomerService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.customer= new Customer(); 
    this.customerService.getCustomerById(this.id).subscribe(data=>{
      this.customer=data;
    })
  }

}
