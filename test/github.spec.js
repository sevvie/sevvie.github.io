import {Component, provide} from '@angular/core';
import {RouteSegment} from '@angular/router';
import {async, beforeEach, beforeEachProviders, describe, expect, inject, it}
  from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';

import {GithubHelper} from '../src/s/github';

describe('GithubHelper', () => {
  describe('#fetchRecent', () => {
    it('should return ten Events', () => {
      let gh = GithubHelper.fetchRecent();
      expect(gh.length).toEqual(10);
    });
  });
});
