﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [MatButtonModule, MatMenuModule, MatIconModule, MatToolbarModule, MatTableModule, MatFormFieldModule, MatInputModule],
    exports: [MatButtonModule, MatMenuModule, MatIconModule, MatToolbarModule, MatTableModule, MatFormFieldModule, MatInputModule],
})
export class MaterialModule { }