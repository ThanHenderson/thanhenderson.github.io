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
        </ul>
    </nav>
`
document.body.prepend(template.content)