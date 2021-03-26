import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'hello',
  //selecter toute les balise hello
  template: `
    <h1 *ngIf= "value>50">Hello MIAGE {{name}}!</h1>
    <h1>
       <input type="range" 
          [(ngModel)]="value"
          (ngModelChange)="update($event)"
        />
      {{ getValue(value) }}
    </h1>
  `,
  //      [(ngModel)]="value"  type="range"(拖拽条) checkbox选择器
  //ngModelChange,意思是balise input et mis en evenement et je mis abonne
  //$event, event est une variable que ngmodelchange a produit (如果input的type是text则event的type也是text)
  styles: [`h1 { font-family: Lato; }`]
  //pour le css
})
export class HelloComponent  {
  value = 5;
  //valeur par defaut
  @Input() name: string="DEFAUT";
  //lorsque je vais definir ma balise hello, je vais pouvoir lui passer un attribut name
  //链接此class中的name和html中的name
  @Output() monEvt = new EventEmitter<number>();

  getValue(v: number): number {
    return Math.round(v/10);
  }
  update(v: number): void {
    //const V = Math.round(v/10);
    this.monEvt.emit(this.getValue(v));
    //emit:on veut envoyer quelques chose;
  }
}
