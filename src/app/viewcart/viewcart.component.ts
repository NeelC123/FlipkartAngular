import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css'] // Fix typo here
})
export class ViewcartComponent implements OnInit {

checkout() {
throw new Error('Method not implemented.');
}
  productCartList: any;
  emailId1: string = '';
  cartItems: any;


  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
    this.ViewCart();
  }

  ViewCart() {
    const customer = sessionStorage.getItem('customer');

    if (customer !== null) {
      const customerString = JSON.parse(customer);
      this.emailId1 = customerString.emailId;
    }

    this.http.get('http://localhost:8083/flipkart/viewcart?emailId=' + this.emailId1,{responseType:'json'}).subscribe((data: any) => {
      this.cartItems = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }


  purchageQty={
    productQty:1
  };
    

  decrementQuantity(product: any,value:string) {
  console.log(product)
  if(value==='minus'){
   product.productQty=product.productQty-1;
  }else{

  
  product.productQty+=1;
  }
  const customer = sessionStorage.getItem('customer');
  
    if(customer!=null){
    const customerString = JSON.parse(customer);
     this.emailId1=customerString.emailId;
    }  
  console.log(product.productQty)
  this.purchageQty=product.productQty;
  
  this.http.post('http://localhost:8083/flipkart/addToCart?&productId='+product.productId+'&emailId='+this.emailId1,this.purchageQty,{responseType:'text'}).subscribe((data:any)=>{
        
     
      },error =>{
        console.log(error);
      })
    }
 
      
 

 

  calculateDiscountedPrice(product: any) {
    // Implement calculate discounted price logic here
  }
}
