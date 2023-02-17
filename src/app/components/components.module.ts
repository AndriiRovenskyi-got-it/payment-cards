import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [MenuComponent, SidebarComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule,
    RouterModule,
    MatTableModule,
  ],
  exports: [MenuComponent, SidebarComponent],
})
export class ComponentsModule {}
