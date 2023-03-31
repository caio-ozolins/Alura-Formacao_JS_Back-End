function apresentar(nome) {
    return `meu nome é ${nome}`;
}

// Arrow function
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (x, y) => x + y;

const somaNumerosPequenos = (x, y) => {
    if (x || y > 10) {
        return 'somente numeros de 1 a 9'
    } else {
        return x + y;
    }
}