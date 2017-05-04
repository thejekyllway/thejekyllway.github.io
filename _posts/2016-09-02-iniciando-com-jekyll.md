---
layout: post
title:  "Iniciando com Jekyll"
author: Mateus Medeiros
description: Primeiro post da série sobre Jekyll, irei ensinar como utilizar essa íncrivel ferramenta.
categories: beginner 
date:   2016-09-02 16:53:00
img: /assets/image/authors/mateus-medeiros.jpg
---

## Introdução
Fala galera, como prometi que escreveria um post ensinado a usar o Jekyll, decidi não escrever apenas um post, mas uma série sobre Jekyll e esse é o primeiro post da série, nesse post irei ensinar o básico dessa íncrivel ferramenta.

O Jekyll é um gerador de páginas estáticas, você consegue criar páginas utilizando o HTML e CSS, depois disso o Jekyll converte todo o site em arquivos estáticos, pronto para ser colocado no ar. Ele utiliza **Markdown** para a formatação de textos e posts, um padrão de templates chamado **Liquid** e **YAML** para as variáveis.

Se quiser saber mais sobre o Jekyll e como ele funciona, basta acessar o [site oficial](http://jekyllrb.com){:target="_blank"} (disponível em inglês), mas se você não souber inglês ou não entender muito bem, tem uma tradução ainda em andamento do site oficial sendo feita pela comunidade Jekyll Brasil, só acessar este [link](http://jekyll-brasil.github.io/){:target="_blank"}.

## Instalando o Jekyll
Para instalar o Jekyll, você precisa ter o **Ruby** instalado em sua máquina, caso você não tiver ele instalado, só seguir os tutoriais abaixo:

- [Linux](http://michaelchelen.net/81fa/install-jekyll-2-ubuntu-14-04/){:target="_blank"} (Ruby + Jekyll)
- [Windows](http://jekyll-windows.juthilo.com/){:target="_blank"} (Ruby + Jekyll)

No Mac, o Ruby já vem instalado.

Após ter instalado o Ruby em sua máquina, abra o terminal e digite o seguinte comando:

{% highlight sh %}
gem install jekyll
{% endhighlight %}

Caso você queira conferir se o Jekyll foi instalado, digite o seguinte comando no terminal:

{% highlight sh %}
jekyll -v

# Jekyll 3.2.1
{% endhighlight %}

Pronto, Jekyll instalado, vamos iniciar nosso primeiro projeto.

## Iniciando um Projeto
Para inicar um novo projeto, digite no terminal:

{% highlight sh %}
jekyll new nome-do-projeto
{% endhighlight %}

Feito isso, o Jekyll irá criar o diretório de pastas do projeto, como você pode conferir na imagem abaixo.

![Diretório de pastas do Jekyll](/assets/image/diretorio-pastas-jekyll.JPG)

## Diretório de Pastas
Como vocês puderam ver, o Jekyll cria várias pastas e arquivos, vamos entender o que cada um faz:

- **_includes**: são os arquivos com os códigos que se repetem ao longo do projeto, como o *header* e o *footer*.
- **_layouts**: é a estrutura básica das páginas, por padrão vem 3 tipos: **default** para a página inicial e listagem de posts. A **page** para as páginas secundárias e **post** para as páginas de post.
- **_posts**: são os posts que escrevemos, em geral escrevemos em [Markdown](https://daringfireball.net/projects/markdown/syntax){:target="_blank"}.
- **_sass**: são os arquivos de estilização que geram o CSS, se você trabalha com **sass**, o Jekyll já compila para você.
- **css**: pasta para onde vai os arquivos gerados pelo sass.
- **_config.yml**: arquivo de configuração do seu blog, onde você colocará os dados referentes ao seu blog.
- **about.md**: arquivo do tipo **page** escrito em **markdown**, que gerencia a página /about.
- **feed.xml**: arquivo que gera o feed do seu blog, é importante para as pessoas conseguirem facilmente seguir seu blog.
- **index.html**: a página inicial do seu blog.

## Front-Matter
O Jekyll utiliza o YAML, para guardar as informações. o Front-Matter deve ser a primeira coisa escrita no seu arquivo. As informações devem ficar entre o par de três traços `---`. A sintaxe dele é a seguinte:

{% highlight yaml %}
---
layout: post
title: Meu primeiro post com Jekyll
---
{% endhighlight %}

Colocamos a variável seguida de dois pontos e o valor dela ou conjunto de valores, por exemplo:

{% highlight yaml %}
layout: post
title: Meu primeiro post com Jekyll
date:   2016-01-13 18:00:00 -0300
author: Mateus Medeiros
description: Meu primeiro post com o gerador de páginas estáticas: Jekyll.
tags: 
- frontend
- jekyll
{% endhighlight %}

## Variáveis
No Jekyll, você pode usar variáveis pré-definidas ou criar suas próprias variáveis. Existem três tipos de variáveis: as **variáveis globais**, **variáveis do site** e **variáveis da página**. Vamos aprender algumas:

### Variáveis Globais
- **layout**: indica qual modelo de layout você irá utilizar na página, por exemplo: **post**.
- **permalink**: define como será criado o link da página.
- **category** ou **categories**: define a categoria ou conjunto de categorias para o post.
- **tags**: define o conjunto de tags utilizadas no post.

### Variáveis do Site
- **site.posts**: lista de todos os posts no site.
- **site.pages**: lista de todas as páginas no site.
- **site.tags.TAG**: lista de todos os posts daquela tag.
- **site.categories.CATEGORIA**: lista de todos os posts daquela categoria.

### Variáveis da Página
- **page.title**: título da página.
- **page.date**: data da página, com a estrutura **YYYY-MM-DD HH:MM:SS +/-TTTT**.
- **page.content**: conteúdo da página.
- **page.url**: link da página.
- **page.tags**: mostra as tags utilizadas na página.

Mais variáveis você pode encontrar na [documentação](http://jekyllrb.com/docs/variables/){:target="_blank"}.

### Utilizando as variáveis
Depois de criadas, vamos utilizar as variáveis. A sua sintaxe é igual a de *mustache*, você abre duas chaves, coloca o nome da variável e fecha as chaves, ficando assim: ``{ { variável } }``.

**Aviso**: Não existe espaço entre as chaves, coloquei pois como uso o jekyll, o exemplo não iria funcionar.

{% highlight html %}
<!-- Variável Global -->
<title> { { title } } </title>

<!-- Variável da Página -->
<time> { { page.date } } </time>

<!-- Variável do Post -->
<h1> { { post.title } } </h1>
{% endhighlight %}

## Configurando seu blog
Como falei antes o arquivo **_config.yml** é o responsável pela configuração do seu blog, agora vamos aprender como configurá-lo. Abra o arquivo **_config.yml** no seu editor preferido e vamos lá.

Abrindo o arquivo, ele estará por padrão assim:

{% highlight yaml %}
# Welcome to Jekyll!
#
# This config file is meant for settings that affect your whole blog, values
# which you are expected to set up once and rarely need to edit after that.
# For technical reasons, this file is *NOT* reloaded automatically when you use
# 'jekyll serve'. If you change this file, please restart the server process.

# Site settings
title: Your awesome title
email: your-email@domain.com
description: > # this means to ignore newlines until "baseurl:"
  Write an awesome description for your new site here. You can edit this
  line in _config.yml. It will appear in your document head meta (for
  Google search results) and in your feed.xml site description.
baseurl: "" # the subpath of your site, e.g. /blog
url: "http://yourdomain.com" # the base hostname & protocol for your site
twitter_username: jekyllrb
github_username:  jekyll

# Build settings
markdown: kramdown
{% endhighlight %}

Vamos entender o que cada variável faz:

- **title**: é o título do seu blog.
- **email**: seu email para contato, é opcional.
- **description**: é a descrição do seu blog, muito importante para **SEO**, uma boa descrição é essencial para seu posicionamento no Google.
- **baseurl**: é a subpasta do seu site, caso você queira que seu blog seja acessado por um outro endereço, como por exemplo http://seusite.com/blog
- **url**: é o domínio do seu blog, por exemplo http://seusite.com
- **twitter_username**: seu nome de usuário no Twitter, é opcional.
- **github_username**: seu nome de usuário no GitHub, também é opcional.
- **markdown**: tipo de Markdown utilizado no seu projeto.

Essas são as variáveis que já vem inclusas no jekyll. Mais opções você pode encontrar na [documentação do jekyll](http://jekyllrb.com/docs/configuration/){:target="_blank"}.

## Gerando um servidor
Vamos aprender agora como gerar um servidor para o seu ambiente de produção.

No terminal, digite o seguinte comando:

{% highlight sh %}
# Entrar na pasta do projeto
cd nome-do-projeto

# Gerar o servidor
jekyll serve
{% endhighlight %}

Com esse comando, o jekyll irá gerar um servidor - por padrão, na porta **4000** - e ficará assintindo os arquivos. Para acessar seu projeto, entre no endereço: [http://localhost:4000/](http://localhost:4000/){:target="_blank"} ou [http://127.0.0.1:4000/](http://127.0.0.1:4000/){:target="_blank"}.

## Gerando os arquivos estáticos
Terminado o desenvolvimento do projeto, você pode gerar os arquivos estáticos do seu blog com o comando:

{% highlight sh %}
jekyll build
{% endhighlight %}

Com esse comando o jekyll irá gerar a pasta **_site**, que contém os arquivos estáticos do seu blog.

## Hospedando seu blog no GitHub Pages
Com o Jekyll, você pode facimente hospedar seu blog no GitHub Pages.

1. Entre em sua conta no [GitHub](https://github.com/){:target="_blank"}, caso não tenha, [crie uma](https://github.com/join){:target="_blank"}.
2. Crie um repositório com o seguinte nome: **seunomedeusuario.github.io**
3. Suba o seu blog - exceto a pasta **_site** - para o seu repositório usando o **git**, dessa forma:

{% highlight sh %}
# Iniciar um repositório na pasta do projeto
git init

# Adicionar todos os arquivos
git add .

# Commitar os arquivos
git commit -m "Commit Inicial"

# Adicionar o repositório
git remote add origin https://github.com/seunomedeusuario/seunomedeusuario.github.io.git

# Subir o seu blog
git push -u origin master
{% endhighlight %}

Pronto, você subiu seu blog para o GitHub Pages, e agora é só esperar entre 20 e 30 minutos, e você poderá acessar seu blog através da url: http://seunomedeusuario.github.io

Se você quiser adicionar um domínio próprio no seu blog, siga [esse passo-a-passo do Willian Justen](http://willianjusten.com.br/dominio-proprio-no-github-pages/){:target="_blank"}.

## Conclusão
Esse foi o primeiro post da série sobre Jekyll, ensinado apenas o básico do Jekyll, se você quiser aprender mais detalhadamente, acesse a [documentação do Jekyll](http://jekyllrb.com/docs/home){:target="_blank"}. Em breve, pretendo lançar um passo-a-passo de como criar um blog com Jekyll, aguarde!

Qualquer dúvida que aparecer, é só comentar ou me enviar um e-mail: [mateus.sousamedeiros@gmail.com](mailto:mateus.sousamedeiros@gmail.com).

**Até a próxima!**