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
var cliente_1 = require('./cliente');
var cliente_service_1 = require('./cliente.service');
var ClienteCadastroComponent = (function () {
    function ClienteCadastroComponent(clienteService, route) {
        this.clienteService = clienteService;
        this.route = route;
        this.close = new core_1.EventEmitter();
    }
    ClienteCadastroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.clienteService.getCliente(id)
                    .then(function (cliente) { return _this.cliente = cliente; });
            }
            else {
                _this.cliente = new cliente_1.Cliente();
                _this.cliente.ativo = true;
            }
        });
    };
    ClienteCadastroComponent.prototype.save = function () {
        var _this = this;
        this.clienteService
            .save(this.cliente)
            .then(function (cliente) {
            _this.cliente = cliente;
            _this.goBack(cliente);
        })
            .catch(function (error) { return _this.error = error; });
    };
    ClienteCadastroComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ClienteCadastroComponent.prototype.goBack = function (clienteSalvo) {
        if (clienteSalvo === void 0) { clienteSalvo = null; }
        this.close.emit(clienteSalvo);
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', cliente_1.Cliente)
    ], ClienteCadastroComponent.prototype, "cliente", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ClienteCadastroComponent.prototype, "close", void 0);
    ClienteCadastroComponent = __decorate([
        core_1.Component({
            selector: 'cliente-cadastro',
            templateUrl: 'app/cliente-cadastro.component.html'
        }), 
        __metadata('design:paramtypes', [cliente_service_1.ClienteService, router_1.ActivatedRoute])
    ], ClienteCadastroComponent);
    return ClienteCadastroComponent;
}());
exports.ClienteCadastroComponent = ClienteCadastroComponent;
//# sourceMappingURL=cliente-cadastro.component.js.map