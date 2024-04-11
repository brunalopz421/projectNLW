let participantes = [
  {
    nome: "Diego Fernandes",
    email: "diego@gmail.com",
    dataInscricao: new Date(2024, 2, 1, 19, 23),
    dataCheckIn: new Date(2024, 2, 1, 20, 20),
  },
  {
    nome: "Bruna Lopez",
    email: "bruna@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 0),
  },
  {
    nome: "João Silva",
    email: "joao@gmail.com",
    dataInscricao: new Date(2024, 2, 10, 15, 40),
    dataCheckIn: new Date(2024, 2, 15, 16, 30),
  },
  {
    nome: "Maria Santos",
    email: "maria@gmail.com",
    dataInscricao: new Date(2024, 2, 5, 12, 10),
    dataCheckIn: new Date(2024, 2, 7, 14, 45),
  },
  {
    nome: "Pedro Oliveira",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2024, 2, 17, 20, 30),
    dataCheckIn: new Date(2024, 2, 19, 21, 15),
  },
  {
    nome: "Ana Rodrigues",
    email: "ana@gmail.com",
    dataInscricao: new Date(2024, 2, 12, 10, 20),
    dataCheckIn: new Date(2024, 2, 14, 11, 45),
  },
  {
    nome: "Carlos Almeida",
    email: "carlos@gmail.com",
    dataInscricao: new Date(2024, 2, 20, 18, 50),
    dataCheckIn: new Date(2024, 2, 23, 21, 20),
  },
  {
    nome: "Juliana Costa",
    email: "juliana@gmail.com",
    dataInscricao: new Date(2024, 2, 8, 14, 30),
    dataCheckIn: new Date(2024, 2, 12, 16, 10),
  },
  {
    nome: "Rafaela Pereira",
    email: "rafaela@gmail.com",
    dataInscricao: new Date(2024, 2, 25, 9, 15),
    dataCheckIn: new Date(2024, 2, 27, 10, 30),
  },
  {
    nome: "Lucas Martins",
    email: "lucas@gmail.com",
    dataInscricao: new Date(2024, 2, 3, 22, 40),
    dataCheckIn: new Date(2024, 2, 5, 23, 55),
  },
];

console.log(participantes);

const criarNovoParticipante = (participante) => {
  const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao);
  const dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn);

  return `
<td>
    <strong>
      ${participante.nome}
    </strong>
    <br>
    <small>
     ${participante.email}
    </small>
    </td>
    <td> ${participante.dataInscricao}</td>
    <td> ${dataCheckIn}</td>
 </tr>
`;
};

const atualizarLista = (participantes) => {
  let output = "";
  for (let participante of participantes) {
    output = output + criarNovoParticipante(participante);
  }

  document.querySelector("tbody").innerHTML = output;
};

atualizarLista(participantes);
