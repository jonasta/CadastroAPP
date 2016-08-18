/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ClienteCadastroComponent } from './cliente-cadastro.component';
import { Router }            from '@angular/router';
import { ClienteService } from '../cliente.service';
describe('Component: ClienteCadastro', () => {
  it('should create an instance', () => {
    var clienteService: ClienteService;
    var router: Router;
    let component = new ClienteCadastroComponent(this.clienteService, this.router)
    expect(component).toBeTruthy();
  });
});
