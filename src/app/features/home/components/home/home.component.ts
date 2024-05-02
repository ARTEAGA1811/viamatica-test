import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/security/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username: string = "";
  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.username = this.storageService.getUsername() || '';
  }
}
