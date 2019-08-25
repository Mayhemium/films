import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateY(0)', opacity: 1 })),
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('0.5s 0.3s ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateY(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class CitySearchComponent implements OnInit {

  constructor() { }

  value = '';
  cityFormControl = new FormControl('', [
    Validators.required,
  ]);

  ngOnInit() {
  }

}
