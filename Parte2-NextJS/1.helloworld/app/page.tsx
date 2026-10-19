let variavelGlobal: number = 10;

function Sla(): number {
    return variavelGlobal;
} 

export default function Home() {
  //funções e variáveis tbm podem ser colocadas aqui
  function Slaa(): number {
    return variavelGlobal;
  } 

  return (
    <div>
      {variavelGlobal = variavelGlobal + 1 /*nn pode o ";"; retorna o valor 11*/}  
      {variavelGlobal /*retorna o valor 11*/}
      {Sla() /*retorna o valor 11*/}
    </div>
  );
}
