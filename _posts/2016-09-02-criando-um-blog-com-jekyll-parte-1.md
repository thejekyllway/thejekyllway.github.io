---
layout: post
title: "Criando um blog com Jekyll - Parte 1"
author: Mateus Medeiros
description: Primeira parte do tutorial de como criar um blog com Jekyll.
categories: beginner 
date:   2016-09-02 16:56:00
img: /assets/image/authors/mateus-medeiros.jpg
---

## Introdução

Fala galera, recebi vários feedbacks positivos do post anterior, o que me motivou ainda mais a continuar essa série sobre Jekyll. Vamos lá para esse segundo post, iremos aprender passo-a-passo como criar um blog com jekyll. Para não ficar muito longo, irei dividir esse tutorial em partes.

Nessa primeira parte, iremos configurar a pasta `_includes` e o arquivo `_config.yml`. Preparei um pequeno layout que servirá de base para a construção do nosso blog. Você pode conferir abaixo:

![Layout do nosso blog com Jekyll](/assets/image/layout-tutorial-jekyll.png)

Todo o código utilizado aqui, estará disponível no [repositório que criei no GitHub](https://github.com/mateussmedeiros/tutorial-jekyll){:target="_blank"}.

## Preparando o projeto

A primeira coisa que iremos fazer é criar a pasta do nosso blog, abra o seu terminal e digite:

{% highlight sh %}
jekyll new tutorial-jekyll
{% endhighlight %}

O nome que escolhi para a minha pasta foi **tutorial-jekyll**, você pode escolher o nome que quiser para a sua pasta.

## Gerando o servidor

Criado a pasta do nosso blog, vamos gerar um servidor para acompanharmos o andamento do desenvolvimento. Ainda no terminal digite:

{% highlight sh %}
# Entrar na pasta do blog
cd tutorial-jekyll

# Gerar o servidor
jekyll serve
{% endhighlight %}

O servidor será criado na porta **4000** por padrão, para acessar entre em [http://localhost:4000](http://localhost:4000){:target="_blank"} ou [http://127.0.0.1:4000](http://127.0.0.1:4000){:target="_blank"}.

## Configurando o blog

Vamos agora configurar o nosso blog, abra o arquivo `_config.yml` no seu editor preferido e vamos lá.

O meu arquivo `_config.yml` ficou assim:

{% highlight yaml %}
# Site settings
title: Tutorial Jekyll # Título do Blog
subtitle: Como construir um blog com Jekyll # Subtítulo do Blog, opcional
description: "Tutorial de como construir um blog com Jekyll, feito por Mateus Medeiros" # Descrição do Blog
url: "http://tutorial-jekyll.github.io" # Endereço do nosso blog

# Author Settings
author:
    name: Mateus Medeiros # Nome do autor
    img: /assets/img/perfil.jpg # Imagem do Autor
    blog: http://devmateusmedeiros.com.br # Blog do autor
    email: mateus.sousamedeiros@gmail.com # Email do autor
    twitter: mateussousam # Twitter do autor
    github:  mateussmedeiros # GitHub do autor
    bio: Desenvolvedor Front End apaixonado por novas tecnologias. Sou apaixonado pelo que faço e procuro aprender cada dia mais. # Descrição do autor

# Build settings
markdown: kramdown # Estilo do Markdown
permalink: /:categories/:title/ # Configuração dos links do blog
css_folder:  "/assets/css" # Caminho dos arquivos css
js_folder:  "/assets/js" # Caminho dos arquivos js
img_folder:  "/assets/img" # Caminho das imagens
sass:
    style: compressed # Configuração dos arquivos css gerados pelo sass, compressed gera o css minificado
{% endhighlight %}

O código já está bastante comentado, você deve trocar os valores das variáveis de acordo com as informações do seu blog.

## Configurando as pastas

Vamos agora configurar as nossas pastas. Primeiramente criaremos a pasta `assets`, dentro dela criaremos 2 pastas: `js` e `img`, também moveremos a pasta `css` para cá, ficando assim:

- **css**: onde ficará o arquivo main.scss que o **sass** irá compilar.
- **img**: onde ficarão as imagens.
- **js**: onde ficarão os arquivos JavaScript.

Feito isso, vamos configurar a pasta `_includes`.

### Pasta _includes

A nossa pasta `_includes` contém - por padrão - 7 arquivos:

- **footer.html**
- **head.html**
- **header.html**
- **icon-github.html**
- **icon-github.svg**
- **icon-twitter.html**
- **icon-twitter.svg**

Iremos manter apenas o 3 primeiros arquivos e criar outros 5 arquivos, ficando assim:

- **author.html**: é seção do autor de cada post.
- **comments.html**: é a seção de comentários nos posts.
- **footer.html**: é o footer do nosso blog.
- **head.html**: é o head do nosso blog.
- **header.html**: é o header do nosso blog, onde ficará também o nosso menu.
- **share.html**: é a seção de compartilhamento dos posts.
- **svg.html**: é o arquivo onde ficará os ícones svg.
- **tags.html**: é o arquivo onde ficará o laço **for** para listar todas as tags utilizadas no blog.

Vamos configurar agora cada um dos nossos arquivos. Irei colocar como ficou cada arquivo, ele será comentado, então darei apenas uma breve explicação de cada arquivo.

**Aviso**: Não existe espaço entre as chaves, coloquei porque uso Jekyll, então não iriam funcionar os exemplos.

#### head.html

{% highlight html %}
<head>
  	<meta charset="utf-8">
  	<meta http-equiv="X-UA-Compatible" content="IE=edge">
  	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<!-- Pega o título da página e exibe no title, se a página não tiver título, exibe o título do site -->
  	<title>{% if page.title %}{ { page.title } }{% else %}{ { site.title } }{% endif %}</title>
  	
  	<!-- Pega a descrição da página e exibe no title, se a página não tiver descrição, exibe a descrição do site -->
  	<meta name="description" content="{% if page.description %}{ { page.description | strip_html | strip_newlines | truncate: 160 } }{% else %}{ { site.description } }{% endif %}">
	
	<!-- Caminho do arquivo CSS, pode ser alterado de acordo com o projeto -->
  	<link rel="stylesheet" href="{ { "/assets/css/main.css" | prepend: site.baseurl } }">
  	<link rel="canonical" href="{ { page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url } }">
  	<!-- Caminho do Feed do blog -->
  	<link rel="alternate" type="application/rss+xml" title="{ { site.title } }" href="{ { "/feed.xml" | prepend: site.baseurl | prepend: site.url } }">
  	<!-- Caminho do favicon do blog, também pode ser alterado -->
    <link rel="shortcut icon" href="/assets/img/favicon.ico" type="image/x-icon">
	
	<!-- Social Meta Tags: Facebook | Twitter | Google+ / Já está configurado para o blog -->
  	<!-- Social: Facebook / Open Graph -->
    <meta property="og:title" content="{% if page.title %}{ { page.title } }{% else %}{ { site.title } }{% endif %}">
    <meta property="og:type" content="{% if page.date %}article{% else %}website{% endif %}">
    <meta property="og:url" content="{ { page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url } }">
    <meta property="og:image" content="{% if page.image %}{ { page.image | prepend: site.baseurl | prepend: site.url } }{% else %}{{ "/assets/img/image-blog.png" | prepend: site.baseurl | prepend: site.url }}{% endif %}">
    <meta property="og:description" content="{% if page.description %}{ { page.description | strip_html | strip_newlines | truncate: 160 } }{% else %}{ { site.description } }{% endif %}">
    <meta property="og:site_name" content="{ { site.title } }">

  	<!-- Social: Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="{ { site.author.twitter } }">
    <meta name="twitter:title" content="{% if post.title %}{ { post.title } }{% else %}{ { site.title } }{% endif %}">
    <meta name="twitter:description" content="{% if post.description %}{ { post.description | strip_html | strip_newlines | truncate: 160 } }{% else %}{ { site.description } }{% endif %}">
    <meta property="twitter:image:src" content="{ { site.url } }{ { post.image } }">

    <!-- Social: Google+ / Schema.org  -->
    <meta itemprop="name" content="{% if post.title %}{ { post.title } }{% else %}{ { site.title } }{% endif %}"/>
    <meta itemprop="description" content="{% if post.description %}{ { post.description | strip_html | strip_newlines | truncate: 160 } }{% else %}{ { site.description } }{% endif %}">
    <meta itemprop="image" content="{ { post.image | prepend: site.baseurl | prepend: site.url } }"/>

</head>
{% endhighlight %}

Esse arquivo não precisa de muita explicação, já está bem comentado. Ele já está com as **Social Meta Tags** configuradas, muito importante para o compartilhamento dos posts.

#### header.html

{% highlight html %}
<header class="header">
  <!-- Botão do Menu mobile -->
  <button aria-expanded="false" aria-controls="menu" aria-label="Clique para abrir o menu" class="bt-menu"><svg class="icon-top icon-menu"><use xlink:href="#icon-menu"></use></svg></button>
  <!-- Menu -->
  <nav class="menu">
    <ul>
      <li><a href="#"> Nav Item 1 </a></li>
      <li><a href="#"> Nav Item 2 </a></li>
      <li><a href="#"> Nav Item 3 </a></li>
      <li><a href="#"> Nav Item 4 </a></li>
    </ul>
  </nav>
  
  <!-- Botão da Pesquisa -->
  <button aria-expanded="false" aria-controls="search-container" aria-label="Pesquisar no Blog" class="bt-search"><svg class="icon-top icon-search"><use xlink:href="#icon-search"></use></svg></button>
  <!-- Container da Pesquisa -->
  <div id="search-container">
    <!-- Barra de Pesquisa -->
    <input type="text" id="search-input" placeholder="Pesquisar posts no blog...">
    <!-- Botão de fechamento do container da pesquisa -->
    <button aria-label="Fechar Barra de Pesquisa" class="bt-close"><svg class="icon-top icon-close"><use xlink:href="#icon-close"></use></svg></button>
    <!-- Lista de resultados -->
    <ul id="results-container"></ul>
  </div>

  <!-- Título do Blog -->
  <hgroup class="title">
    <!-- Título Principal -->
    <h1> <a href="/"> { { site.title } } </a> </h1>  
    <!-- Subtítulo -->
    <h2> <a href="/"> { { site.subtitle } } </a> </h2>
  </hgroup>
  
</header>

{% endhighlight %}

Esse é o arquivo do nosso **header**, nele temos:

- **Menu**: ficará no topo à esquerda alinhado com o botão da pesquisa.
- **Pesquisa**: ficará fechado, se abrirá quando clicarmos no botão. Quando aberto, irá sobrepor a página inteira. Utilizaremos o plugin [Simple Jekyll Searching](https://github.com/christian-fei/Simple-Jekyll-Search){:target="_blank"} para fazer a pesquisa dos posts.
- **Título**: ficará abaixo do menu e centralizado, utilizaremos uma sombra para destacá-lo. Nele há 2 variáveis: o `{ { site.title } }` e o `{ { site.subtitle } }`, essas variáveis foram definidas no arquivo `_config.yml`.

#### footer.html

{% highlight html %}
<footer class="footer">
  <p> &copy; 2016 { { site.title } } - { { site.subtitle } } | Todos os Direitos Reservados </p>
  <p> Tutorial por <a href="http://devmateusmedeiros.com.br" target="_blank" title="Ir para o meu blog"> Mateus Medeiros </a> </p>
</footer>
{% endhighlight %}

Utilizamos as mesmas variáveis que no `header.html`. Esse arquivo pode ser editado como você desejar.

#### share.html

{% highlight html %}
<section class="share">
	<h3> Compartilhe </h3>
    <!-- Botões de Compartilhamento -->
	<div class="share-buttons">
        <!-- Twitter -->
		<a aria-label="Compartilhe no Twitter" href="https://twitter.com/intent/tweet?text=&quot;{ { page.twitter_text } }&quot;%20{ { site.url } }{ { page.url } }%20via%20&#64;{ { site.twitter_username } }&hashtags={% for tag in page.tags %}{ {tag}},{% endfor %}"
    	onclick="window.open(this.href, 'twitter-share');return false;" title="Compartilhe no Twitter">
        	<svg class="icon icon-twitter"><use xlink:href="#icon-twitter"></use></svg>
    	</a>
        
        <!-- Facebook -->
    	<a aria-label="Compartilhe no Facebook" href="https://www.facebook.com/sharer/sharer.php?u={ { site.url } }{ { page.url } }"
    	onclick="window.open(this.href, 'facebook-share');return false;" title="Compartilhe no Facebook">
        	<svg class="icon icon-facebook"><use xlink:href="#icon-facebook"></use></svg>
    	</a>
        
        <!-- Google+ -->
    	<a aria-label="Compartilhe no Google Plus" href="https://plus.google.com/share?url={ { site.url } }{ { page.url } }"
    	onclick="window.open(this.href, 'google-plus-share');return false;" title="Compartilhe no Google+">
        	<svg class="icon icon-google-plus"><use xlink:href="#icon-google-plus"></use></svg>
    	</a>
    </div>
</section>
{% endhighlight %}

Criamos os botões de compartilhamento, utilizamos SVG para os ícones da redes sociais. Configuraremos os ícones SVG no arquivo `svg.html`.

#### author.html

{% highlight html %}
<section class="author">
	<div class="details">
		<!-- Imagem do autor -->
		<img src="{ { site.author.img } }" alt="{ { site.author.name } }" class="img-author">
		<p><b> Autor </b></p>
		<!-- Nome do autor com link para o blog do autor -->
		<h2 class="name">
			<a href="{ { site.author.blog } }" target="_blank" title="Visite meu blog"> { { site.author.name } } </a>
		</h2>
		<!-- Descrição do autor -->
		<p class="description">{ { site.author.bio } }</p>
		<!-- Email do autor -->
        <a class="email" href="mailto:{ { site.author.email } }">{  { site.author.email }  }</a>
        <!-- Twitter do autor -->
        <p> Twitter: <a href="http://twitter.com/{ { site.author.twitter } }"> @{  { site.author.twitter }  }</a></p>
        <!-- GitHub do autor -->
        <p> GitHub: <a href="http://github.com/{ { site.author.github } }"> {  { site.author.github }  }</a></p>
	</div>
</section>
{% endhighlight %}

Esse já está bastante comentado, ele puxará os valores das variáveis do autor definidas no `_config.yml`.

#### comments.html

{% highlight html %}
<!-- Utilizaremos o Disqus(disqus.com) para o sistema de comentários -->
<section class="comments">
    <h2>Comentários</h2>
    <div id="disqus_thread"></div>
</section>

<!-- Aqui vai o script fornecido pelo Disqus -->
{% endhighlight %}

Utilizaremos o Disqus para os comentários, depois irei fazer um post ensinando como implementar ele no seu blog.

#### svg.html

{% highlight html %}
<svg style="position: absolute; width: 0; height: 0;" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
<!-- Ícone do Menu -->
<symbol id="icon-menu" viewBox="0 0 1024 1024">
  <title>menu</title>
  <path class="path1" d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"></path>
</symbol>
<!-- Ícone de Fechamento -->
<symbol id="icon-close" viewBox="0 0 1024 1024">
  <title>close</title>
  <path class="path1" d="M1014.662 822.66c-0.004-0.004-0.008-0.008-0.012-0.010l-310.644-310.65 310.644-310.65c0.004-0.004 0.008-0.006 0.012-0.010 3.344-3.346 5.762-7.254 7.312-11.416 4.246-11.376 1.824-24.682-7.324-33.83l-146.746-146.746c-9.148-9.146-22.45-11.566-33.828-7.32-4.16 1.55-8.070 3.968-11.418 7.31 0 0.004-0.004 0.006-0.008 0.010l-310.648 310.652-310.648-310.65c-0.004-0.004-0.006-0.006-0.010-0.010-3.346-3.342-7.254-5.76-11.414-7.31-11.38-4.248-24.682-1.826-33.83 7.32l-146.748 146.748c-9.148 9.148-11.568 22.452-7.322 33.828 1.552 4.16 3.97 8.072 7.312 11.416 0.004 0.002 0.006 0.006 0.010 0.010l310.65 310.648-310.65 310.652c-0.002 0.004-0.006 0.006-0.008 0.010-3.342 3.346-5.76 7.254-7.314 11.414-4.248 11.376-1.826 24.682 7.322 33.83l146.748 146.746c9.15 9.148 22.452 11.568 33.83 7.322 4.16-1.552 8.070-3.97 11.416-7.312 0.002-0.004 0.006-0.006 0.010-0.010l310.648-310.65 310.648 310.65c0.004 0.002 0.008 0.006 0.012 0.008 3.348 3.344 7.254 5.762 11.414 7.314 11.378 4.246 24.684 1.826 33.828-7.322l146.746-146.748c9.148-9.148 11.57-22.454 7.324-33.83-1.552-4.16-3.97-8.068-7.314-11.414z"></path>
</symbol>
<!-- Ícone do Email -->
<symbol id="icon-email" viewBox="0 0 1024 1024">
  <title>email</title>
  <path class="path1" d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM256 256h512c9.138 0 18.004 1.962 26.144 5.662l-282.144 329.168-282.144-329.17c8.14-3.696 17.006-5.66 26.144-5.66zM192 704v-384c0-1.34 0.056-2.672 0.14-4l187.664 218.942-185.598 185.598c-1.444-5.336-2.206-10.886-2.206-16.54zM768 768h-512c-5.654 0-11.202-0.762-16.54-2.208l182.118-182.118 90.422 105.498 90.424-105.494 182.116 182.12c-5.34 1.44-10.886 2.202-16.54 2.202zM832 704c0 5.654-0.762 11.2-2.206 16.54l-185.6-185.598 187.666-218.942c0.084 1.328 0.14 2.66 0.14 4v384z"></path>
</symbol>
<!-- Ícone do Facebook -->
<symbol id="icon-facebook" viewBox="0 0 1024 1024">
  <title>facebook</title>
  <path class="path1" d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512v-384h-128v-128h128v-96c0-88.366 71.632-160 160-160h160v128h-160c-17.674 0-32 14.328-32 32v96h176l-32 128h-144v367.87c220.828-56.838 384-257.3 384-495.87 0-282.77-229.23-512-512-512z"></path>
</symbol>
<!-- Ícone do Twitter -->
<symbol id="icon-twitter" viewBox="0 0 1024 1024">
  <title>twitter</title>
  <path class="path1" d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM766.478 381.48c0.252 5.632 0.38 11.296 0.38 16.988 0 173.51-132.070 373.588-373.584 373.588-74.15 0-143.168-21.738-201.276-58.996 10.272 1.218 20.724 1.84 31.322 1.84 61.518 0 118.134-20.992 163.072-56.21-57.458-1.054-105.948-39.020-122.658-91.184 8.018 1.532 16.244 2.36 24.704 2.36 11.976 0 23.578-1.61 34.592-4.61-60.064-12.066-105.326-65.132-105.326-128.75 0-0.554 0-1.104 0.012-1.652 17.7 9.834 37.948 15.742 59.47 16.424-35.232-23.546-58.414-63.736-58.414-109.292 0-24.064 6.476-46.62 17.78-66.010 64.76 79.44 161.51 131.712 270.634 137.19-2.238-9.612-3.4-19.632-3.4-29.924 0-72.512 58.792-131.298 131.304-131.298 37.766 0 71.892 15.944 95.842 41.462 29.908-5.886 58.008-16.814 83.38-31.862-9.804 30.662-30.624 56.394-57.732 72.644 26.56-3.174 51.866-10.232 75.412-20.674-17.594 26.328-39.854 49.454-65.514 67.966z"></path>
</symbol>
<!-- Ícone do Google+ -->
<symbol id="icon-google-plus" viewBox="0 0 1024 1024">
	<title>google-plus</title>
	<path class="path1" d="M437.006 818.162c0 75.068-46.39 134.392-177.758 139.176-76.984-43.786-141.49-106.952-186.908-182.866 23.69-58.496 97.692-103.046 182.316-102.114 24.022 0.252 46.41 4.114 66.744 10.7 55.908 38.866 101 63.152 112.324 107.448 2.114 8.964 3.282 18.206 3.282 27.656zM512 0c-147.94 0-281.196 62.77-374.666 163.098 36.934-20.452 80.538-32.638 126.902-32.638 67.068 0 256.438 0 256.438 0l-57.304 60.14h-67.31c47.496 27.212 72.752 83.248 72.752 145.012 0 56.692-31.416 102.38-75.78 137.058-43.28 33.802-51.492 47.966-51.492 76.734 0 24.542 51.722 61.098 75.5 78.936 82.818 62.112 99.578 101.184 99.578 178.87 0 78.726-68.936 157.104-185.866 183.742 56.348 21.338 117.426 33.048 181.248 33.048 282.77 0 512-229.23 512-512s-229.23-512-512-512zM768 384v128h-64v-128h-128v-64h128v-128h64v128h128v64h-128zM365.768 339.472c11.922 90.776-27.846 149.19-96.934 147.134-69.126-2.082-134.806-65.492-146.74-156.242-11.928-90.788 34.418-160.254 103.53-158.196 69.090 2.074 128.22 76.542 140.144 167.304zM220.886 642.068c-74.68 0-138.128 25.768-182.842 63.864-24.502-59.82-38.044-125.29-38.044-193.932 0-56.766 9.256-111.368 26.312-162.396 7.374 99.442 77.352 176.192 192.97 176.192 8.514 0 16.764-0.442 24.874-1.022-7.95 15.23-13.622 32.19-13.622 49.982 0 29.97 16.488 47.070 36.868 66.894-15.402 0-30.27 0.418-46.516 0.418z"></path>
</symbol>
<!-- Ícone da Pesquisa -->
<symbol id="icon-search" viewBox="0 0 1024 1024">
  <title>search</title>
  <path class="path1" d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"></path>
</symbol>
</defs>
</svg>
{% endhighlight %}

Criamos os nossos ícones SVG, iremos estilizá-los depois com o **SASS**.


#### tags.html

{% highlight html %}
<div class="tags">
  <!-- Procura as tags já utilizadas e monta uma lista com os links de todas elas -->
  <!-- Não existe espaço entre {} e % -->
  { % for tag in post.tags % }
      <a href="/tags/#{{tag}}">{{ tag }}</a>
  { % endfor % }
</div>
{% endhighlight %}

Criamos um laço for, que irá procurar todas as tags já utilizadas no blog e irá montar uma lista de posts de cada tag encontrada.

## Conclusão

Essa foi a primeira parte do tutorial, já temos pronto a configuração do nosso blog e a nossa pasta `_includes`. Na próxima parte, iremos configurar a pasta `_layouts` e o arquivo `index.html`, que é a página inicial do nosso blog.

Qualquer dúvida, é só comentar ou me enviar um email: [mateus.sousamedeiros@gmail.com](mailto:mateus.sousamedeiros@gmail.com)

Lembrando que todo o código utilizado aqui, está disponível no [GitHub](https://github.com/mateussmedeiros/tutorial-jekyll){:target="_blank"}.

**Até a próxima parte!**