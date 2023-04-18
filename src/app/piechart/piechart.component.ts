import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit{
  chartSeries: ApexNonAxisChartSeries = [54, 24, 14, 8];

  chartDetails: ApexChart = {
    type: 'donut',
    toolbar: {
      show: true
    }
  };

//data table start

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

  chartLabels = ["Purchase", "External BT", "Refinace", "Internal BT"];

  chartTitle: ApexTitleSubtitle = {
    text: 'Loan Types',
    align: 'center'
  };

  chartDataLabels: ApexDataLabels = {
    enabled: true
  };


  data=[
    {
      id:1,
      state:"GUJARAT",
      count:"719",
      volume:"502 Mil"
    },
    {
      id:2,
      state:"UTTAR PRADESH",
      count:"494",
      volume:"357 Mil"
    },
    {
      id:3,
      state:"MAHARASHTRA",
      count:"505",
      volume:"263 Mil"
    },
    {
      id:4,
      state:"TAMIL NADU",
      count:"416",
      volume:"253 Mil"
    },
    {
      id:5,
      state:"DELHI",
      count:"324",
      volume:"231 Mil"
    },
    {
      id:6,
      state:"HARYANA",
      count:"271",
      volume:"206 Mill"
    },
    {
      id:7,
      state:"KARNATAK",
      count:"351",
      volume:"197 Mill"
    },
    {
      id:8,
      state:"TELANGANA",
      count:"245",
      volume:"187 Mill"
    },
    {
      id:9,
      state:"PUNJAB",
      count:"296",
      volume:"186 Mil"
    },
    {
      id:10,
      state:"RAJASTHAN",
      count:"244",
      volume:"154 mil"
    },
    {
      id:11,
      state:"KERALA",
      count:"94",
      volume:"51.0 Mill"
    },
    {
      id:12,
      state:"UTTARKHAND",
      count:"54",
      volume:"38.6 Mill"
    },
    {
      id:13,
      state:"BIHAR",
      count:52,
      volume:"30.0 Mill"
    },
    {
      id:14,
      state:"ANDHRA PRADESH",
      count:26,
      volume:"24.4 Mill"
    },
    {
      id:15,
      state:"MADHYA PRADESH",
      count:27,
      volume:"24.0 Mill"
    },
    {
      id:16,
      state:"TOTAL",
      count:"4.19k",
      volume:"2.75 Bill"

    }
  ]
  data1=[ 
    {
      id:1,
      current:"1046",
      pervious:"2406",
      percentage:"-56.5"
    }
  ]
  data2=[
    {

    }
  ]
}
