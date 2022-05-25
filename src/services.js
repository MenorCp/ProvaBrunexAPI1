export function somar(a, b){
    return a + b;
}

export function dobro(nr){
    return nr * 2;
}

export function corprimaria(cor){
    let a = cor == "azul" || cor == "vermelho" || cor == "verde"
    return a
}

export function ingresso(qtdInteira, qtdMeia, diaSem, nacionalidade){
    if(nacionalidade == 'brasileira'){
        return (qtdInteira + qtdMeia) * 5;
    }
    else if(diaSem == 'quarta'){
        return(qtdInteira + qtdMeia) * 14.25;
    }
    else{
        return(qtdInteira * 28.5) + (qtdMeia * 14.25);
    }   
}

export function freqCaracter(texto, caractere){
    let qtd = 0;
    for(let letra of texto)
        if(letra == caractere){
            qtd++;
        }
    return qtd;
}

export function maiorNumero(numeros){
    let maior = Number.MIN_VALUE;
    for (let item of numeros){
        if(item > maior)
            maior = item;
    }   
    return maior;
}