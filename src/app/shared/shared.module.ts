import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTableComponent } from './card-table/card-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CardTableComponent],
  imports: [CommonModule, MatTableModule, MatButtonModule],
  exports: [CardTableComponent],
})
export class SharedModule {}
