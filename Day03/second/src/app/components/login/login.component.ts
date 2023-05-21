import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  inputValue: string = ''
  selectValue:string = ''
  compTitle: string = "Register Component"
  imgSrc: string = "1.jpg"
  // imgSrc2:string = "assets/imgs/1.jpg"


  // getInputValue(e: Event) {

  //    let target = e.target as HTMLInputElement
    
  //   this.inputValue = target.value
  //   console.log(this.inputValue)
  // }
}
