
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Libro } from '../clases/libros';
import { Injectable, inject } from '@angular/core';
import { Observable, tap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceRestService {

  http = inject(HttpClient)

  URL: string = 'http://localhost:3300';
    httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }),
    };
//=========GET LISTA libro============
getLibroList(): Observable<Libro[]>{
  return this.http.get<Libro[]>(`${this.URL}/libros/`).pipe(
    tap((Libro)=> console.log('Libros obtenidos')),
    catchError(this.handleError<Libro[]>('Get Libro', [])) 
  );
}

 //======= CREAR LIBRO======
 addLibro(book: Libro): Observable<any>{
  return this.http.post<Libro>(`${this.URL}/libros/`, book, this.httpHeader)
  .pipe(catchError(this.handleError<Libro>('Add Libro')))
}

 //=====ACTUALIZAR LIBRO======
 updateLibro(id: any, book: Libro):Observable<any>{
  return this.http.put(`${this.URL}/libros/`+ id, book,
    this.httpHeader).pipe(
      tap((_) => console.log(`libro updated: ${id}`)),
      catchError(this.handleError<Libro[]>('Update Libro'))
    );
}

//=====GET LIBRO POR ID======
getLibroId(id: any):Observable<Libro[]>{
  return this.http.get<Libro[]>(`${this.URL}/libros/` + id).pipe(
    tap((_) => console.log(`Libro fetched: ${id}`)),
    catchError(this.handleError<Libro[]>(`Get Libro id=${id}`))
  );
}

deleteLibro(id: any): Observable<Libro[]>{
  return this.http.delete<Libro[]>(`${this.URL}/libros/` + id).pipe(
    tap((_) => console.log(`Libro deleted: ${id}`)),
    catchError(this.handleError<Libro[]>(`Delete Libro`))
  )
}











//funcion para manejar errores
private handleError<T>(operation = 'operation', result?: T){
  return (error: any): Observable<T> => {
    console.log(error);
    console.log(`${operation} failed: ${error.message}`);
    return of (result as T);
  };
}


  
}


  


