import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) {  }

  getImages(value: any): Observable<any> {
    const params_ = new HttpParams({
      fromObject: {
        query: value,
        page:1,
        per_page:20
      }
    })
    const headers = new HttpHeaders({
      'Authorization':'563492ad6f91700001000001e3141ae969be456bb7d088fb81dac8be'
    });

    return this.http.get<any>(`https://api.pexels.com/v1/search`, { params: params_, headers: headers })
  }

  getNextImages(url:any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization':'563492ad6f91700001000001e3141ae969be456bb7d088fb81dac8be'
    });
    return this.http.get<any>(url, { headers: headers })
  }
  getPreviousImages(url:any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization':'563492ad6f91700001000001e3141ae969be456bb7d088fb81dac8be'
    });
    return this.http.get<any>(url, { headers: headers })
  }
}
