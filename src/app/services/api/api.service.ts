import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerRideModel } from 'src/app/models/customer-ride.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * @description Get the Data from an API
   * @param url The API URL that need to fetched from
   * @returns Observale of Customer Ride model
   */
  getData(url: string): Observable<CustomerRideModel[]> {
    return this.http.get<any>(url);
  }
}
