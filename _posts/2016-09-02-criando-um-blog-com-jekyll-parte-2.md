---
layout: post
title: "Criando um blog com Jekyll - Parte 2"
author: Mateus Medeiros
description: Segunda parte do tutorial de como criar um blog com Jekyll.
categories: beginner 
date: 2016-09-02 16:56:30
img: /assets/image/authors/mateus-medeiros.jpg
---

## Introdução

Dando continuidade ao tutorial de como criar um blog com Jekyll, hoje vamos configurar a pasta `_layouts` e a página inicial do blog, o arquivo `index.html`. Você pode acompanhar o andamento do nosso tutorial no [GitHub](https://github.com/mateussmedeiros/tutorial-jekyll){:target="_blank"}. Se você ainda não viu a primeira parte, corre lá e depois volta aqui: 

- [Parte 1](http://thejekyllway.github.io/beginner/2016/09/02/criando-um-blog-com-jekyll-parte-1.html){:target="_blank"}.

## Pasta _layouts

Na pasta `_layouts`, tem - por padrão - 3 arquivos:

- **default.html**: estrutura padrão das páginas.
- **page.html**: estrutura de páginas secundárias.
- **post.html**: estrutura dos posts.

Nós iremos manter todas elas, vamos agora editá-las. Lembrando que **não existe** espaço entre as chaves.

### default.html

{% highlight html %}
<!DOCTYPE html>
<html>
  <!-- Incui o arquivo head.html -->
  { % include head.html % }

  <body>
    <!-- Inclui o arquivo header.html -->
    { % include header.html % }

    <div class="page-content">
      <!-- Inclui o conteúdo da página -->
      { { content } }
    </div>

    <!-- Inclui o arquivo footer.html -->
    { % include footer.html % }

  </body>

</html>
{% endhighlight %}

Nós mantemos a maior parte do arquivo, apenas retiramos o **wrapper** da página. Aqui estamos incluindo os arquivos `head.html`, `header.html` e `footer.html` que estão na pasta `_includes` que configuramos na [parte anterior](http://devmateusmedeiros.com.br/criando-um-blog-com-jekyll-parte-1/){:target="_blank"}.

### page.html

{% highlight html %}
---
layout: default
---
<article class="post">
	<!-- Chamamos o título da página -->
	<h1 class="post-title">{ { page.title } }</h1>
	
	<!-- Incluimos o conteúdo da página -->
	<div class="post-content">
  		{ { content } }
	</div>

</article>
{% endhighlight %}

Incluimos a estrutura do arquivo `default.html`, e colocamos uma estrutura simples com apenas o título e o conteúdo da página.

## post.html 

{% highlight html %}
---
layout: default
---
<article class="post" itemscope itemtype="http://schema.org/BlogPosting">
  <!-- Chamamos o título do post -->
  <h1 class="post-title" itemprop="name headline">{ { page.title } }</h1>
  <!-- Incluimos a data e o autor do post -->
  <p class="post-meta"><time datetime="{ { page.date | date_to_xmlschema } }" itemprop="datePublished">{ { page.date | date: "%-d %b, %Y" } }</time>{ % if page.author % } | <span itemprop="author" itemscope itemtype="http://schema.org/Person"><span itemprop="name">{ { page.author } }</span></span>{ % endif % }</p>
  
  <!-- Icluimos o conteúdo do post -->
  <div class="post-content" itemprop="articleBody">
    { { content } }
  </div>

  <!-- Incluimos os botões de compartilhamento -->
  { % include share.html % }

  <!-- Incluimos a seção com o autor do post -->
  { % include author.html % }

  <!-- Incluimos os comentários -->
  { % include comments.html % }

</article>
{% endhighlight %}

Aqui também incluimos o arquivo `default.html`, abaixo do título incluimos a **data** e o **autor** do post. Depois do conteúdo, incluimos os arquivos que criamos na [parte anterior](http://devmateusmedeiros.com.br/criando-um-blog-com-jekyll-parte-1/){:target="_blank"}: `share.html`, `author.html` e `comments.html`.

## Página inicial do blog: index.html

Terminamos as estruturas dos layouts, agora vamos editar nossa página inicial. Ela ficou assim:

{% highlight html %}
---
layout: default
---

<div class="home">

  <ul class="post-list">
    <!-- Procura os posts no blog e lista eles -->
    { % for post in site.posts % }
      <li>
        <!-- Inclui o título com link do post -->
        <h2>
          <a class="post-link" href="{ { post.url | prepend: site.baseurl } }">{ { post.title } }</a>
        </h2>

        <!-- Inclui a data e autor do post -->
        <span class="post-meta">{ { post.date | date: "%-d %b, %Y" } } { % if page.author % } | { { page.author } } { % endif % }</span>

        <!-- Inclui a descrição do post -->
        <p class="post-description">{ { post.description } }</p>
        
        <!-- Inclui um Leia mais com o link do post -->
        <a href="{ { post.permalink | prepend: site.baseurl } }"> Leia mais sobre { { post.title } }...</a>
        
        <!-- Inclui as tags do post -->
        { % include tags.html % }
      </li>

      <hr>
    { % endfor % }
  </ul>
  
  <!-- Incrição do feed -->
  <p class="rss-subscribe"> Inscreva-se <a href="{ { "/feed.xml" | prepend: site.baseurl } }">via RSS</a></p>

</div>
{% endhighlight %}

Listamos os posts com:

- **Título**
- **Data** e **autor** do post
- **Descrição** do post
- **Leia mais** com o link do post
- **Tags** do post

No final da página, tem um link para subscrição do **feed** do blog.

## Conclusão

Chegamos ao final da segunda parte, configuramos a pasta `_layouts` e a página inicial do blog. Até agora já temos prontos as pastas: `_includes` e `_layouts` e os arquivos: `_config.yml` e `index.html`. Na próxima parte vamos editar nosso **CSS**, adicionar **JavaScript** e aprender a escrever posts.

Dúvida? Comente!

**Até a próxima!**