import { provideRouter, RouterConfig }  from '@angular/router';
import { ClientesConsultaComponent } from './cliente-consulta.component';
import { ClienteCadastroComponent } from './cliente-cadastro.component';
import { ClientePesquisaComponent } from './cliente-pesquisa.component';


const routes: RouterConfig = [
    //componente inicial
    {
        path: '',
        redirectTo: '/clientesPesquisa',
        pathMatch: 'full'
    },
    {
        path: 'clientes',
        component: ClientesConsultaComponent
    },
    {
        path: 'clientesPesquisa',
        component: ClientePesquisaComponent
    },
    {
        path: 'cliente',
        component: ClienteCadastroComponent
    },
    {
        path: 'cliente/:id',
        component: ClienteCadastroComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];
