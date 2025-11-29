import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.less',
})
export class Footer {
  protected readonly title = 'HexaCommerce';
  protected readonly currentYear = new Date().getFullYear();
}
