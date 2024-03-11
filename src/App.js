import logo from './assets/logo.png'; // Ruta a tu archivo de imagen del logo
import './App.css';



function App() {
  return (
    <div className="App">

      <body>

        <div class="logo">
          <img src={logo} className="logo" alt="Logo" />
        </div>
        <div class="leyenda">Diseñamos y construimos stands</div>

        <div class="contacto">
          <a href="#" class="button">Contacto</a>
        </div>
        <div class="contenedor">
          <div class="izquierda">
            <div class= "blanco-ofi">Oficina</div>
            <ul class="sin-puntos">
              <li class= "blanco">Behance</li>
              <li class= "blanco">Instagram</li>
              <li class= "blanco">E-mail</li>
            </ul>
          </div>
          <div class="derecha">
            <div class= "blanco-dire">Arribeños 3230 Piso 3 depto 9</div>
            <ul class="sin-puntos">
              <li class= "blanco">
                <a href="https://www.behance.net/studio4ss">@STUDIO4</a>
              </li>
              <li class= "blanco">
                <a href="https://www.instagram.com/studio_4ss/">STUDIO_4ss</a>
              </li>
              <li class= "blanco">
                <a href="mailto:Hola@studio4ss.com">roxana@studio4ss.com</a>
              </li>
            </ul>
          </div>
        </div>


      </body>

    </div>
  );
}

export default App;
