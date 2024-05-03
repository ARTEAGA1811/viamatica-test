import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { StorageService } from 'src/app/security/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public navBarItems: MenuItem[] = []

  // permissions: IPage_Permission[] = [];

  constructor(
    // private securityService: SecurityService,
    private storageService: StorageService,
    private router: Router
  ) { }


  ngOnInit(): void {
    // this.permissions = this.securityService.getPermissions() || [];
    this.navBarItems = [
      { label: 'Home', icon: 'fa-solid fa-house', routerLink: '/home', visible: true },
      { label: 'Dashboard', icon: 'fa-solid fa-chart-line', routerLink: '/dashboard', visible: true },
      { label: 'Gestión de usuarios', icon: 'fa-solid fa-users', routerLink: '/user-management', visible: true },
      // { label: 'Ranking Institucional', icon: 'fa-solid fa-ranking-star', routerLink: '/institutional-ranking', visible: this.hasPermission(Page_Permissions.INSTITUTIONAL_RANKING) },
      // { label: 'Evaluación Cooperativas', icon: 'fa-solid fa-shop', routerLink: '/coop-evaluation', visible: this.hasPermission(Page_Permissions.COOP_EVALUATION) },
      // { label: 'Evaluación Bancos', icon: 'fa-solid fa-building-columns', routerLink: '/banks-evaluation', visible: this.hasPermission(Page_Permissions.BANK_EVALUATION) },
      // { label: 'Evaluación Empresas', icon: 'fa-solid fa-building', routerLink: '/companies-evaluation', visible: this.hasPermission(Page_Permissions.BUSINESS_EVALUATION) },
      {
        // label: this.securityService.getName(),
        label: 'david',
        icon: 'fa-solid fa-user',
        style: { 'margin-left': 'auto' },
        items: [
          {
            label: 'Cerrar Sesión',
            icon: 'pi pi-fw pi-sign-out',

            command: () => this.signOut()
          }
        ]
      }
    ]
  }


  private hasPermission(urlName: string): boolean {
    // return this.permissions.some(perm => perm.name === urlName);
    return true;
  }


  signOut() {
    this.storageService.removeAuth();
    this.router.navigate(['/login']);
  }


  // getNames(): string {
  //   return this.securityService.getName();
  // }
}
