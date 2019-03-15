import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-euro',
  templateUrl: './show-euro.component.html',
  styleUrls: ['./show-euro.component.css']
})
export class ShowEuroComponent implements OnInit {
  @Input() kwota: Number;

  constructor() { }

  ngOnInit() {
  }

}
