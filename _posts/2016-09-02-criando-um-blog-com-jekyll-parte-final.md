---
layout: post
title: "Criando um blog com Jekyll - Parte Final"
author: Mateus Medeiros
description: Parte final do tutorial de como criar um blog com Jekyll.
categories: beginner 
date:   2016-09-02 16:59:00
img: /assets/image/authors/mateus-medeiros.jpg
---

## Introdução

Fala galera, chegamos à última parte desse tutorial de Jekyll, hoje irei ensinar como escrever **posts**, adicionar **páginas** e também subiremos ele para o **GitHub**. Vamos lá!

## Como escrever posts

Escrever posts no Jekyll é fácil, eles ficam na pasta `_posts` e são escritos em [Markdown](https://daringfireball.net/projects/markdown/syntax){:target="_blank"}. O nome do arquivo deve ser escrito da seguinte forma: `YYYY-MM-DD-nome-do-post.markdown`.

Cada arquivo no ínicio deve ter o **Front-Matter**. As informações devem ficar entre o par de três traços `---`. A sintaxe dele é a seguinte:

{% highlight yaml %}
---
layout: post
title: Meu primeiro post com Jekyll
date: 2016-01-24 17:22:00 -0300
author: Mateus Medeiros
description: Meu primeiro post com Jekyll.
tags: 
- jekyll
categories:
- Jekyll
permalink: /meu-primeiro-post-com-jekyll/
---
{% endhighlight %}

Agora vamos escrever o <del>primeiro</del> post do nosso blog.

## Escrevendo nosso primeiro post

Na pasta `_posts`, crie o arquivo `2016-01-24-meu-primeiro-post-com-jekyll.markdown`. No ínicio do arquivo adicione o **Front-Matter** com as informações do post:

{% highlight yaml %}
---
layout: post
title: Meu primeiro post com Jekyll
date: 2016-01-24 17:22:00 -0300
author: Mateus Medeiros
description: Meu primeiro post com Jekyll.
tags: 
- jekyll
categories:
- Jekyll
permalink: /meu-primeiro-post-com-jekyll/
---
{% endhighlight %}

Depois só escrever o post que desejar, lembrando que ele é escrito em [Markdown](https://daringfireball.net/projects/markdown/syntax){:target="_blank"}.

## Como adicionar páginas

Adicionar páginas também é fácil, elas podem ser escritas em **Markdown** ou em **HTML**. Elas também devem conter no ínicio o **Front-Matter**. Agora vamos adicionar algumas ao nosso blog, mas antes vamos editar a nossa página `about.md`.

## Página about.md

Abra o arquivo `about.md` e abaixo do Front-Matter, adicione uma descrição sobre o assunto tratado no seu blog. O meu ficou assim:

{% highlight yaml %}
---
layout: page
title: Sobre
permalink: /sobre/
---

Tutorial de como criar um blog com Jekyll, feito por [Mateus Medeiros](http://devmateusmedeiros.com.br){:target="_blank"}. Você pode conferir esse tutorial em meu [blog](http://devmateusmedeiros.com.br){:target="_blank"}.

Repositório no GitHub: [Tutorial-Jekyll](https://github.com/mateussmedeiros/tutorial-jekyll){:target="_blank"}

## Partes do Tutorial:

- [Criando um blog com Jekyll - Parte 1](http://devmateusmedeiros.com.br/criando-um-blog-com-jekyll-parte-1/)
- [Criando um blog com Jekyll - Parte 2](http://devmateusmedeiros.com.br/criando-um-blog-com-jekyll-parte-2/)
- [Criando um blog com Jekyll - Parte 3](http://devmateusmedeiros.com.br/criando-um-blog-com-jekyll-parte-3/)
- [Criando um blog com Jekyll - Parte Final](http://devmateusmedeiros.com.br/criando-um-blog-com-jekyll-parte-final/)
{% endhighlight %}

## Adicionando novas páginas

Vamos adicionar mais algumas páginas ao nosso blog: 

- **tags.html**: onde ficará as **tags** utilizadas no blog.
- **categorias.html**: onde ficará as **categorias** utilizadas no blog.
- **contato.md**: será a página de contato do nosso blog.

Agora vamos lá!

### tags.html

Iremos criar uma função que irá listar os posts com as tags listadas no blog e criará um menu de acesso rápido, ficando assim:

[Tag](#) [Tag2](#)

## Tag
[link-do-post](#)
[link-do-post](#)

## Tag2
[link-do-post](#)
[link-do-post](#)

O arquivo ficou assim:

{% highlight html %}
---
layout: page
title: Tags
description: Procure os assuntos pelas tags usadas no blog
permalink: /tags/
---

<h2> Procure os assuntos pelas tags usadas no blog </h2>

<div class="tags-list">
{% raw %}
{% assign tags_list = site.tags %}
  {% if tags_list.first[0] == null %}
    {% for tag in tags_list %}
        <a data-scroll href="#{{ tag }}">{{ tag }}</a>
    {% endfor %}
  {% else %}
    {% for tag in tags_list %}
        <a data-scroll href="#{{ tag[0] }}">{{ tag[0] }}</a>
    {% endfor %}
  {% endif %}
{% assign tags_list = nil %}
{% endraw %}
</div>
{% raw %}
{% for tag in site.tags  %}
    <div class="tag">
        <h2 class="tag-title" id="{{ tag[0] }}">{{ tag[0] }}</h2>
        <ul class="posts">
            {% assign pages_list = tag[1] %}
            {% for post in pages_list reversed %}
                {% if post.title != null %}
                {% if group == null or group == post.group %}
                <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}<span class="date"><time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%d %b, %Y" }}</time></span></a></li>
                {% endif %}
                {% endif %}
            {% endfor %}
            {% assign pages_list = nil %}
            {% assign group = nil %}
        </ul>
    </div>
{% endfor %}
{% endraw %}
{% endhighlight %}

Essa função peguei do blog do [Willian Justen](http://willianjusten.com.br){:target="_blank"}.

### categorias.html

Com base na função criada acima, vamos criar a mesma função, mudando apenas a variável.

{% highlight html %}
---
layout: page
title: Categorias
description: Procure os assuntos pelas categorias usadas no blog.
permalink: /categorias/
---
<h2> Procure os assuntos pelas categorias usadas no blog </h2>

<div class="categories-list">
{% raw %}
{% assign categories_list = site.categories %}
  {% if categories_list.first[0] == null %}
    {% for category in categories_list %}
        <a data-scroll href="#{{ category }}">{{ category }}</a>
    {% endfor %}
  {% else %}
    {% for category in categories_list %}
        <a data-scroll href="#{{ category[0] }}">{{ category[0] }}</a>
    {% endfor %}
  {% endif %}
{% assign tags_list = nil %}
{% endraw %}
</div>
{% raw %}
{% for category in site.categories  %}
    <div class="category">
        <h2 class="category-title" id="{{ category[0] }}">{{ category[0] }}</h2>
        <ul class="posts">
            {% assign pages_list = category[1] %}
            {% for post in pages_list reversed %}
                {% if post.title != null %}
                {% if group == null or group == post.group %}
                <li><a href="{{ site.url }}{{ post.url }}">{{ post.title }}<span class="date"><time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%d %b, %Y" }}</time></span></a></li>
                {% endif %}
                {% endif %}
            {% endfor %}
            {% assign pages_list = nil %}
            {% assign group = nil %}
        </ul>
    </div>
{% endfor %}
{% endraw %}
{% endhighlight %}

### contato.md

Vamos criar agora uma página de contato, ela será escrita em **Markdown**. A minha ficou assim:

{% highlight yaml %}
---
layout: page
title: Contato
permalink: /contato/
---

**Quer falar comigo?**

Entre em contato pelo e-mail: [mateus.sousamedeiros@gmail.com](mailto:mateus.sousamedeiros@gmail.com)
{% endhighlight %}

Você pode editar do jeito que desejar.

## Editando o menu

Criamos nossas páginas, agora vamos adicioná-las ao menu. Para isso, abra o arquivo `header.html`, e troque os links do menu, ficando assim:

{% highlight html %}
<!-- Menu -->
<nav class="menu">
  <ul>
    <li><a href="/sobre"> Sobre </a></li>
    <li><a href="/categorias"> Categorias </a></li>
    <li><a href="/tags"> Tags </a></li>
    <li><a href="/contato"> Contato </a></li>
  </ul>
</nav>
{% endhighlight %}

## Subindo para o GitHub

Você pode subir seu blog para o GitHub e hospedá-lo com o GitHub Pages:

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

## Conclusão

Chegamos ao fim do nosso tutorial, espero que eu tenha ajudado vocês à criarem um blog com Jekyll. Qualquer dúvida, comente aqui ou me mande um email: [mateus.sousamedeiros@gmail.com](mailto:mateus.sousamedeiros@gmail.com).

Você pode acessar o [repositório](https://github.com/mateussmedeiros/tutorial-jekyll/){:target="_blank"} ou a [demo do tutorial](http://devmateusmedeiros.com.br/tutorial-jekyll/){:target="_blank"}.

**Até a próxima!**