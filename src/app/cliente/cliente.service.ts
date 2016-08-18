import { Injectable }    from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Cliente } from './cliente';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ParametrosDTO } from './cliente-pesquisa/parametrosDTO';
import { Validacao} from './cliente-cadastro/validacao';
import {environment } from '../environment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClienteService {

  private clientesUrl = 'http://localhost:8080/API/rs/service';  // URL to web api
//comentario
  constructor(private http: Http) {
    if (environment.production){
      this.clientesUrl = 'http://cadatroapi2-env.wvmh9qgfdc.sa-east-1.elasticbeanstalk.com/rs/service';  // URL to web api
    }
}

  getClientes() {
    return this.http.get(this.clientesUrl)//observable
      .toPromise()
      .then(response => response.json() as Cliente[])
      .catch(this.handleError);
  }


  getCliente(id: number): Promise<Cliente> {
    return this.http
      .get(`${this.clientesUrl}/pesquisaPorId/?id=${id}`)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
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

  save(cliente: Cliente): Promise<Validacao> {
    if (cliente.id) {
      return this.put(cliente);
    }
    return this.post(cliente);
  }

  private post(cliente: Cliente): Promise<Validacao> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.clientesUrl, JSON.stringify(cliente), { headers: headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }


  private put(cliente: Cliente) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = this.clientesUrl;
    return this.http
      .put(url, JSON.stringify(cliente), { headers: headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  pesquisaClientes(parametrosDTO: ParametrosDTO) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http
          .post(`${this.clientesUrl}/pesquisa`, JSON.stringify(parametrosDTO), { headers: headers })
          .toPromise()
          .then(response => response.json() as Cliente[])
          .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
