import { Component, OnInit } from '@angular/core';

import { ResultadosLoteriaService } from '../../services';

@Component({
  selector: 'app-lotofacil-results',
  templateUrl: './lotofacil-results.component.html',
  styleUrls: ['./lotofacil-results.component.css'],
})
export class LotofacilResultsComponent implements OnInit {
  constructor(private resultadosService: ResultadosLoteriaService) {}

  ngOnInit(): void {
    this.testeResultados();
  }

  testeResultados() {
    this.resultadosService.resultadoLotofacil(1500, 'mega_sena').subscribe(
      (data) => {
        console.log(data);
      },
      (err) => console.log(err),
    );
  }
}
