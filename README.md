# Simulador de Antecipação

Projeto de avaliação para vaga de desenvolvedor Front End

## Dependências do projeto

Em princípio é necessário o **Node** para executar este projeto.

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

**Onde:**
+ *index.html* > Arquivo principal do Html
+ *main.scss* > Arquivo principal do SCSS
+ *_variables.scss* > Arquivo para a definição de cores do SCSS
+ *_component.scss* > Arquivo para a definição dos componentes padrão do SCSS
+ *main.js* > Classe principal do projeto, responsável por agrupar os componentes e definir a lógica de fluxo da aplicação.
+ *index.js* > Arquivo responsável por disparar a execução da aplicação.
+ *money-format.js* > Classe Util responsável pelas regras de formatação de moeda.
+ *input-money.js* > Classe para controle de campos que devem ser usados para informar valores monetários.
+ *input-field.js* > Classe para controle de inputs Html
+ *mock-input.js* > Classe Mock que simula o básico de um input Html, Somente para testes.
+  *prepayment.js* > Classe responsável pela lógica do cálculo da antecipação.

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
