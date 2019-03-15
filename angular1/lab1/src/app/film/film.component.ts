import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

@Input() title:string;

  likes = 2;
  disLikes = 3;

  onDodajLikeClick(){
    this.likes++;
  }

  onDodajDislikeClick(){
    this.disLikes++;
  }

  constructor() { }

  ngOnInit() {
  }

}
