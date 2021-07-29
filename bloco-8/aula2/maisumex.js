const musicas = [
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(ide) {
  // Adicione seu código aqui
  if (ide.id === '31031685') {
    return (ide.title);
  }
}

console.log(musicas.find(findMusic))