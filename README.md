# Correio API

Uma API simples para gerenciamento de encomendas de um correio.

---

## Sobre o Projeto

O Correio API é um projeto pessoal criado com o objetivo de simular um sistema de gerenciamento de encomendas de um correio. Inspirado pela observação dos processos logísticos no dia a dia, decidi explorar conceitos de banco de dados SQL e desenvolvimento de APIs para criar uma solução básica e funcional.

## Tecnologias Utilizadas

- Node.js
- Express.js
- SQLite3

## Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina.

## Instalação

1. Clone este repositório:

```
git clone https://github.com/DsK-David/correioAPI.git
```

2. Instale as dependências:

```
npm install
```

3. Inicie o servidor:

```
npm start
```

## Contribuição

Se você quiser contribuir com o projeto, siga as etapas abaixo:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/NomeDaFeature`)
3. Faça commit das suas mudanças (`git commit -am 'Adicionando uma nova feature'`)
4. Faça push para a branch (`git push origin feature/NomeDaFeature`)
5. Abra um Pull Request

## Rotas

### Listar todas as encomendas

```
GET /correioAPI/api/v1/encomendas
```

Esta rota retorna todas as encomendas cadastradas no sistema.

### Criar uma nova encomenda

```
POST /correioAPI/api/v1/encomendas
```

Esta rota é usada para criar uma nova encomenda. Os seguintes campos são obrigatórios no corpo da requisição:

- `id`: ID único da encomenda (string)
- `nome_proprietario`: Nome do proprietário da encomenda (string)
- `contacto`: Contacto do proprietário da encomenda (integer)
- `endereco`: Endereço de entrega da encomenda (string)
- `documentos`: Documentos da encomenda (string)
- `status`: Status da encomenda (string)

### Atualizar o status de uma encomenda

```
PUT /correioAPI/api/v1/encomendas/:id
```

Esta rota é usada para atualizar o status de uma encomenda com base no ID fornecido na URL. O novo status deve ser passado no corpo da requisição.

### Listar todas as encomendas com o status "entregue"

```
GET /correioAPI/api/v1/encomendas/entregues
```

Esta rota retorna todas as encomendas que têm o status "entregue".

### Listar todas as encomendas com o status "vindo"

```
GET /correioAPI/api/v1/encomendas/vindo
```

Esta rota retorna todas as encomendas que têm o status "vindo".

### Pesquisar encomendas por nome do proprietário

```
GET /correioAPI/api/v1/encomendas/:nome_proprietario
```

Esta rota retorna todas as encomendas cujo nome do proprietário corresponde ao fornecido na URL.

### Buscar Encomenda por ID
```
GET /correioAPI/api/v1/encomendas/:id
```

Esta rota retorna os detalhes de uma encomenda específica com base no ID fornecido na URL.



## Observações

- Todas as respostas da API estão em formato JSON.
- Certifique-se de fornecer os dados corretamente no corpo da requisição ao criar ou atualizar uma encomenda.
- Os campos `id` das encomendas devem ser únicos. Ao criar uma nova encomenda, certifique-se de que o `id` fornecido ainda não foi usado.
- Ao atualizar o status de uma encomenda, certifique-se de fornecer o ID correto na URL e o novo status no corpo da requisição.

Este é um exemplo básico de uma API para gerenciamento de encomendas de um correio. Sinta-se à vontade para personalizá-la conforme suas necessidades. Se precisar de mais ajuda, não hesite em entrar em contato.

criado por DAVID SILVA

- Instagram: [David Silva](https://www.instagram.com/n0_0ne__dsk)
- Portfólio: [dsk-david.github.io](https://www.dsk-david.github.io)
