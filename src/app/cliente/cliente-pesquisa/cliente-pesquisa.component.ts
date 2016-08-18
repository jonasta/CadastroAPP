import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { ParametrosDTO } from './parametrosDTO';
//comentario
@Component({
  moduleId: module.id,
  selector: 'app-cliente-pesquisa',
  templateUrl: 'cliente-pesquisa.component.html',
  styleUrls: ['cliente-pesquisa.component.css'],
  providers: [ClienteService]
})

export class ClientePesquisaComponent implements OnInit {
  clientes: Cliente[];

  parametrosDTO = new ParametrosDTO();
  constructor(
    private clienteService: ClienteService,
    private router: Router) { }

  pesquisaClientes(parametrosDTO: ParametrosDTO) {
    this.clienteService.pesquisaClientes(parametrosDTO).then(clientes => this.clientes = clientes);
  }

  ngOnInit() {
    this.pesquisaClientes(this.parametrosDTO);
  }

  gotoCadastro(cliente: Cliente) {
    let link = ['/cliente', cliente.id];
    this.router.navigate(link);
  }

  error: any;
  novoCliente() {
    let link = ['/cliente'];
    this.router.navigate(link);
  }


}
