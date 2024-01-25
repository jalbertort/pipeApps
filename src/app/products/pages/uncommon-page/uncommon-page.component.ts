import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

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

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => {
      console.log('tap:', value);

    })
  )

  public promeseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
    }, 3500);
  })


}
