import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/Http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'angular-crud';
  items:any[];
  name:string = 'sai';

  constructor(private http:HttpClient)
  {

  }
getData()
{
  this.items = ["saikiran","sachin","rafael nadal"];

  this.http.get('http://demoapp-env.v2ahy2fviu.us-east-2.elasticbeanstalk.com/displayAllBills')
  .subscribe(
    (data:any[])=>
    {
      console.log(data);
    }

  )
}

}
