import { Component } from '@angular/core';
import { ApiService } from './core/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stripe-ng';
  newpay : Number;
  public allDone = false;
  pay : any = [{
    money:200, value:20000
  },
  {
    money:300, value:30000
  },
  {
    money:400, value:40000
  }];

  constructor(private apiService : ApiService){

  }

  openCheckout(event) {
    this.newpay = event.target.value ;
    var user=this;
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_x7LBUUIdQaj5dTPhlQhS5wyJ', // your pk test key from stripe 
      locale: 'auto',
      token: function (token: any) {
        console.log(token);
        user.allDone = true;
        user.apiService.confirmPayment(token).subscribe(
          res=>{
            console.log(res);
          },
          err=>{
            console.log(err);
          }
        )
      }
    });

    handler.open({
      name: 'test Stripe Payment',
      description: 'Stripe',
      amount: this.newpay,
      currency: 'inr'
    });

  }

}
