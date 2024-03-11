import { Component, OnInit } from '@angular/core';
import { User } from '../../services/users/users';
import { UsersService } from '../../services/users/users.service';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  users: User[];
  loading: boolean;

  constructor(private userService: UsersService) {
    this.users = [];
    this.loading = false;
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  async loadUsers(): Promise<void> {
    try {
      const params = {
        value: undefined,
        count: '10',
        offset: this.users.length.toString(),
      };
      const response = await this.userService.list(params);
      if (response.data && response.data.users) {
        this.users = this.users.concat(response.data.users);
      }

      console.log(this.users);
      this.loading = false;
    } catch (err) {}
  }
}
