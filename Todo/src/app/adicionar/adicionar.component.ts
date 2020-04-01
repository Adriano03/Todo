import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})
export class AdicionarComponent implements OnInit {

  titulo: string;
  add = '';
  adicionado = [];


  constructor() {

    this.titulo = "Atividade ToDo List!";

  }

  ngOnInit(): void {
  }

  adicionar() {
    this.adicionado.push({ adicionado: this.add });

  }

  deletar(i) {
    this.adicionado.splice(i, 1);

  }





}
