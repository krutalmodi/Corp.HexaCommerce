import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header/header';
import { Footer } from "./layout/footer/footer/footer";
import { Body } from "./layout/body/body/body";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Body],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected readonly title = signal('HexaCommerce');
}
