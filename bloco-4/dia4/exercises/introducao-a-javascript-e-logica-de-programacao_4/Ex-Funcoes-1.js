let palavra = "arara";
let palavraDoAvesso = palavra.split('').reverse().join('');
function verificaPalindromo (palavra) {
    if (palavra === palavraDoAvesso) {
      return true;
    }
    else { return false;}
};
console.log(verificaPalindromo(palavra))