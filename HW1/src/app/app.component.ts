import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
 VALUES: Array<string> = ["Hello World", "Привет Мир","Привіт Світ", "Hola Mundo", "Bonjour le monde", "Hallo Welt", "Ciao mondo", "Witaj świecie", "Hej världen", "Pozdravljen, svet", "Прывітанне Сусвет"];
}
