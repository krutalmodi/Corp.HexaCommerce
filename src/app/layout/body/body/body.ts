import { Component } from '@angular/core';
import { HomeSlider } from "../../../features/home/components/home-slider/home-slider";

@Component({
  selector: 'app-body',
  imports: [HomeSlider],
  templateUrl: './body.html',
  styleUrl: './body.less',
})
export class Body {

}
