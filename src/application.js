import {Component, Input, Attribute} from '@angular/core';
import {Routes, Route, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'hello',
  template: '<h2>{{message}}</h2>'
})
export class Hello {
  constructor() {
    this.message = "Hello and welcome.";
  }
}

@Component({
  selector: 'goodbye',
  template: '<h2>{{message}}, fucko.</h2>'
})
export class Goodbye {
  constructor() {
    this.message = "Ciao";
  }
}

@Component({
  selector: 'sevspy-app',
  directives: [ROUTER_DIRECTIVES],
  template: `
    <ul>
      <li><a [routerLink]="['/']">Hello</a></li>
      <li><a [routerLink]="['/bye']">Goodbye</a></li>
    </ul>
    <router-outlet></router-outlet>`
})
@Routes([
    new Route({ path: '/', component: Hello }),
    new Route({ path: '/bye', component: Goodbye })
])
export class SevspyApp {};
