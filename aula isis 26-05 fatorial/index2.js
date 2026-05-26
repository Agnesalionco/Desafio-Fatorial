function calcularFatorial(n) {
    if (!Number.isInteger(n)) return "Erro: Não existe fatorial para números decimais.";
    if (n < 0) return "Erro: Não existe fatorial para números negativos.";
    if (n === 0 || n === 1) return 1;
  
    let resultado = 1;
    for (let i = n; i > 1; i--) {
      resultado *= i;
    }
    return resultado;
  }
  
  console.log(calcularFatorial(6));
