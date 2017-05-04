---
layout: post
title: "Criando um blog com Jekyll - Parte 3"
author: Mateus Medeiros
description: Terceira parte do tutorial de como criar um blog com Jekyll.
categories: beginner 
date:   2016-09-02 16:58:00
img: /assets/image/authors/mateus-medeiros.jpg
---

## Introdução

Fala galera, hoje daremos continuidade ao tutorial de como criar um blog com Jekyll. Nessa parte, vamos adicionar o nosso **CSS** utilizando o **SASS**, também vamos adicionar **JavaScript** (incluindo o plugin de pesquisa) e corrigir alguns erros nos arquivos. Deixarei a parte de escrever posts para a parte final junto com a parte de adicionar páginas.

Se você ainda não leu as outras partes, leia e depois volte aqui:

- [Parte 1](http://thejekyllway.github.io/beginner/2016/09/02/criando-um-blog-com-jekyll-parte-1.html){:target="_blank"}.
- [Parte 2](http://thejekyllway.github.io/beginner/2016/09/02/criando-um-blog-com-jekyll-parte-2.html){:target="_blank"}.

Agora, vamos lá!

## Estilizando o blog com SASS

Vamos começar pelo **SASS**, primeiramente você deve ter ele instalado em sua máquina, se você não tem veja como instalar [aqui](http://tableless.com.br/instalando-sass-na-maquina-video/){:target="_blank"}.

Depois de instalado, vamos começar a estilizar. Abra o arquivo `main.scss`, que está na pasta `css`, que se encontra dentro da pasta `assets`. O arquivo ficou assim:

{% highlight sass %}
---
# Only the main Sass file needs front matter (the dashes are enough)
---
@charset "utf-8";

/*-------------------------
---- Fontes importadas ----
-------------------------*/
// Open Sans
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700); 

/*-----------------
---- Variáveis ----
-----------------*/
// Fontes
$fonte-padrao: 'Open Sans', Arial, sans-serif;

// Cores
$azul: #3498db;
$azul-escuro: #1f74bf;
$branco: #fff;
$preto: #3c3c3c;

// Breakpoints
$bp-celular: 600px;
$bp-tablet: 800px;


/*--------------------
---- Placeholders ----
--------------------*/
%margins {
    margin: 1em 0;
}

/*--------------
---- Mixins ----
--------------*/
@mixin media-query($device) {
    @media screen and (max-width: $device) {
        @content;
    }
}

/*--------------------------------
---- Arquivos SASS importados ----
--------------------------------*/
@import
        "base",
        "layout",
        "syntax-highlighting",
        "responsive"
;
{% endhighlight %}

Aqui definimos as variáveis que utilizaremos durante a estilização, criamos um **placeholder** para o tamanho das margens, também criamos um **mixin** para as nossas **media queries**. No final fazemos a importação dos arquivos que estão na pasta `_sass`.

Depois disso, abra a pasta `_sass`, dentro dela tem 3 arquivos:

- _base.scss
- _layout.scss
- _syntax-highlighting.scss

Iremos adicionar um novo arquivo: `_responsive.scss`, que será o arquivo responsável pela estilização para dispositivos móveis.

### _base.scss

{% highlight sass%}
/*-------------
---- Reset ----
-------------*/
*, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

button {
    padding: 0;
    background: none;
    border: 0;
    overflow: visible;
}

/*------------
---- Body ----
------------*/
body {
    font-family: $fonte-padrao;
    color: $preto; 
}

/*------------------
---- Tipografia ----
------------------*/
h1 {
    font-size: 24pt;
    line-height: 28pt;
}

h2 {
    font-size: 20pt;
    line-height: 24pt;
}

h3 {
    font-size: 16pt;
    line-height: 20pt;
}

h4 {
    font-size: 14pt;
    line-height: 16pt;
}

h5 {
    font-size: 12pt;
    line-height: 14pt;
}

h6 {
    font-size: 10pt;
    line-height: 12pt;
}

p, a, li {
    font-size: 14pt;
    line-height: 18pt;
}

p {
    @extend %margins;
}

h4, h5, h6 {
    text-transform: uppercase;
}

/*-------------
---- Links ----
-------------*/
a {
    color: $azul;

    &:hover {
        color: $azul-escuro;
    }
}

/*--------------
---- Listas ----
--------------*/
ul {
    list-style: disc;
}

ul, ol {
    padding-left: 20px;

    li {
        padding: 5px 0;
    }
}

/*---------------
---- Imagens ----
---------------*/
img {
    max-width: 100%;
    vertical-align: middle;
}

figure > img {
    display: block;
}

.center {
  display: block;
  margin: 0 auto;
}

.right {
  float: right;
}

.left {
  float: left;
}

/*-------------------
---- Blockquotes ----
-------------------*/
blockquote {
    border-left: 4px solid $azul;
    font-size: 16pt;
    letter-spacing: -1px;
    font-style: italic;

    > :last-child {
        margin-bottom: 0;
    }
}
{% endhighlight %}

Aqui temos a base do estilo do blog, primeiro fazemos um **reset**, depois estilizamos a **tipografia**, **links**, **listas**, **imagens** e o **blockquotes**.

### _layout.scss

{% highlight sass %}
/*-----------------------
---- Header | Footer ----
-----------------------*/
.header {
    a {
        text-decoration: none;
    }
}

.footer {
    color: $branco;
    text-shadow: 0px 2px 0px rgba(31, 116, 191, 1);

    a {
        color: $branco;
    }

    p {
        margin: 0;
    }
}

.header, .footer {
    padding: 15px;
    background: $azul;
    text-align: center;
}

/*-------------------
---- Título Site ----
-------------------*/
.title {
    clear: both;
    padding: 20px 0;
    
    a {
        color: $branco;
        text-shadow: 0px 5px 0px rgba(31, 116, 191, 1);
    }

    h1 a {
        font-size: 32pt;
        line-height: 42pt;
        text-transform: uppercase;
    }

    h2 a {
        font-size: 24pt;
        line-height: 34pt;
    }
}

/*------------
---- Menu ----
------------*/
.bt-menu {
    display: none;
    float: left;
}

.menu {
    li {
        float: left;
        margin: 0 15px 0 0;
        list-style: none;

        &:last-child {
            margin-right: none;
        }
    }

    a {
        font-size: 16pt;
        color: $branco;

        &:hover {
            text-decoration: underline;
        }
    }
}

/*----------------
---- Pesquisa ----
----------------*/
.bt-search {
    float: right;
}

#search-container {
    display: none;
    top: 0;
    left: 0;
    padding: 10px;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.8);

    input[type=text]{
        width: 400px;
        height: 30px;
        margin: 10px auto;
        background: transparent;
        border: 0;
        border-bottom: 1px solid $branco;
        outline: 0;
        text-align: center;
        font-size: 16pt;
        color: $branco;
    }

    ::-webkit-input-placeholder{
        color: $branco;
    }

    :-ms-input-placeholder {
        color: $branco;
    }

    ::-ms-input-placeholder {
        color: $branco;
    }

    ::-moz-placeholder {
        color: $branco;
    }

    a {
        display: block;
        margin: 10px;
        color: $branco;

        &:hover {
            color: $azul;
            text-decoration: underline;
        }
    }
}  

