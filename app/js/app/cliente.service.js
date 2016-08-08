"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ClienteService = (function () {
    function ClienteService(http) {
        this.http = http;
        this.clientesUrl = 'http://localhost:8080/Solyos_API/rs/service'; // URL to web api
    }
    ClienteService.prototype.getClientes = function () {
        return this.http.get(this.clientesUrl) //observable
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ClienteService.prototype.getCliente = function (id) {
        return this.getClientes()
            .then(function (clientes) { return clientes.find(function (cliente) { return cliente.id === id; }); });
    };
    ClienteService.prototype.delete = function (cliente) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.clientesUrl + "/" + cliente.id;
        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    };
    ClienteService.prototype.save = function (cliente) {
        if (cliente.id) {
            return this.put(cliente);
        }
        return this.post(cliente);
    };
    ClienteService.prototype.post = function (cliente) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.clientesUrl, JSON.stringify(cliente), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    ClienteService.prototype.put = function (cliente) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.clientesUrl;
        return this.http
            .put(url, JSON.stringify(cliente), { headers: headers })
            .toPromise()
            .then(function () { return cliente; })
            .catch(this.handleError);
    };
    ClienteService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ClienteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ClienteService);
    return ClienteService;
}());
exports.ClienteService = ClienteService;
//# sourceMappingURL=cliente.service.js.map