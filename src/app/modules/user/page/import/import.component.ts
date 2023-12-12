import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss'],
})
export class ImportComponent {
  selectedFile: File | null = null;
  @ViewChild('fileInput') fileInput!: ElementRef<any>;

  constructor(private renderer: Renderer2) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  onSubmit() {
    if (this.selectedFile) {
      // Upload logic here
      console.log('File uploaded:', this.selectedFile);
    }
  }

  openFileInput() {
    this.renderer.selectRootElement(this.fileInput.nativeElement).click();
  }
}
