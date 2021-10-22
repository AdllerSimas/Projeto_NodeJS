# Cadastro de Carros

**Requisitos Funcionais**
Deve ser possível cadastrar um novo carro
Deve ser possível listar todas as categorias

**Requisitos Não Funcionais**

**Regra de Negócio**
Não deve ser possível cadastrar um carro com uma placa já existente
Não deve ser possível alterar a placa de um carro já cadastrado
O carro deve ser cadastrado, por padrão, com disponibilidade
O Usuário responsável pelo cadastro deve ser um usuário administrador



# Listagem de Carros

**Requisitos Funcionais**
Deve ser possível listar os carros
Deve ser possível listar todos os carros disponíveis pelo nome da categoria
Deve ser possível listar todos os carros disponíveis pelo nome da marca
Deve ser possível listar todos os carros disponíveis pelo nome do carro

**Requisitos Não Funcionais**
O usuário não precisa estar logado no sistema



# Cadastro de Especificação do Carro

**Requisitos Funcionais**
Deve ser possível cadastrar uma especificação para um carro
Deve ser possível listar todas as especificações
Deve ser possível listar todos os carros


**Requisitos Não Funcionais**

**Regra de Negócio**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado
Não deve ser possível cadastrar uma especificação existente para o mesmo carro
O usuário responsável pelo cadastro deve ser um usuário admnistrador



# Cadastro de imagens do carro

**Requisitos Funcionais**
Deve ser possível cadastrar a imagem do carro
Deve ser possível listar todos os carros

**Requisitos Não Funcionais**
Utilizar o multer para upload dos arquivos

**Regra de Negócio**
O Usuário deve poder cadastrar mais de uma imagem para o mesmo carro
O usuário responsável pelo cadastro deve ser um usuário admnistrador


# Aluguel de carros

**Requisitos funcionais**
Deve ser possível cadastrar um aluguel

**Requisitos Não Funcionais**

**Regras de Negócio**
O Aluguel deve ter duração mínima de 24 horas
Não deve ser possível cadastrar um novo aluguel para um carro já alugado
Não deve ser possível cadastrar um novo aluguel para um usuário que já alugou um carro

