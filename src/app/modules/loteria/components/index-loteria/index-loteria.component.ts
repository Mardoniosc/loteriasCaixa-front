import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-index-loteria',
  templateUrl: './index-loteria.component.html',
  styleUrls: ['./index-loteria.component.css'],
})
export class IndexLoteriaComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.verifcacaoService();
  }

  verifcacaoService() {}
}
