import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

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
        labels: ['MARUTI SUZUKI', 'HYUNDAI', 'TOYOTA', 'MAHINDRA', 'TATA', 'HONDA','KIA','MERCEDES-BE','FORD','RENAULT'],
        datasets: [
          {
            label: 'Top Ten Make By Volume',
            data: [924665490, 472874870, 280339910, 260764588, 125293829, 103500878,80868548,78653606,71815195,68467796],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(28, 40, 58, 0.2)',
              'rgba(255, 8, 255, 0.2)',
              'rgba(49, 121, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(127, 255, 239, 1)',
              'rgba(28, 40, 58, 1)',
              'rgba(255, 8, 255, 1)',
              'rgba(49, 121, 255, 1)',
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
