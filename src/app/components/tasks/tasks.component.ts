import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import{Task} from "../../Tasks"
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks:Task[]=[];
  constructor(private taskServivce:TasksService) { }

  ngOnInit(): void {
    this.taskServivce.getTasks().subscribe((tasks)=>(this.tasks=tasks))
  }
  deleteTask(task:Task){
    this.taskServivce.deleteTask(task).subscribe(()=>this.tasks=this.tasks.filter((t)=>t.id !== task.id))
  }
  toggleReminder(task:Task){
    task.reminder = !task.reminder;
    this.taskServivce.updateTaskReminder(task).subscribe();   
  }
  addTask(task:Task){
    this.taskServivce.addTask(task).subscribe((task)=>this.tasks.push(task));
  }

}
