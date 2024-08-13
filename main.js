// Array de frases

const frases = [
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "Aquele que se importa com o sentimento dos outros, não é um tolo.",
    "Sem o fogo do entusiasmo, não há o calor da vitória.",
    "Você é do tamanho do seu sonho.",
    "A maior barreira para o sucesso é o medo do fracasso.",
    "Motivação não é sinónimo de transformação, mas um passo em sua direção.",
    "A inspiração vem dos outros. A motivação vem de dentro de nós",
    "O sucesso é uma escolha"
];

// Função para gerar frase aleatória

const getFrase = () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    return frases[randomIndex];
  } 

  console.log(getFrase())