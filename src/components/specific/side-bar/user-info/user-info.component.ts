import { Component, OnInit } from '@angular/core';
import { StorageService } from '@services/storage.service';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent {
  user = {
    name: 'Luis Andres',
    role: 'Super Admin',
  }

  get firstletterInName(){
    return this.user.name.charAt(0);
  }
}
