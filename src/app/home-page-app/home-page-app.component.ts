import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms"; //import ngForm
import { OrdersService } from '../shared/orders.service';      // import service

@Component({
  selector: 'app-home-page-app',
  templateUrl: './home-page-app.component.html',
  styleUrls: ['./home-page-app.component.css']
})
export class HomePageAppComponent implements OnInit {

  constructor(private ordersService: OrdersService) {  }      // inject the service;
  
    //Created the array (can be done in firebase as well) to loop through it
    coffees = [
      "Americano", "Flat White", "Cappuccino", "Latte", "Espresso", "Machiato", "Mocha", "Hot Chocolate", "Tea"
    ];
  
    //Empty array to list the coffee orders
    coffeeOrder = [];
  
  //addCoffee Method to add new coffee to the order list
  addCoffee = coffee =>this.coffeeOrder.push(coffee);

  //removeCoffee Method to remove the coffee item from the order list;
  removeCoffee(coffee){
    let index = this.coffeeOrder.indexOf(coffee);
    if ( index > -1 ) this.coffeeOrder.splice(index, 1);
  }

      //fn which calles the method from service; this fn does some proccessing from array to form
  onSubmit(){ // the property inside the form named coffeeOrder in service accepts the value and pass it into the array here
    this.ordersService.form.value.coffeeOrder = this.coffeeOrder; 
    let data = this.ordersService.form.value; //the form with values accepted through the form is equal to data;

    this.ordersService.createNewOrder(data)
        .then(res => {
         //reset form but do not delete the record?????????
         data.reset();
        });
  }

  ngOnInit() { }

}
