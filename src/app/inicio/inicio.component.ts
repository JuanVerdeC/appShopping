import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  valorStatico: string = "";
  valorResultado: string ="";
  constructor() { }

  ngOnInit(): void {
  }

  keyUpTexto1(event: any){
    this.valorStatico = "Target :";
    this.valorResultado = event.target;
  }

  keyUpTexto2(event: any){
    this.valorStatico = "CurrentTarget :";
    this.valorResultado = event.currentTarget;
  }

}
