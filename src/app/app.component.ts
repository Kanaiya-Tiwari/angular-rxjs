import { DOCUMENT, JsonPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { mergeAll, mergeMap } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';
import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/internal/operators/map';
import { ObservableService } from './observable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit   {
  


  public data!:any;
  public array=['pawan','singh','sonu'];
  public observable=from(this.array);
  title = 'angualr-rxjs';

    constructor( private observableservice:ObservableService) {
       
    }
  ngOnInit(): void {
    this.observable.pipe(map(res=>this.getdata(res))).subscribe((res:any)=>{
     res.subscribe((res:any)=>{
      this.observableservice.getdata('1',res );
     })
   
    

      
     })
    this.observable.pipe(map(res=>this.getdata(res)),mergeAll()).subscribe((res:any)=>{
      this.observableservice.getdata('2',res);
    
    })
    this.observable.pipe(mergeMap(res=>this.getdata(res))).subscribe((res:any)=>{
      this.observableservice.getdata('3',res);
     
        
      
      
    });
  }
  ngAfterViewInit(): void {
    
  }
    

    getdata(data:any){
      return of(data);
    
    }
  }
 
 

