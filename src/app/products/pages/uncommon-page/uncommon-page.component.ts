import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = "Jose";
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(): void {
    this.name = 'Valeryn';
    this.gender = 'female'
  }

  // i18nPlural
  public clients: string[] = [
    'Maria','Pedro','Fernando','Hernando','Eduardo','Melissa','Natalia',
  ]
  public clientsMap = {
    '=0':'no tenemos ningún cliente esperando.',
    '=1':'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient():void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Jose',
    age: 36,
    address: 'San Antonio, Los Alcarrizos'
  }


}
