import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth-service';


@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.less',
})
export class Footer {
  protected readonly title = 'HexaCommerce';
  protected readonly currentYear = new Date().getFullYear();

  async logout() {
    const authService = new AuthService();
    await authService.logout();
    window.location.href = '/login';
  }
}
