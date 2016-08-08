import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService }     from './cliente.service';
import { Router } from '@angular/router'
import { ClientePesquisa } from './cliente-pesquisa';
import { ClienteCadastroComponent } from './cliente-cadastro.component'
import { Observable }        from 'rxjs/Observable';

@Component({
    selector: 'lista-clientes',
    templateUrl: 'app/cliente-consulta.component.html',
    directives: [ClienteCadastroComponent]
})


export class ClientesConsultaComponent implements OnInit {
    @Input() clientes: Observable<Cliente[]>;

    constructor(
        private clienteService: ClienteService,
        private router: Router) { }


    ngOnInit() {
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
