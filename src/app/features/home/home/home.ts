import { Component } from '@angular/core';
import { HomeSlider } from "../home-slider/home-slider";

@Component({
  selector: 'app-home',
  imports: [HomeSlider],
  templateUrl: './home.html',
  styleUrl: './home.less',
})
export class Home {

}
