import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
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
      const blobSaS = this.importService.getBlobSAS(this.selectedFile.name);
      blobSaS.subscribe((sas: string) => {
        this.importService.uploadFileBySAS(this.selectedFile!, sas).subscribe({
          next: (event: HttpEvent<any>) => {
            if (event.type === HttpEventType.UploadProgress && event.total) {
              this.uploadProgress = Math.round(
                (100 * event.loaded) / event.total
              ); // Update progress
            } else if (event instanceof HttpResponse) {
              console.log('File uploaded successfully!', event);
              this.uploadProgress = 100; // Set progress to 100% when upload completes
            }
          },
          error: (err) => {
            console.error('Error uploading file:', err);
          },
        });
      });
    }
  }

  openFileInput() {
    this.renderer.selectRootElement(this.fileInput.nativeElement).click();
  }
}
