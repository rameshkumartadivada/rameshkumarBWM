import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bwm-renal-detail',
  templateUrl: './renal-detail.component.html',
  styleUrls: ['./renal-detail.component.scss']
})
export class RenalDetailComponent implements OnInit {

  currentId: string;
  constructor(private  routes: ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe(
      (params) => {
        console.log(params);
       this.currentId = params['rentalId'];
      }
    );
  }

}
