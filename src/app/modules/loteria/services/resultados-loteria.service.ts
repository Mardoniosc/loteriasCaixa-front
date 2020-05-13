import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../config/api.config';

@Injectable()
export class ResultadosLoteriaService {
  constructor(private http: HttpClient) {}

  private readonly TOKENCOMPLETO: string = `?token=${Token.TOKEN}`;

  resultadoLotofacil(concurso, modalidade): Observable<any> {
    return this.http.get(
      `/api/v2/${modalidade}/results/${concurso}${this.TOKENCOMPLETO}`,
    );
  }
}
