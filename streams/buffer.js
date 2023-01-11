// Buffer é uma representação de um espaço na memória do computador, usado para transitar dados de uma meneira rápida.
// Os dados armazenados no buffer são armazenados para logo serem tratados e ser enviado para outro lugar e serem removidos.
// São maneiras da gente conseguir salvar e ler da memória de uma maneira muito performática.

const buf = Buffer.from("hello")

console.log(buf.toJSON())