/*------------------
---- Ícones SVG ----
------------------*/
.icon-top {
    width: 25px;
    height: 25px;
    fill: $branco;
    cursor: pointer;
}

.icon {
  width: 40px;
  height: 40px;
  margin: 5px;
  display: inline-block;
  fill: $azul;
}

/*---------------------
---- Página | Post ----
---------------------*/
.home {
    text-align: center;
}

.page-content {
    display: block;
    padding: 35px 30px;
}

.post-content {
    h2, h3, h4, h5, h6 {
        margin: 20px 0;
    }
}

.post-list {
    list-style: none;
}

.page-title,
.post-title {
  border-bottom: 1px solid $preto;
  padding: 5px 0;
}

.post-meta {
  font-size: 10pt;
  line-height: 16pt;
}

.post-link {
  text-decoration: none;
  font-size: 24pt;
  line-height: 28pt;
}

.tags {
  margin-top: 1em;

  a {
    border-right: 1px solid $azul;
    padding: 0 5px;

    &:last-child {
        border-right: none;
    }
  }
}

/*-------------
---- Autor ----
-------------*/
.img-author {
  width: 150px;
  height: 150px;
  float: left;
  margin-right: 20px;
  border-radius: 100%;
  border: 3px solid $azul;
}

.author {
  background: darken($branco, 5%);
  padding: 15px;
  @extend %margins;

  .details {
    @extend %margins;
  }

  .name a {
    font-size: 18pt;
    text-decoration: none;
  }
}

