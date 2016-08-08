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
var router_1 = require('@angular/router');
var cliente_pesquisa_service_1 = require('./cliente-pesquisa.service');
var cliente_pesquisa_1 = require('./cliente-pesquisa');
var cliente_consulta_component_1 = require('./cliente-consulta.component');
var ClientePesquisaComponent = (function () {
    function ClientePesquisaComponent(clientePesquisaService, router) {
        this.clientePesquisaService = clientePesquisaService;
        this.router = router;
        this.clientePesquisa = new cliente_pesquisa_1.ClientePesquisa();
    }
    ClientePesquisaComponent.prototype.pesquisaClientes = function (clientePesquisa) {
        var _this = this;
        this.clientePesquisaService.pesquisaClientes(clientePesquisa).then(function (clientes) { return _this.clientes = clientes; });
    };
    ClientePesquisaComponent.prototype.ngOnInit = function () {
        this.pesquisaClientes(this.clientePesquisa);
    };
    ClientePesquisaComponent.prototype.gotoCadastro = function (cliente) {
        var link = ['/cliente', cliente.id];
        this.router.navigate(link);
    };
    ClientePesquisaComponent = __decorate([
        core_1.Component({
            selector: 'cliente-pesquisa',
            templateUrl: 'app/cliente-pesquisa.component.html',
            providers: [cliente_pesquisa_service_1.ClientePesquisaService],
            directives: [cliente_consulta_component_1.ClientesConsultaComponent]
        }), 
        __metadata('design:paramtypes', [cliente_pesquisa_service_1.ClientePesquisaService, router_1.Router])
    ], ClientePesquisaComponent);
    return ClientePesquisaComponent;
}());
exports.ClientePesquisaComponent = ClientePesquisaComponent;
//# sourceMappingURL=cliente-pesquisa.component.js.map