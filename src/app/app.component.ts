import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  count =0;
number1=0;
number2=0;
result=0;

  listOfNumbers=[12,13,43,32,31];

  listofNames=["Hwang","Yeji","Tenzin","Yeega"];
  
  increment = () => {
    this.count++;
      }
    
  decrement = () =>{
    this.count--;
      }
add = () => {
  this.result=this.number1+this.number2;
}
    }
