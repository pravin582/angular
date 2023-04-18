
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-loancount',
  templateUrl: './loancount.component.html',
  styleUrls: ['./loancount.component.css']
})
export class LoancountComponent {
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
            label: 'Top Ten Make By Loan count',
            data: [4189,2000,6000,8000],
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
