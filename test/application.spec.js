import {Component, provide} from '@angular/core';
import {RouteSegment} from '@angular/router';
import {async, beforeEach, beforeEachProviders, describe, expect, inject, it}
  from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';

import {Hello, Goodbye} from '../src/application';

describe('Hello', () => {
  it('renders greeting', async(inject([TestComponentBuilder], (tcb) => {
    tcb.createAsync(Hello)
       .then((fixture) => {
         fixture.detectChanges();
         expect(fixture.debugElement.nativeElement).toHaveText('Hello and welcome.');
       });
  })));
});
