import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  // public payPalConfig?: IPayPalConfig;
  showSuccess!: any;
  cartTotal!: any;

  // Define translation IDs for dynamic text
  paymentPageTitle = $localize`:@@paymentPageTitle:Payment Page`;
  orderSummaryTitle = $localize`:@@orderSummaryTitle:Order Summary`;
  subtotal = $localize`:@@subtotal:Subtotal`;
  total = $localize`:@@total:TOTAL`;
  totalAmount = $localize`:@@total:TOTAL`; // Corrected placeholder name

  constructor(private router: Router) { }

  ngOnInit() {
    // this.initConfig();
    this.cartTotal =
      JSON.parse(localStorage.getItem('cart_total') as any) || [];
    console.log(this.cartTotal);
  }

  place() {
    localStorage.setItem('cart_total', JSON.stringify(this.total));
    this.router.navigate(['/success']);
  }

  // private initConfig(): void {
  //   this.payPalConfig = {
  //     currency: 'EUR',
  //     clientId: `${environment.Client_ID}`,
  //     createOrderOnClient: (data) =>
  //       <ICreateOrderRequest>{
  //         intent: 'CAPTURE',
  //         purchase_units: [
  //           {
  //             amount: {
  //               currency_code: 'EUR',
  //               value: `${this.cartTotal}`,
  //               breakdown: {
  //                 item_total: {
  //                   currency_code: 'EUR',
  //                   value: `${this.cartTotal}`,
  //                 },
  //               },
  //             },
  //             items: [
  //               {
  //                 name: 'Enterprise Subscription',
  //                 quantity: '1',
  //                 category: 'DIGITAL_GOODS',
  //                 unit_amount: {
  //                   currency_code: 'EUR',
  //                   value: `${this.cartTotal}`,
  //                 },
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     advanced: {
  //       commit: 'true',
  //     },
  //     style: {
  //       label: 'paypal',
  //       layout: 'vertical',
  //     },
  //     onApprove: (data, actions) => {
  //       console.log(
  //         'onApprove - transaction was approved, but not authorized',
  //         data,
  //         actions
  //       );
  //       actions.order.get().then((details: any) => {
  //         console.log(
  //           'onApprove - you can get full order details inside onApprove: ',
  //           details
  //         );
  //       });
  //     },
  //     onClientAuthorization: (data) => {
  //       console.log(
  //         'onClientAuthorization - you should probably inform your server about completed transaction at this point',
  //         data
  //       );
  //       if (data.status === 'COMPLETED') {
  //         this.router.navigate(['/success']);
  //       }
  //       this.showSuccess = true;
  //     },
  //     onCancel: (data, actions) => {
  //       console.log('OnCancel', data, actions);
  //     },
  //     onError: (err) => {
  //       console.log('OnError', err);
  //     },
  //     onClick: (data, actions) => {
  //       console.log('onClick', data, actions);
  //     },
  //   };
}
// }
