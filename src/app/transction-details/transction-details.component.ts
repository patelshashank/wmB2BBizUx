import { Component,Input,OnInit,ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transction-details',
  templateUrl: './transction-details.component.html',
  styleUrls: ['./transction-details.component.css']
})
export class TransctionDetailsComponent implements OnInit {

  @Input() TransactionID='';
  formConfigURL = "https://presalesnamdev.apigw-aw-us.webmethods.io/gateway/MultimaticGetListOfTransactions/1.0/getLabelsForTransactionDetails";
  valuesURL = "https://presalesnamdev.apigw-aw-us.webmethods.io/gateway/MultimaticGetListOfTransactions/1.0/getForListTransactionDetails";
  appearance = "outline"; // legacy, standard , fill, outline
  valuesJSON:any = {};
  formJSON:any[] = [];
  constructor(private http: HttpClient){};
  displayedColumns=['LineId','CustomerPartNumber','PartialQuantity','TotalQuantity','PONumber'];
  dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.getFormConfig().subscribe(res => {
      this.formJSON = res;
    });
    this.getValuesConfig().subscribe(res => {
      this.valuesJSON = res.responseDocument;
      this.dataSource=new MatTableDataSource(res.responseDocument.LineItems);
      setTimeout(() => { this.dataSource.sort = this.sort; }, 0);
    });
  }
  onFormSubmitted(value: any) {
    
  }

  getValuesConfig(): Observable<any> {
    return this.http.post(this.valuesURL,{transactionID:this.TransactionID});
  }
  getFormConfig(): Observable<any> {
    return this.http.post(this.formConfigURL,{});
  }
  inputsChanged(value:any) {
    
  }
}
