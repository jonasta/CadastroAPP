/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ClientePesquisaComponent } from './cliente-pesquisa.component';
import { Router }            from '@angular/router';
import { ClienteService } from '../cliente.service';

describe('Component: ClientePesquisa', () => {
  it('should create an instance', () => {
    var clienteService: ClienteService,
        router: Router;

     let component = new ClientePesquisaComponent(this.clienteService, this.router);
     expect(component).toBeTruthy();
  });
});
