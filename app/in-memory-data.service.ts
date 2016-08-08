export class InMemoryDataService {
    createDb() {
        let clientes = [
            {
                id: 2,
                nome: 'Alan dos Santos',
                email: 'joanstads@gmail.com',
                cpf: '06725625967',
                telefone: '4188721205',
                nascimento: 622695600000,
                ativo: true
            },
            {
                id: 4,
                nome: 'Alan dos Santos',
                email: 'joanstads@gmail.com',
                cpf: '06725625967',
                telefone: '4188721205',
                nascimento: 622695600000,
                ativo: true
            },
            {
                id: 6,
                nome: 'Alan dos Santos',
                email: 'joanstads@gmail.com',
                cpf: '06725625967',
                telefone: '4188721205',
                nascimento: 622695600000,
                ativo: true
            },
            {
                id: 1,
                nome: 'Novo Nome',
                email: 'joanstads@gmail.com',
                cpf: '06725625967',
                telefone: '4188721205',
                nascimento: 622695600000,
                ativo: false
            }
        ];
        return { clientes };
    }
}
