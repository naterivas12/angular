import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v3.1'

  get httpParams(){
    return new HttpParams().set('fields','name,flags,cca2,population')
  }

  constructor(
    private http:HttpClient
  ) { }


  buscarPais(termino:string):Observable<Country[]>{
    const url =`${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>( url, {params:this.httpParams});
            // .pipe(
            //   catchError(err => of(['']))
            // )
  }

  buscarCapital(termino:string):Observable<Country[]>{
    const url =`${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>( url,{params:this.httpParams} );
            // .pipe(
            //   catchError(err => of(['']))
            // )
  }

  getPaisPorAlpha(id:string):Observable<Country>{
    const url =`${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>( url );
            // .pipe(
            //   catchError(err => of(['']))
            // )
  }

  buscarRegion(region:string):Observable<Country[]>{
    const url =`${this.apiUrl}/region/${region}`
    return this.http.get<Country[]>( url, {params:this.httpParams});
    
  }
}
