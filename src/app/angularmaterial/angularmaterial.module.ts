import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatTabsModule, MatSortModule, MatPaginatorModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { DailogboxComponent } from '../dailogbox/dailogbox.component';



@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule,
    MatOptionModule,
  ],
  exports: [FormsModule,
    MatTableModule,
    MatDialogModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,MatSortModule,
    MatPaginatorModule,
    ],
    entryComponents: [DailogboxComponent],
})
export class AngularmaterialModule { }
