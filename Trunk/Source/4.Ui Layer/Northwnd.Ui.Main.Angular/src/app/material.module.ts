import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [MatButtonModule, MatMenuModule, MatIconModule, MatToolbarModule,
        MatTableModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatCardModule],
    exports: [MatButtonModule, MatMenuModule, MatIconModule, MatToolbarModule,
        MatTableModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatCardModule],
})
export class MaterialModule { }