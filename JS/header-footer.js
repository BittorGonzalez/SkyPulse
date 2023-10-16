//Header

const headers = document.querySelectorAll(".global__header")

headers.forEach(header => {
    header.innerHTML = `
    <div class="site-mobile-menu site-navbar-target">
    <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close">
            <span class="icofont-close js-menu-toggle"></span>
        </div>
    </div>
    <div class="site-mobile-menu-body"></div>
</div>

<nav class="site-nav">
    <div class="container">
        <div class="site-navigation">
            <a href="index.html" class="logo m-0">Tour <span class="text-primary">.</span></a>

            <ul class="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right">
                <li class="active"><a href="index.html">Inicio</a></li>
                <li class="has-children">
                    <a class="btn-dest">Destinos</a>
                    <ul class="dropdown">
                        <li><a href="destinos.html?categoria=Playa">Playas paradisiacas</a></li>
                        <li><a href="destinos.html?categoria=Naturaleza">Naturaleza y aventura</a></li>
                        <li><a href="destinos.html?categoria=Gastronomía">Gastronomicos</a></li>
                        <li><a href="destinos.html?categoria=Ciudad">Ciudades</a></li>
                        <li><a href="destinos.html?categoria=Cultura">Historicos y culturales</a></li>
                    </ul>
                </li>
                <li><a href="sobre-nosotros.html">Sobre nosotros</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>

            <a href="#"
                class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
                data-toggle="collapse" data-target="#main-navbar">
                <span></span>
            </a>

        </div>
    </div>
</nav>

    `;
});




//Footer
const footers = document.querySelectorAll(".global__footer")
footers.forEach(footer => {
    footer.innerHTML = `
    <div class="site-footer">
    <div class="inner first">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="widget">
                        <h3 class="heading">Sobre SkyPulse</h3>
                        <p>SkyPulse es la agencia de viajes lider en el sector. </p>
                    </div>
                    <div class="widget">
                        <ul class="list-unstyled social">
                            <li><a href="#"><span class="icon-twitter"><i class="bi bi-twitter-x"></i></span></a></li>
                            <li><a href="#"><span class="icon-instagram"><i class="bi bi-instagram"></i></span></a></li>
                            <li><a href="#"><span class="icon-facebook"><i class="bi bi-facebook"></i></span></a></li>
                            <li><a href="#"><span class="icon-linkedin"><i class="bi bi-linkedin"></i></span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg-2 pl-lg-5">
                    <div class="widget">
                        <h3 class="heading">Paginas</h3>
                        <ul class="links list-unstyled">
                            <li><a href="destinos.html">Destinos</a></li>
                            <li><a href="sobre-nosotros.html">Sobre nosotros</a></li>
                            <li><a href="#">Carrito</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg-2">
                    <div class="widget">
                        <h3 class="heading">Recursos</h3>
                        <ul class="links list-unstyled">
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contacto</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="widget">
                        <h3 class="heading">Contacto</h3>
                        <ul class="list-unstyled quick-info links">
                            <li class="email"><a href="#">julendejaelgym@skypulse.com</a></li>
                            <li class="phone"><a href="#">6969696969</a></li>
                            <li class="address"><a href="#">Calle Wallaby, 42, Sidney</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    `
})