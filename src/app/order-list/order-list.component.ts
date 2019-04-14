import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';      // import service

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private ordersService: OrdersService) { } // inject the service;

  ngOnInit() { //this method contains the call and intialize it to call when the view is loaded for the first time
    this.getCoffeeOrders(); 
  }

coffeeOrders; //instance to map the returned results from database via subscribe(); we use this to iterate and return in html

  getCoffeeOrders = () => this.ordersService.getCoffeeOrders().subscribe(res=>(this.coffeeOrders = res)) // method associated with service method that read the data from dtbs

  markCompleted = data => this.ordersService.updateCoffeeOrder(data); //method which calls the update method from service; 

  deleteOrder = data => this.ordersService.deleteCoffeeOrders(data); // method that deletes the record from the dtbs;

}
