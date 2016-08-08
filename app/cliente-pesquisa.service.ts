import { Injectable }     from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Cliente }           from './cliente';
import { ClientePesquisa } from './cliente-pesquisa';

@Injectable()
export class ClientePesquisaService {
    constructor(private http: Http) { }

    pesquisaClientes(clientePesquisa: ClientePesquisa) {
        console.log('service.pesquisaclientes');
        return this.post(clientePesquisa);

    }

    private post(clientePesquisa: ClientePesquisa) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = 'http://localhost:8080/Solyos_API/rs/service/pesquisa';

        console.log('service.post');

        return this.http
            .post(url, JSON.stringify(clientePesquisa), { headers: headers })
            .map((r: Response) => r.json() as Cliente[]);
    }


}
