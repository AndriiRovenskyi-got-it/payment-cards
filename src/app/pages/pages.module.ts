import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, HomeComponent, CardsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    ComponentsModule,
    SharedModule,
  ],
  exports: [LoginComponent, CardsComponent],
})
export class PagesModule {}
