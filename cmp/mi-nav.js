class MiNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
          `<header>
          <div class="menu">
            <a href="index.html">
              <img src="img/logo.png" alt="">
            </a>
            <nav>
                <ul>
                  <li><a href="index.html">Inicio</a></li>
                  <li><a href="sesion.html">Sesión</a></li>
                  <li><a href="comentarios.html">Comentarios</a></li>
                  <li><a href="menu.html">Menú</a></li>
                  <li><a href="#">Sucursales</a></li>
                  <li><a href="#">Editar</a></li>
                  <li><a href="#">Empleados</a></li>
                </ul>
            </nav>
          </div>
        </header>`;
    }
}

customElements.define("mi-nav", MiNav);