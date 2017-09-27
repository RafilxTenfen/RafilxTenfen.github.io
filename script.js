const IlegalArgumentError = function (msg) {
    this.name = 'IlegalArgumentError';
    this.message = msg;
};

function soma(a, b) {
    if (!a || !b) throw new IlegalArgumentError('Entrada 2 Invalida');
    return a + b;
}

try {
    soma(2);
} catch (err) {
    document.querySelector('#erro').textContent = err.message;
    alert(err.stack);
}
