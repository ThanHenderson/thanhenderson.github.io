const template = document.createElement('template')

template.innerHTML = `
<title>Artilect</title>
<div class="header">
	<nav class="navbar fixed-top navbar-light bg-light">
		<a class="navbar-brand" href="index.html">
			<img src="maple-min.jpg" width="30" height="30" class="d-inline-block align-top" alt="">
		</a>
		<ul class="nav list-inline ml-auto ">
			<li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
			<li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
		</ul>
	</nav>
</div>
`
document.body.appendChild(template.content)