import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ImportService {
  constructor(private http: HttpClient) {}

  getBlobSAS(fileName: string): Observable<string> {
    return this.http.get<string>(
      `${environment.apiUrl}/getsaslink?fileName=${fileName}`
    );
  }

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

  uploadFileBySAS(file: File, sas: string) {
    const formData = new FormData();
    formData.append('formFile', file, file.name);

    return this.http.put(sas, formData, {
      headers: {
        'x-ms-blob-type': 'BlockBlob',
      },
      reportProgress: true,
      observe: 'events',
    });
  }
}
