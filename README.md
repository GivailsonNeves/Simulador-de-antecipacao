# simulador-de-antecipacao

Projeto de avaliação para vaga de desenvolvedor Front

## Dependências do projeto

Em princípio é nececessário o **Node** para executar este projeto.

## Arquitetura do projeto

```
    |-- src
        |-- scripts
            |-- models
                prepayment.js
            |-- test-mock
                mock-input.js
            |-- ui
                input-field.js
                input-money.js
            |-- utils
                money-format.js
            index.js
            main.js
        |-- scss
            _components.scss
            _variables.scss
            main.scss
    index.html
```

## Execução do projeto

+ Clone o projeto e via terminal faça a instalação das dependências utilizando o npm:

```bash 
> npm install 
```

+ Execute o comando para efetuar as devidas compilações de código:

```bash
> npm run build
```

+ Execute o comando a seguir para executar um servidor local com a aplicação rodando:

```bash
> npm run serve
```

+ Para executar a rotina de testes, utilize o comando:

```bash
> npm run test
```

Obs: Para o modo de desenvolvimento, em paralelo com o comando **npm run serve** também é possível rodar o comando a seguir para que as alterações no src sejam refletidas no navegador.

```bash
> npm run watch
```
