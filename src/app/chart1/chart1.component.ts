import { Component } from '@angular/core';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component {
  chartSeries: ApexNonAxisChartSeries = [54, 24, 14, 8];

  chartDetails: ApexChart = {
    type: 'donut',
    toolbar: {
      show: true
    }
  };

  chartLabels = ["DSA", "DEALER", "OEM DEALER", "BROKER"];
   
  chartTitle: ApexTitleSubtitle = {
    text: 'Channel',
    align: 'center'
  };

  chartDataLabels: ApexDataLabels = {
    enabled: true
  };


// datatable strart

dtOptions: DataTables.Settings = {};
posts: any;

constructor(private http: HttpClient) {

  this.http.get('http://jsonplaceholder.typicode.com/posts')
    .subscribe(posts => {
      this.posts = posts;
  }, error => console.error(error));
}

ngOnInit(): void {
  this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 5,
    processing: true
  };
}
     data3=[
      {
        id:"1",
        current:"660 Mill",
        pervious:"1.59Bi",
        percentage:"-58.6"
      }
     ]

     data4=[
      {
        id:"1",
        lendername:"POONAWALLA FIN",
        count:"376",
        amount:"444 Mill"
      },
      {
        id:"2",
        lendername:"PIRAMAL",
        count:"467",
        amount:"270 Mill"
      },
      {
        id:"3",
        lendername:"YES BANK",
        count:"340",
        amount:"267 Mill"
      },
      {
        id:"4",
        lendername:"HDFC BANK",
        count:"337",
        amount:"258"

      },
      {
        id:"5",
        lendername:"ICICI BANK",
        count:"215",
        amount:"173 Mill"
      },
      {
        id:"6",
      lendername:"PRIVATE LENDER",
      count:"213",
      amount:"151 Mill"
      },
      {
        id:"7",
        lendername:"AU SMALL FINAN",
        count:"312",
        amount:"129 Mill"

      },
      {
       id:"8",
       lendername:"BAJAJ FINSERV LTD",
       count:"217",
       amount:"126 Mill"
      },
      {
        id:"9",
        lendername:"TATA CAPITAL",
        count:"192",
        amount:"125 Mill"
      },
      {
        id:"10",
        lendername:"AXIS BANK",
        count:"147",
        amount:"119 Mill"
      },
      {
        id:"11",
        lendername:"IDFC FIRST BANK",
        count:"123",
        amount:"99.8 Mill"
      },
      {
        id:"12",
        lendername:"HEROFINCROP",
        count:"129",
        amount:"92.6 Mill"
      },
      {
        id:"13",
        lendername:"KOTAK MAHINDRA",
        count:"176",
        amount:"92.4"
      },
      {
        id:"14",
        lendername:"CHOLAMANDRA",
        count:"208",
        amount:"89.5 Mill"

      },
      {
        id:"15",
        lendername:"KOGTA FINANCIAL",
        count:"170",
        amount:"65.5 Mill"
      },
      {
        id:"16",
        lendername:"TOTAL",
        count:"4.19k",
        amount:"2.75Bill"
      }
     ]



}
