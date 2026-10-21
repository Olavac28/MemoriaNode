let variavelGlobal: number = 10;

function Sla(): number {
    return variavelGlobal;
}

function RetornaHTML() { //vira um componente; tem que ser com letra maiúsculo no cmç
  return (
    <div>
      <div>A</div> 
      <div>B</div>
      <div>C</div>
    </div>
  )
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
      <RetornaHTML/> {/*o msm que retornaHTML()*/}
    </div>
  );
}