/*------------------------------------------------
---- Botões de Compartilhamento | Comentários ----
------------------------------------------------*/
.share, .comments {
  text-align: center;
  border-top: 1px solid $preto;
  padding: 10px;
}

.share {
  a {
    text-decoration: none;
  }

  .icon {
    margin-top: 10px;
    
    &:hover {
      fill: darken($azul, 15%);
    }
  }
}
{% endhighlight %}

Esse é o arquivo responsável pela estrutura do layout. Você pode estilizar do jeito que quiser, fiz conforme o layout que mostrei na [primeira parte do tutorial](http://devmateusmedeiros.com.br/criando-um-blog-com-jekyll-parte-1/){:target="_blank"}.

### _responsive.scss 

{% highlight sass %}
@include media-query($bp-tablet) {
	/*------------
	---- Menu ----
	------------*/
	.bt-menu {
		display: block;
	}

    .menu {
    	display: none;
    	clear: both;

    	li {
        	float: none;
        	display: block;
        	margin: 0;
        	padding: 10px;
        	border-bottom: 1px solid $branco;

        	&:last-child {
            	border-bottom: none;
        	}
    	}
	}
}

@include media-query($bp-celular) {
	/*-------------------
	---- Título Site ----
	-------------------*/
	.title {
    	h1 a {
        	font-size: 24pt;
        	line-height: 32pt;
        	text-transform: capitalize;
    	}

    	h2 a {
        	font-size: 16pt;
        	line-height: 24pt;
    	}
	}
	
	/*---------------------
	---- Página | Post ----
	---------------------*/
	.page-content {
  		padding: 25px 20px;
	}


	.post-list, .post-container {
  		padding: 0;
	}
	
	/*----------------
	---- Pesquisa ----
	----------------*/
	#search-container {

  		input[type=text]{
    		width: 80%;
  		}
	}

	/*-------------
	---- Autor ----
	-------------*/
	.author {
		text-align: center;

		.email {
			font-size: 12pt;
		}
	}

	.img-author {
		float: none;
		display: block;
		margin: 0 auto;
	}
}
{% endhighlight %}

Adaptamos o layout para os dispositivos móveis, incluimos os mixins que criamos no `main.scss` com os breakpoints que definimos também lá.

### _syntax-highlighting.scss

{% highlight sass %}
/*--------------
---- Código ----
--------------*/
pre,
code {
    font-size: 15px;
    border: 1px solid $azul;
    border-radius: 3px;
    background: #272822;
}

code {
    padding: 1px 5px;
    color: $branco;
}

pre {
    padding: 8px 12px;
    overflow-x: auto;

    > code {
        border: 0;
        padding-right: 0;
        padding-left: 0;
    }
}

