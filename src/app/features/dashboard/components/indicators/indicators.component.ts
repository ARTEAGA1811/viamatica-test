import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/api/users/user.service';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})
export class IndicatorsComponent implements OnInit {
  filterOptions: any[] = []
  filterOptionSelected: any;

  loadingUsers = false;

  users: IUser[] = [];
  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.filterOptions = [
      { label: 'Todos', value: null },
      { label: 'Activos', value: 'active' },
      { label: 'Inactivos', value: 'inactive' }
    ];
    this.filterOptionSelected = this.filterOptions[0].value;

    this.userService.getUsers().subscribe({
      next: (response) => {
        this.users = response.body || [];
      },
      error: (response) => {
        console.error(response);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error al cargar los usuarios.' });
      }
    });

  }

  onChangeFilterOptions() {

  }

  getActiveUsers(): number {
    return this.users.filter(user => user.status === 'active').length;
  }

  getInactiveUsers(): number {
    return this.users.filter(user => user.status === 'inactive').length;
  }

  getBlockedUsers(): number {
    return this.users.filter(user => user.status === 'blocked').length;
  }
}
