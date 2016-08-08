import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Cliente } from './cliente';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClienteService {
    private clientesUrl = 'http://localhost:8080/Solyos_API/rs/service';  // URL to web api

    constructor(private http: Http) { }

    getClientes() {
        return this.http.get(this.clientesUrl)//observable
            .toPromise()
            .then(response => response.json() as Cliente[])
            .catch(this.handleError);
    }

    getCliente(id: number) {
        return this.getClientes()
            .then(clientes => clientes.find(cliente => cliente.id === id));
    }


    delete(cliente: Cliente) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.clientesUrl}/${cliente.id}`;

        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    }

    save(cliente: Cliente): Promise<Cliente> {
        if (cliente.id) {
            return this.put(cliente);
        }
        return this.post(cliente);
    }

    private post(cliente: Cliente): Promise<Cliente> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.clientesUrl, JSON.stringify(cliente), { headers: headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }


    private put(cliente: Cliente) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = this.clientesUrl;
        return this.http
            .put(url, JSON.stringify(cliente), { headers: headers })
            .toPromise()
            .then(() => cliente)
            .catch(this.handleError);
    }




    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
