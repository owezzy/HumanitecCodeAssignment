import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-shell',
  templateUrl: './program-shell.component.html',
  styles: [`
   div[fxLayout] {margin-top: 32px;}
   `,
    `
  .active-link {
    font-weight: bold;
    border-bottom: 2px solid #ffffff;
  }`],
})
export class ProgramShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
