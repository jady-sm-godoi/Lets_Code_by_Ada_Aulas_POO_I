const UsuarioImportado = require('./Usuario.class')
const DocumentoImportado = require('./Documento.class')
const EnderecoImportado = require('./Endereco.class')

const usuario = new UsuarioImportado({
    nomeCompleto:'Jady Godoi',
    dataDeNascimento: Date.now(),
    documento: new DocumentoImportado('CPF', '050369999-98'),
    endereco: new EnderecoImportado(
        'Rua Sebastiao Carneiro',
        215,
        '01543-020',
        'São Paulo',
        'SP',
        'Parque da Aclimação'
    )}
)

console.log(usuario);