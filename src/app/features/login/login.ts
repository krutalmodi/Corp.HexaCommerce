import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.less']
})
export class Login {
  username: string = '';
  password: string = '';
  loading: boolean = false;
  error: string | null = null;

  private returnUrl: string | null = null;

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || null;
  }

  async submit(e?: Event) {
    if (e) e.preventDefault();
    this.error = null;
    this.loading = true;
    try {
      await this.auth.login(this.username, this.password);
      const dest = this.returnUrl || '/';
      this.router.navigateByUrl(dest);
    } catch (err: any) {
      this.error = err?.message ?? 'Login failed';
    } finally {
      this.loading = false;
    }
  }
}
