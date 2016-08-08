import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
    selector: 'cliente-cadastro',
    templateUrl: 'app/cliente-cadastro.component.html'
})
export class ClienteCadastroComponent implements OnInit, OnDestroy {
    @Input() cliente: Cliente;
    @Output() close = new EventEmitter();
    error: any;
    sub: any;

    constructor(
        private clienteService: ClienteService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            if (params['id'] !== undefined) {
                let id = +params['id'];
                this.clienteService.getCliente(id)
                    .then(cliente => this.cliente = cliente);
            } else {
                this.cliente = new Cliente();
                this.cliente.ativo = true;
            }
        });
    }


    save() {
        this.clienteService
            .save(this.cliente)
            .then(cliente => {
                this.cliente = cliente;
                this.goBack(cliente);
            })
            .catch(error => this.error = error);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goBack(clienteSalvo: Cliente = null) {
        this.close.emit(clienteSalvo);
        window.history.back(); 
    }
}
