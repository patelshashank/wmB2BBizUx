import { Component,ViewChild,OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  transactionsList:any[]=[];
  startDate:string='2023-12-11';
  endDate:string='2023-12-13';
  isLoading=false;
  getListOfTransactionsURL="https://presalesnamdev.apigw-aw-us.webmethods.io/gateway/MultimaticGetListOfTransactions/1.0/getDELFORList";
  constructor(private http: HttpClient){};
  headers = { 'Content-Type': 'application/json'};
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns=['Date','DocumentType','Sender','Receiver','TransactionID','DocumentID','InterchangeID','ProcessingStatus','Action'];
  dataSource:any;

  getListOfTransctions(startDate:string,endDate:string):any{
    this.isLoading=true;
    this.http.post<any>(this.getListOfTransactionsURL,{startDate:startDate,endDate:endDate}).subscribe((data)=>{
      this.displayData(data);
    },(error)=>{
      console.log(error);
      this.isLoading=false;
    });
  }
  async ngOnInit(): Promise<void> {
  }
  displayData(data:any){
    this.transactionsList=data.delForList;
    this.dataSource=new MatTableDataSource(this.transactionsList);
    setTimeout(() => { this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort; }, 0);
    this.isLoading=false;
  }
}