/*----------------------------------
---- Syntax highlighting styles ----
----------------------------------*/
.highlight {
    background: #272822;

    .highlighter-rouge & {
      background: #272822;
    }

    .c { color: #75715e } /* Comment */
    .err { color: #960050; background-color: #1e0010 } /* Error */
    .k { color: #66d9ef } /* Keyword */
    .l { color: #ae81ff } /* Literal */
    .n { color: #f8f8f2 } /* Name */
    .o { color: #f92672 } /* Operator */
    .p { color: #f8f8f2 } /* Punctuation */
    .cm { color: #75715e } /* Comment.Multiline */
    .cp { color: #75715e } /* Comment.Preproc */
    .c1 { color: #75715e } /* Comment.Single */
    .cs { color: #75715e } /* Comment.Special */
    .ge { font-style: italic } /* Generic.Emph */
    .gs { font-weight: bold } /* Generic.Strong */
    .kc { color: #66d9ef } /* Keyword.Constant */
    .kd { color: #66d9ef } /* Keyword.Declaration */
    .kn { color: #f92672 } /* Keyword.Namespace */
    .kp { color: #66d9ef } /* Keyword.Pseudo */
    .kr { color: #66d9ef } /* Keyword.Reserved */
    .kt { color: #66d9ef } /* Keyword.Type */
    .ld { color: #e6db74 } /* Literal.Date */
    .m { color: #ae81ff } /* Literal.Number */
    .s { color: #e6db74 } /* Literal.String */
    .na { color: #a6e22e } /* Name.Attribute */
    .nb { color: #f8f8f2 } /* Name.Builtin */
    .nc { color: #a6e22e } /* Name.Class */
    .no { color: #66d9ef } /* Name.Constant */
    .nd { color: #a6e22e } /* Name.Decorator */
    .ni { color: #f8f8f2 } /* Name.Entity */
    .ne { color: #a6e22e } /* Name.Exception */
    .nf { color: #a6e22e } /* Name.Function */
    .nl { color: #f8f8f2 } /* Name.Label */
    .nn { color: #f8f8f2 } /* Name.Namespace */
    .nx { color: #a6e22e } /* Name.Other */
    .py { color: #f8f8f2 } /* Name.Property */
    .nt { color: #f92672 } /* Name.Tag */
    .nv { color: #f8f8f2 } /* Name.Variable */
    .ow { color: #f92672 } /* Operator.Word */
    .w { color: #f8f8f2 } /* Text.Whitespace */
    .mf { color: #ae81ff } /* Literal.Number.Float */
    .mh { color: #ae81ff } /* Literal.Number.Hex */
    .mi { color: #ae81ff } /* Literal.Number.Integer */
    .mo { color: #ae81ff } /* Literal.Number.Oct */
    .sb { color: #e6db74 } /* Literal.String.Backtick */
    .sc { color: #e6db74 } /* Literal.String.Char */
    .sd { color: #e6db74 } /* Literal.String.Doc */
    .s2 { color: #e6db74 } /* Literal.String.Double */
    .se { color: #ae81ff } /* Literal.String.Escape */
    .sh { color: #e6db74 } /* Literal.String.Heredoc */
    .si { color: #e6db74 } /* Literal.String.Interpol */
    .sx { color: #e6db74 } /* Literal.String.Other */
    .sr { color: #e6db74 } /* Literal.String.Regex */
    .s1 { color: #e6db74 } /* Literal.String.Single */
    .ss { color: #e6db74 } /* Literal.String.Symbol */
    .bp { color: #f8f8f2 } /* Name.Builtin.Pseudo */
    .vc { color: #f8f8f2 } /* Name.Variable.Class */
    .vg { color: #f8f8f2 } /* Name.Variable.Global */
    .vi { color: #f8f8f2 } /* Name.Variable.Instance */
    .il { color: #ae81ff } /* Literal.Number.Integer.Long */

    .gh { } /* Generic Heading & Diff Header */
    .gu { color: #75715e; } /* Generic.Subheading & Diff Unified/Comment? */
    .gd { color: #f92672; } /* Generic.Deleted & Diff Deleted */
    .gi { color: #a6e22e; } /* Generic.Inserted & Diff Inserted */
}

{% endhighlight %}

Por fim, estilizamos os **highlights** do blog, utilizei o mesmo que uso no [meu blog](http://devmateusmedeiros.com.br){:target="_blank"}. E terminamos a estilização, vamos agora adicionar **JavaScript**.

## Adicionando JavaScript

Primeira coisa que iremos fazer é instalar o **Bower** para gerenciar as dependências do blog. Para instalar ele, você deve já ter instalado em sua máquina o **Node.js**, **npm** e **Git**. Com eles já instalados, digite no terminal:

{% highlight sh %}
npm install -g bower
{% endhighlight %}

Para verificar se ele foi instalado com sucesso, digite:

{% highlight sh %}
bower -v
# 1.6.8
{% endhighlight %}

Antes de instalar as dependências que iremos utilizar no blog, precisamos listá-las. Para isso digite o comando `bower init`. Ele irá nos fazer algumas perguntas, responda com as informações do seu blog (nem todas as perguntas precisam ser respondidas). Feito isso o bower irá criar o arquivo `bower.json`, você pode editá-lo como quiser.

Agora vamos instalar 2 dependências: o **jquery** e o **Simple Jekyll Search**. Para instalar e já listá-las no arquivo `bower.json`, digite o comando:

{% highlight sh %}
# Instalar o Simple Jekyll Search
bower install --save simple-jekyll-search

# Instalar o jQuery
bower install --save jquery
{% endhighlight %}

Vamos mudar o diretório das nossas dependências, ele ficará no seguinte caminho: `/assets/components/`. Para isso crie um arquivo chamado `.bowerrc` e nele adicione:

{% highlight json %}
{
    "directory" : "assets/components"
}
{% endhighlight %}

Feito isso, exclua a pasta `bower_components`.

No final, depois de editado, o meu arquivo `bower.json` ficou assim:

{% highlight json %}
{
  "name": "Tutorial Jekyll",
  "homepage": "https://github.com/mateussmedeiros/tutorial-jekyll",
  "authors": [
    "Mateus Medeiros <mateusdesousamedeiros@hotmail.com>"
  ],
  "description": "Tutorial de como construir um blog com Jekyll",
  "license": "MIT",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ],
  "dependencies": {
    "simple-jekyll-search": "latest",
    "jquery": "latest"
  }
}
{% endhighlight %}

Pronto, instalamos o **jQuery** e o **Simple Jekyll Search**. Agora vamos implementá-los.

### Implementando a Pesquisa

Primeiramente, crie o arquivo `search.json`, e digite isso:

{% highlight json %}
---
---
[
  {% raw %}
  {% for post in site.posts %}
    {
      "title"    : "{{ post.title | escape }}",
      "category" : "{{ post.category }}",
      "tags"     : "{{ post.tags | join: ', ' }}",
      "url"      : "{{ site.baseurl }}{{ post.url }}",
      "date"     : "{{ post.date }}"
    } {% unless forloop.last %},{% endunless %}
  {% endfor %}
  {% endraw %}
]
{% endhighlight %}

Depois dentro da pasta `assets/js`, crie um arquivo `script.js` e digite:

{% highlight js %}
// Abrir e Fechar - Barra de Pesquisa
$(".bt-search").click(function() {
	$("#search-container").show();

	if ( $("#search-container").is(":visible") ) {
		$(".bt-search").attr('aria-expanded', 'true');
	}
});

$(".bt-close").click(function() {
	$("#search-container").hide();

	if ( $("#search-container").is(":hidden") ) {
		$(".bt-search").attr('aria-expanded', 'false');
	}
});

// Simple Jekyll Search
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
  noResultsText: 'Sem resultados'
})
{% endhighlight %}

Primeiro criamos a função que abre e fecha a barra de pesquisa e depois implementamos o plugin Simple Jekyll Search.

### Abrindo e fechando o Menu 

Ainda no arquivo `script.js`, adicione isso:

{% highlight js %}
// Abrir e Fechar - Menu
$(".bt-menu").click(function() {
	$(".menu").toggle();

	if ( $(".menu").is(":visible") ) {
		$(".bt-menu").attr('aria-expanded', 'true');

	} else {
		$(".bt-menu").attr('aria-expanded', 'false');
	};
});

// Retirar o estilo com o redimensionamento da tela
$(window).resize(function(){
	if(window.innerWidth > 800) {
		$(".menu").removeAttr("style");
		$("#search-container").removeAttr("style");
	}
});
{% endhighlight %}

Primeiro criamos a função que abre e fecha o menu e depois corrigimos um bug que é gerado quando redimensionamos a tela.

### Chamando os arquivos js

Já configuramos o nosso JavaScript, agora vamos chamar os arquivos. Para isso abra o arquivo `footer.html` e adicione as seguintes linhas:

{% highlight html %}
<script src="/assets/components/jquery/dist/jquery.min.js"></script>
<script src="/assets/components/simple-jekyll-search/dest/jekyll-search.js"></script>
<script src="/assets/js/script.js"></script>
{% endhighlight %}

Pronto, agora nosso JavaScript já está funcionando corretamente!

## Corrigindo erros no arquivos

Se você acessar o blog, vai perceber que os ícones SVG não estão aparecendo. Isso acontece porque não chamamos o arquivo `svg.html` no nosso `head.html`, para corrigir isso adicione `{% raw %}{% include svg.html %}{% endraw %}` no arquivo `head.html` e pronto, está corrigido!

## Conclusão 

Adicionamos **CSS** e **JavaScript** ao blog, agora ele já está praticamente pronto. Na próxima e última parte desse tutorial, irei ensinar como escrever **posts** e adicionar **páginas** ao blog, também iremos subir ele para o GitHub. **Aguarde!**

Dúvidas? **Comente!**