RentalX
## Cars ##

**RF**
- Deve ser possivel cadastrar um novo carro

**RNF**

**RN**
- Nao deve ser possivel cadastrar um carro com uma placa ja existente (license plate)
- Nao deve ser possivel alterar a placa de um carro ja cadastrado.
- Carro deve ser cadastrado com disponiilidade true por padrao.
- Nao deve ser possivel usuario comum cadastrar um novo carro.

## Listagem de carros ##

**RF**
- Deve ser possivel listar todos carros disponiveis.
- Deve ser posslive listar todos oso carros disponiveis pelo nome da categoria.
- Deve ser posslive listar todos oso carros disponiveis pelo nome da carro.
- Deve ser posslive listar todos oso carros disponiveis pelo nome da marca.

**RNF**

**RN**
- Usuario nao precisa estar logado no sistema.

## Cadastro especificacoes no carro ##

**RF**
- Deve ser possivel cadastrar uma especificacao para um carro.
- Deve ser possivel listar todas as especificacoes.
- Deve ser possivel listar todos os carros.

**RNF**

**RN**
- Nao deve ser possivel cadastrar uma especificacao para um carro que nao esteja cadastrado no sistema.
- Nao deve ser possivel cadastrar uma espeficaicao ja existente para o mesmo carro.
- Nao deve ser possivel cusuario comumcadastrar uma especificacao

## Cadastro imagem do carro ##

**RF**
- Deve ser possivel cadastrar imagem a um carro.
- Deve ser possivel listar todos os carros.
**RNF**
- Utilizar o multer para upload dos arquivos.

**RN**
- Deve ser possivel cadastrar mais de uma imagem para o carro
- Nao deve ser possivel usuario comum cadastrar um novo carro.

## Aluguel de carro ##

**RF**
- Deve ser possivel cadastrar um aluguel
**RNF**


**RN**
- Aluguel deve ter duracao minima de 24 horas.
- Nao deve ser possivel cadastrar um novo aluguel caso ja exista um aberto para o mesmo usuario
- Nao deve ser possivel alugar um carro que esta em uso.