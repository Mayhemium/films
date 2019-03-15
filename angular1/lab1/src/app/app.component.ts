import { Component } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  films: string[] = [
    "Scary movie",
    "Shrek",
    "Star Trek",
    "Titanic",
    "Oszukać przeznaczenie"
  ];

}
