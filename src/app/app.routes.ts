import { provideRouter, RouterConfig }  from '@angular/router';
import { ClienteCadastroComponent } from './cliente/cliente-cadastro/cliente-cadastro.component';
import { ClientePesquisaComponent } from './cliente/cliente-pesquisa/cliente-pesquisa.component';


const routes: RouterConfig = [
    //componente inicial
    {
        path: '',
        redirectTo: '/clientesPesquisa',
        pathMatch: 'full'
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
