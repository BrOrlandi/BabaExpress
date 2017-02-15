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
    return 2;
};

export default {
    createBaba,
    validateBaba
};