import { Component, EventEmitter, Input, OnChanges,OnDestroy, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {
 

  registerData: string = "Register Data"
  
  @Output() myEvent = new EventEmitter();
 ngOnInit(): void {
    
   this.myEvent.emit(this.registerData)
  }



  // getAllProducts() {
  //   // connect to Data pase 
  //   return ["mona","ali"]
  // }
  
  // compTitle: string = "";
  // @Input() flag: boolean = false;
  // ngOnChanges() {
  //   if (this.flag) {
  //     this.compTitle = "Login Compoent"
  //   } else {
  //     this.compTitle = "Register Component"
  //   }
  // }
}
