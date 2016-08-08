"use strict";
var router_1 = require('@angular/router');
var cliente_consulta_component_1 = require('./cliente-consulta.component');
var cliente_cadastro_component_1 = require('./cliente-cadastro.component');
var cliente_pesquisa_component_1 = require('./cliente-pesquisa.component');
var routes = [
    //componente inicial
    {
        path: '',
        redirectTo: '/clientesPesquisa',
        pathMatch: 'full'
    },
    {
        path: 'clientes',
        component: cliente_consulta_component_1.ClientesConsultaComponent
    },
    {
        path: 'clientesPesquisa',
        component: cliente_pesquisa_component_1.ClientePesquisaComponent
    },
    {
        path: 'cliente',
        component: cliente_cadastro_component_1.ClienteCadastroComponent
    },
    {
        path: 'cliente/:id',
        component: cliente_cadastro_component_1.ClienteCadastroComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map