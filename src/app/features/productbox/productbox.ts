import { Component, Input } from '@angular/core';
import { Product } from '../../core/models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productbox',
  imports: [CommonModule],
  templateUrl: './productbox.html',
  styleUrl: './productbox.less',
})
export class Productbox {
  @Input() product: Product | null = null;
}
