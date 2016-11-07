import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
    template: `
    <h1><img src="/images/logo.png" />{{title}}</h1>
    <router-outlet></router-outlet>
    
  `
})
export class AppComponent {
    title = 'Sponsering aanleg Hockeyveld';
}
