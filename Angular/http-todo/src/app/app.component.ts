import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'http-todo';

  todos: any = null;
  todo: any = null;
  showAdd = false;
  message = "";

  constructor(private todoService: TodoService){
    
  }
  
  openTodo(todo: any){
    this.todoService.getTodoData(todo.id).subscribe(data => {
      this.todo = data;
    });
  }
  add(){
    this.showAdd = true;
    this.todo = {};
    this.message = "";
  }
  save(){
    const api = this.todo.id ? 
    this.todoService.putTodoData(this.todo) : 
    this.todoService.postTodoData(this.todo);

    api.subscribe(
      x => {
        this.message = !this.todo.id ? 
        'ToDo created successfully' : 
        `ToDo ${this.todo.id} saves succesfully`;
        this.todo = null;
        this.todos = null;
        this.showAdd = false;
      }
    );  
  }
  delete(){
    this.todoService
    .deleteTodoData(this.todo.id)
    .subscribe(
      x => {
      this.message = `ToDo ${this.todo.id} deleted successfully`;
      this.todo = null;
      this.todos = null;
      this.showAdd = false;
    }
  );
}
   getData(){
    this.message = "";
    this.todoService.getTodos().subscribe(data =>
      {this.todos = data});
   }
   back(){
    this.todo = null;
    this.showAdd = false;
    this.todos = null;
   }
}
