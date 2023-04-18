
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-loanamount',
  templateUrl: './loanamount.component.html',
  styleUrls: ['./loanamount.component.css']
})
export class LoanamountComponent {
  @ViewChild('barCanvas') barCanvas: ElementRef | undefined;
  barChart: any;

  constructor() {}

  ngAfterViewInit(): void {
    this.barChartMethod();
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas?.nativeElement, {
      type: 'bar',
      data: {
        labels: ['FEB'],
        datasets: [
          {
            label: 'Loan Amount in Billian',
            data: [1.07,2.15,4.29,8.59],
            backgroundColor: [
              'rgba(78, 123, 75, 0.2)',
             
            ],
            borderColor: [
              'rgba(78,123,75,1)',
              
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

}
