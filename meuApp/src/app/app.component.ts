import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '', icon: 'home' },      
    { title: 'Navegação', url: 'navegacao', icon: 'mail' },    
    { title: 'Navegação 2', url: 'navegacao2', icon: 'mail' },
    { title: 'Botões', url: 'botoes', icon: 'play' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
