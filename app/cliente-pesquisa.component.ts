import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { ClientePesquisaService } from './cliente-pesquisa.service';
import { Cliente } from './cliente';
import { ClientePesquisa } from './cliente-pesquisa';
import { ClientesConsultaComponent } from './cliente-consulta.component';


@Component({
    selector: 'cliente-pesquisa',
    templateUrl: 'app/cliente-pesquisa.component.html',
    providers: [ClientePesquisaService],
    directives: [ClientesConsultaComponent]
})

export class ClientePesquisaComponent implements OnInit {
    clientes: Cliente[];

    clientePesquisa = new ClientePesquisa();
    constructor(
        private clientePesquisaService: ClientePesquisaService,
        private router: Router) { }

    pesquisaClientes(clientePesquisa: ClientePesquisa) {
         this.clientePesquisaService.pesquisaClientes(clientePesquisa).then(clientes => this.clientes = clientes);
    }

    ngOnInit() {
      this.pesquisaClientes(this.clientePesquisa);
    }

    gotoCadastro(cliente: Cliente) {
        let link = ['/cliente', cliente.id];
        this.router.navigate(link);
    }
}
