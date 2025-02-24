import { Component, computed, signal } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import type { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-image-renderer',
  standalone: true,
  imports: [],
  templateUrl: './image-renderer.component.html',
  styleUrl: './image-renderer.component.scss'
})
export class ImageRendererComponent implements ICellRendererAngularComp {
  value = signal('');

  agInit(params: ICellRendererParams): void {
      this.refresh(params);
  }

  refresh(params: ICellRendererParams): boolean {
      this.value.set(params.value);
      return true;
  }
}
