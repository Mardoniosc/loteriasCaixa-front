import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from '../../../../environments/environment';
import { Token } from '../config/api.config';

@Injectable()
export class ResultadosLoteriaService {
  constructor(private http: HttpClient) {}

  private readonly PATHLOTOFACIL: string = '/lotofacil/results/';

  resultadoLotofacil(concurso): Observable<any> {
    return this.http.get(
      '/api/v2/lotofacil/results/1500?token=4944c564b3025e5aa92121116e20219c7513c79e11e9c9004dc98e36511667da',
    );
  }
}
