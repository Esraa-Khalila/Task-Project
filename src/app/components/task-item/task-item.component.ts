import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import {Task} from "../../Tasks"
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input()task: Task;
  @Output() onDeleteTask = new EventEmitter<Task>()
  @Output() onToggleReminder =new EventEmitter<Task>()
  faTimes =faTimes;
  
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task){
    this.onDeleteTask.emit(task)
  }
  onToggle(task){
    this.onToggleReminder.emit(task)
  }

}
