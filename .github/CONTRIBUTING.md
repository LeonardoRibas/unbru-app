# Guia de Contribuição ao UnBRU

Primeiramente, obrigado pelo seu interesse em contribuir! Precisamos de desenvolvedores como você para ajudar a decolar esse projeto 🚀.

Este documento é um conjunto de boas práticas para sua contribuição. Não encare as seguintes diretrizes como regras, use seu bom senso para que sua contribuição seja o mais clara possível e sinta-se livre para sugerir alterações nesse documento por meio de um Pull Request.

## Commits

- Cada commit deve representar apenas uma mudança
  > Não faça várias mudanças em um mesmo commit. Por exemplo, se suas mudanças resolvem um bug e introduzem uma feature, divida-as em dois commits separados.
  >
  > **Dica:** Utilize a flag -p no commit para interativamente selecionar porções específicas das mudanças
- Prefira escrever os commits utilizando um editor ao invés do terminal
  > **Por que?** Commitar pelo terminal encoraja commits que se limitam à apenas 50 characteres (apenas título), podendo ocasionar commits ambiguos/não-informativos
- Usar modo imperativo nas mensagens de commit ("Adiciona feature" não "Adicionando feature" ou "Adicionada feature")
- Primeira linha deve ter no máximo 50 caracteres
- Considere descrever as mudanças com detalhes no corpo do commit
- Considere usar um emoji no início da mensagem de commit que descreva seu tipo:

Emoji | Código | Tipo de Commit
------------ | ------------- | -------------
:sparkles: | `:sparkles:` | adiciona nova feature
:lipstick: | `:lipstick:` | adiciona ou atualiza estilização
:adhesive_bandage: | `:adhesive_bandage:` | conserto simples
:fire: | `:fire:` | remove código ou arquivo
:wrench: | `:wrench:` | adiciona ou atualiza arquivo de configuração
:art: | `:art:` | melhora a estrutura/formato do código
:bento: | `:bento:` | adiciona ou atualiza assets
:bug: | `:bug:` | corrige um bug
:heavy_plus_sign: | `:heavy_plus_sign:` | adiciona dependência
:recycle: | `:recycle:` | refatora código
:test_tube: | `:test_tube:` | adiciona ou atualiza testes
:construction: | `:construction:` | em construção (WIP)
:memo: | `:memo:` | adiciona ou atualiza documentação

### Exemplo
```bash
git commit -m ":memo: Adiciona instruções de contribuição
>
> Foi criado o arquivo CONTRIBUTING.md com as instruções de
> como fazer um bom commit"
``` 

## Pull Requests
Os Pull Requests devem seguir o seguinte template:
```
### Objetivo principal do PR

<!--
Descreva de maneira geral qual o propósito principal do PR.
-->

### Descrição das mudanças

<!--
Descreva um resumo das mudanças. É importante que os mantenedores do projeto consigam entender as mudanças a partir dessa descrição, caso contrário esse PR poderá ser fechado.
Tenha em mente que o revisor do PR pode não estar familiarizado com o trabalho que você desenvolveu.
-->
```
