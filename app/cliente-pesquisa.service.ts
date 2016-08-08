import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Cliente }           from './cliente';
import { ClientePesquisa } from './cliente-pesquisa';

@Injectable()
export class ClientePesquisaService {
    constructor(private http: Http) { }

    pesquisaClientes(clientePesquisa: ClientePesquisa) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = 'http://localhost:8080/API/rs/service/pesquisa';
        return this.http
            .post(url, JSON.stringify(clientePesquisa), { headers: headers })
            .toPromise()
            .then(response => response.json() as Cliente[])
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


}
