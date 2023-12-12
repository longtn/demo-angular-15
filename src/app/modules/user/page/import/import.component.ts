import { HttpEventType } from '@angular/common/http';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ImportService } from '@modules/user/services/import.service';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss'],
})
export class ImportComponent {
  selectedFile: File | null = null;
  uploadProgress: number = 0;

  @ViewChild('fileInput') fileInput!: ElementRef<any>;

  constructor(
    private renderer: Renderer2,
    private importService: ImportService
  ) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  onSubmit() {
    if (this.selectedFile) {
      this.importService
        .uploadFile(this.selectedFile)
        .subscribe((event: any) => {
          console.log(event.type);
          if (event.type === HttpEventType.UploadProgress) {
            this.uploadProgress = Math.round(
              100 * (event.loaded / event.total)
            );
          }
        });
    }
  }

  openFileInput() {
    this.renderer.selectRootElement(this.fileInput.nativeElement).click();
  }
}
