const fonts = document.createElement('template')

fonts.innerHTML = `
<link rel="preconnect" href="https://fonts.googleapis.com"> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
<link href="https://fonts.googleapis.com/css2?family=Zilla+Slab&display=swap" rel="stylesheet">
`
document.head.prepend(fonts.content)


const template = document.createElement('template')

template.innerHTML = `
<title>Artilect</title>
<link rel="stylesheet" type="text/css" href="./index-css.css">

    <nav>
		<a href="index.html">
        	<img src="site_imgs/maple-min.jpg" width="30" height="30" class="d-inline-block align-top" alt="">
		</a>
        <ul>
            <li><a href="index.html">About</a></li>
            <li><a href="blog.html">Artilect</a></li>
            <li><a href="links.html">Links</a></li>
        </ul>
    </nav>
`
document.body.prepend(template.content)
