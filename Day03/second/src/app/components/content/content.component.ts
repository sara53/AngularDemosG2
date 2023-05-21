import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  inputValue: string = ''
  todosList:string[] =[]
  color: string = 'red'
  flag: boolean = true
  show:boolean = false
  studentNames: {id:number,fname:string}[] = [{id:1,fname:"ali"},{id:2,fname:"alaa"}]
addTodo(){
  this.todosList.push(this.inputValue)
  console.log(this.todosList)
  this.inputValue = ''
}
  removeTodo(index: number) {
this.todosList=  this.todosList.filter((item, i) => i != index)

  }
}
