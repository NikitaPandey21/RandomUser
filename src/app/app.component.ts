import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CardServiceService } from './Service/card-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user: any;
  constructor(
    private userService: CardServiceService,
    // private toastr: ToastrService
  ){}

  ngOnInit(){
    this.userService.getUser().subscribe(
      (user:any) => {
        this.user = user.results[0];
        console.log("no error");
      },
      (err) => {
        // this.toastr.error(err.status,"Oops");
        console.log("Error");
      }
    )
  }

  reload(){
    window.location.reload();
  }
}
