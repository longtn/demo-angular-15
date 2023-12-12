import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ImportService {
  constructor(private http: HttpClient) {}

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('formFile', file, file.name);

    return this.http.post(
      `${environment.apiUrl}/blobstorage/upload`,
      formData,
      {
        reportProgress: true,
        observe: 'events',
      }
    );
  }
}
