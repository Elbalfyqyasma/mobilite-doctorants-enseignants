import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // SIDEBAR TOGGLE
    var sidebarOpen = false;
    var sidebar:any= document.getElementById("sidebar");

    function openSidebar() {
      if (!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
      }
    }

    function closeSidebar() {
      if (sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
      }
    }

    // ---------- CHARTS ----------

    // BAR CHART
    var barChartOptions = {
      series: [{
        data: [10, 8, 6, 4]
      }],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        },
      },
      colors: [
        "#246dec",
        "#cc3c43",
        "#367952",
        "#f5b74f",
        "#4f35a1"
      ],
      plotOptions: {
        bar: {
          distributed: true,
          borderRadius: 4,
          horizontal: false,
          columnWidth: '40%',
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: ["Droit, économie et Gestion", "Lettres et Sciences Humaines", "Sciences de l'Ingénieur", "Sciences et Techniques"],
      },
      yaxis: {
        title: {
          text: "nombre"
        }
      }
    };

    var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
    barChart.render();

    // AREA CHART
    var areaChartOptions = {
      series: [{
        name: 'doctorant ',
        data: [3, 4, 8, 5, 4, 10, 10]
      }, {
        name: 'enseignant',
        data: [1, 3, 4, 3, 3, 5, 4]
      }],
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      colors: ["#4f35a1", "#246dec"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth'
      },
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      markers: {
        size: 0
      },
      yaxis: [{
          title: {
            text: 'doctorant',
          },
        },
        {
          opposite: true,
          title: {
            text: 'enseignant ',
          },
        },
      ],
      tooltip: {
        shared: true,
        intersect: false,
      }
    };

    var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
    areaChart.render();
  }
}
