import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardData: { totalEmployee: number; totalProject: number; activeEmployees: number } | null = null;


  constructor(private MasterService: MasterService) {}

  ngOnInit(): void {
    this.fetchDashboardData();
  }

  fetchDashboardData(): void {
    this.MasterService.getDashboardData().subscribe((data) => {
      this.dashboardData = data; // Assign fetched data
    });
  }
}
