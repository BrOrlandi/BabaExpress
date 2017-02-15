import BabaUtils from '../BabaUtils';

describe('BabaUtils', () => {
    it('should invalidate an invalid Baba registry', () => {;
        const baba = BabaUtils.createBaba({
            nome: {value: 'Fulano Alves'},
            email: {value: 'falves@gmail.com'},
            sexo: {value: 'M'},
            telefone: {value: '(19) 9-8899-0011'},
            cpf: {value: '12345678901'},
            nascimento: {value: '01/01/2000'},
            endereco: {value: 'Rua Moraes Moreira, 200'},
            escolaridade: {value: '2º Grau completo'},
            cv: {value: 'Lalalalalalala'}
        }, 'my_photo.jpg');
        expect(() => {
            BabaUtils.validateBaba(baba);
        }).toThrow();
    });
});