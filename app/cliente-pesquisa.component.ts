import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { ClientePesquisaService } from './cliente-pesquisa.service';
import { Cliente } from './cliente';
import { ClientePesquisa } from './cliente-pesquisa';
import { ClientesConsultaComponent } from './cliente-consulta.component';


import './rxjs-extensions';

@Component({
    selector: 'cliente-pesquisa',
    templateUrl: 'app/cliente-pesquisa.component.html',
    providers: [ClientePesquisaService],
    directives: [ClientesConsultaComponent]
})

export class ClientePesquisaComponent implements OnInit {
    clientes: Observable<Cliente[]>;
    clientePesquisa = new ClientePesquisa();
    private searchTerms = new Subject<ClientePesquisa>();
    constructor(
        private clientePesquisaService: ClientePesquisaService,
        private router: Router) { }

    // Push a search term into the observable stream.
    pesquisaClientes(clientePesquisa: ClientePesquisa) {
        console.log(clientePesquisa.nome);
        this.searchTerms.next(clientePesquisa);
    }

    ngOnInit() {

        this.clientes = this.searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            //    .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.clientePesquisaService.pesquisaClientes(term)
                // or the observable of empty clientes if no search term
                : Observable.of<Cliente[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Cliente[]>([]);
            });

            //
            // this.clientes = this.searchTerms
            //     .debounceTime(300)        // wait for 300ms pause in events
            //     //    .distinctUntilChanged()   // ignore if next search term is same as previous
            //     .switchMap(term => term   // switch to new observable each time
            //         // return the http search observable
            //         ? this.clientePesquisaService.pesquisaClientes(term)
            //         // or the observable of empty clientes if no search term
            //         : Observable.of<Cliente[]>([]))
            //     .catch(error => {
            //         // TODO: real error handling
            //         console.log(error);
            //         return Observable.of<Cliente[]>([]);
            //     });
    }

    ngAfterContentInit() {
        this.searchTerms.next(this.clientePesquisa);
    }

    gotoCadastro(cliente: Cliente) {
        let link = ['/cliente', cliente.id];
        this.router.navigate(link);
    }
}
