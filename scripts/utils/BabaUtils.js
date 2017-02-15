import validator from 'validator';

const createBaba = (form, fotoUrl) => {
    return {
        nome: form.nome.value,
        email: form.email.value,
        sexo: form.sexo.value,
        senha: form.senha.value,
        telefone: form.telefone.value,
        cpf: form.cpf.value,
        nascimento: form.nascimento.value,
        endereco: form.endereco.value,
        escolaridade: form.escolaridade.value,
        cv: form.cv.value,
        foto: fotoUrl
    };
}

const validateBaba = (baba) => {
    const errors = [];

    const properties = [
        'nome',
        'email',
        'sexo',
        'senha',
        'telefone',
        'cpf',
        'nascimento',
        'endereco',
        'escolaridade',
        'cv',
        'foto'
    ];

    properties.forEach(prop => {
        if (baba[prop] || validator.isEmpty(baba[prop])) errors.push(`Baba's property [${prop}] is required`);
    });

    if (errors.length > 0) {
        const error = new Error('Baba form is not valid');
        error.errors = errors;
        throw error;
    }
};

export default {
    createBaba,
    validateBaba
};