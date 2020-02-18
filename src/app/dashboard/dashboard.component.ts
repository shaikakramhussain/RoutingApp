import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  paramsname: any;
  idname: any;
  constructor(private router: Router,private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log("PARAMS",params);
      this.paramsname=params.usname;
      this.idname=params.id;
      console.log("PARAMS",this.paramsname);
      console.log("IDNAME",this.idname);
  })
  }
  logOut(){
    this.router.navigateByUrl('/login');
  }
}
