import { Injectable } from '@angular/core';
import {Observable , of, retry} from "rxjs"
import {HttpClient,HttpHeaders} from "@angular/common/http"
import{Task} from "../Tasks";
const httpOptions ={
    headers:new HttpHeaders({
      "content-type" :"application/json"
    })
  }
@Injectable({
  providedIn: 'root'
})

export class TasksService {
  private httpUrl ="http://localhost:5000/tasks"
  
  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.httpUrl)
  }
  deleteTask(task:Task):Observable<Task>{
    const url = `${this.httpUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }
  updateTaskReminder(task:Task):Observable<Task>{
    const url = `${this.httpUrl}/${task.id}`
    return this.http.put<Task>(url,task,httpOptions)
  }
  addTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.httpUrl,task,httpOptions)
  }
}
