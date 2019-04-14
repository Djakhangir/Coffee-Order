import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms"; // Import the forms
import { AngularFirestore } from '@angular/fire/firestore'; // add firebase to service
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor( private firestore:AngularFirestore ) { }

  form = new FormGroup ({   //create the form with the properties of the forms with values used in firebase ;
    customerName: new FormControl(''),
    orderNumber: new FormControl(''),
    coffeeOrder: new FormControl(''),
    completed: new FormControl(false)   //if true will be completed;
  })

                                          // CRUD
                     // C = Create a record in database (firebase)


  // Promise to return the Firebase call and then lets you decide what you want to do after it’s all done and error handler
  createNewOrder(data){ //this method will be called in component.ts file 
    return new Promise<any>((resolve, reject)=>{
      this.firestore
          .collection("coffeeOrders")
          .add(data)
          .then(res => {}, err => reject(err));
        })
  }                                             
                     // Below is the same example with observables as above with promise
  // createNewOrder(data){
  //   return Observable.create((observer)=>{
  //     this.firestore // firestore uses promises that is why we use promises inside observebles
  //         .collection("coffeeOrders")
  //         .add(data)
  //         .then(res=>observer.next(res), err => observer.error(err)); //.then is part promise
  //   })
  // }

                      // R = read from database (CRUD)

  getCoffeeOrders(){ //call this method in order-list component;
    return this.firestore.collection("coffeeOrders").snapshotChanges(); //to display all the values in order-list component
 }

        //Method to update rather than replacing the document in database with data we are passing in.
  updateCoffeeOrder(data){ // fn connected to our dtbs and call based on id. here we know that collection is CoffeeOrders;
  //set() helps us to set specific information we passed in. it takes 2 params-our data and setting object;
    return this.firestore
            .collection("coffeeOrders")
            .doc(data.payload.doc.id)
            .set({ completed:true }, { merge:true });
// merge:true helps us to update the value-key pair (id)passed in rather than replacing entire document with new record;
  }

                //D = Delete from database (CRUD)

deleteCoffeeOrders(data){ //inject data property passed to let app know the document id.
  //we need to know the collection name and document id to let app to delete specific record accurately
  return this.firestore
             .collection("coffeeOrders")
             .doc(data.payload.doc.id)
             .delete();
}

}
