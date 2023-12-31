import "./Home.css"
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
    const main = document.querySelector("main");
    cleanPage(main);
    main.innerHTML = `
      <section class="home">
      <p>Hola, Soy</p>
      <h1>Marc Mateo</h1>
      <p>Me dedico al FullStack a partir de Javascript, donde implemento mis tecnicas tanto en la parte Front-end como en la parte Back-end para poder manejar e dirigir los datos deseados y su diseño acorde con las características de la aplicación buscada.</p>
      <a href="mailto:marmateodvlpr@gmail.com">e-mail →</a>
      </section>`;
  };