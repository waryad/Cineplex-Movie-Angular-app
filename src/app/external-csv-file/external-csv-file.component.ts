import { Component } from '@angular/core';
import { Sales } from '../myClasses/csvClass';

@Component({
  selector: 'app-external-csv-file',
  templateUrl: './external-csv-file.component.html',
  styleUrls: ['./external-csv-file.component.css']
})
export class ExternalCsvFileComponent {

  fileUrl="../../assets/data/SalesOrders.csv"
  columnHeaders: string[]=[]

  csvData: Sales[] = []
  async ngAfterViewInit(){

    var res= await fetch(this.fileUrl)
    var data = await res.text()
    console.log("data is : ", data)

    let convertArray =data.split("\n");
    console.log("array is:", convertArray)

    var headerNames = convertArray[0].split(",")
    console.log("header info :", headerNames)

    headerNames.forEach(e=>{
this.columnHeaders.push(e.replace(/(\r\n|\n|\r)/gm,""))

    })
    console.log("column values are :", this.columnHeaders)
    for(let x=1;  x<convertArray.length; x++){
      let separatedData= convertArray[x].split(',');
      console.log("separateddats",separatedData)
      var salesObject = new Sales;
      salesObject.orderDate = separatedData[0];
      salesObject.region    = separatedData[1];
      salesObject.rep       = separatedData[2];
      salesObject.item      = separatedData[3];
      salesObject.units     = parseFloat(separatedData[4]);
      salesObject.cost      = parseFloat(separatedData[5]);
      salesObject.total     = parseFloat(separatedData[6]);
      this.csvData.push(salesObject)
      
    }
  }
constructor(){}

ngOnInit(): void{

}
}
