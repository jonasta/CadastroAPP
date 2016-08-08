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
var cliente_service_1 = require('./cliente.service');
var router_1 = require('@angular/router');
var cliente_cadastro_component_1 = require('./cliente-cadastro.component');
var ClientesConsultaComponent = (function () {
    function ClientesConsultaComponent(clienteService, router) {
        this.clienteService = clienteService;
        this.router = router;
    }
    ClientesConsultaComponent.prototype.gotoCadastro = function (cliente) {
        var link = ['/cliente', cliente.id];
        this.router.navigate(link);
    };
    ClientesConsultaComponent.prototype.novoCliente = function () {
        var link = ['/cliente'];
        this.router.navigate(link);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ClientesConsultaComponent.prototype, "clientes", void 0);
    ClientesConsultaComponent = __decorate([
        core_1.Component({
            selector: 'lista-clientes',
            templateUrl: 'app/cliente-consulta.component.html',
            directives: [cliente_cadastro_component_1.ClienteCadastroComponent]
        }), 
        __metadata('design:paramtypes', [cliente_service_1.ClienteService, router_1.Router])
    ], ClientesConsultaComponent);
    return ClientesConsultaComponent;
}());
exports.ClientesConsultaComponent = ClientesConsultaComponent;
//# sourceMappingURL=cliente-consulta.component.js.map