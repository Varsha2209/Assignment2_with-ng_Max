import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [`
    .toggle{
      color:white;
    }
  `]
})
export class DetailsComponent implements OnInit {

  details = false;
  log=[];
  // count = 1;

  onGetDetails() {
    // this.log.push(this.count++);
    // this.log.push(this.log.length+1);
    this.log.push(new Date());
    this.details = !this.details;
  }

  ngOnInit(): void {
  }

}
