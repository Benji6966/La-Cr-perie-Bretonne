class WebsiteNav extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<div id="left">
      <a href="index.html"><img id="logo" src="images/logo/logo.png" alt=""></a>
      <nav>
          <ul>
              <li><a id="main-link" href="#">La carte <i class="fa-solid fa-bars"></i></a>
                  <ul>
                      <li><a href="galettes.html">Galettes</a></li>
                      <li><a href="crepes.html">Crêpes</a></li>
                      <li><a href="menu.html">Menus</a></li>
                  </ul>
              </li>
          </ul>
      </nav>
      <div id="reservation">
          <span class="title">Une table disponible ?</span>
          <a id="reservation-link" href="https://module.lafourchette.com/fr_FR/module/69270-0518b" target="_blank">je réserve une table !</a>
          <a href="tel:+33474696847" class="phone">04 74 69 68 47</a>
      </div>
      <div id="time">
          <span class="title">Infos pratiques</span>
          <div class="time-elements">
              <div class="time-day">         
                  <div class="span-time">
                      <span>Lundi</span>11h - 14h</span>
                  </div>
                  <div class="span-time">
                      <span>Mardi</span>11h - 14h</span>
                  </div>
                  <div class="span-time">
                      <span>Mercredi</span>11h - 22h</span>
                  </div>
                  <div class="span-time">
                      <span>Jeudi</span>11h - 14h</span>
                  </div>
                  <div class="span-time">
                      <span>Vendredi</span>11h - 14h</span>
                  </div>
                  <div class="span-time">
                      <span>Samedi</span>11h - 22h</span>
                  </div>
                  <div class="span-time">
                      <span>Dimanche</span>11h - 22h</span>
                  </div>
              </div>
          </div>   
          <div class="time-elements">       
              <a href="https://www.google.fr/maps/place/La+Cr%C3%AAperie+Bretonne/@45.9875149,4.7170177,14z/data=!4m6!3m5!1s0x47f4853d4e079f55:0x726f23a87f007605!8m2!3d45.9875613!4d4.7171604!16s%2Fg%2F11b7ldm5xh?hl=fr" target="_blank">
                  53 Rue de Villars<br />
                  69400 Villefranche-sur-Saône
              </a>
          </div> 
          <div class="time-elements">       
              <a href="mailto:lacreperievillefranche@gmail.com">
                  lacreperievillefranche@gmail.com
              </a>
          </div> 
      </div>
      <div class="social">
          <a href="https://www.facebook.com/lacreperievillefranche/" target="_blank" >
            <i class="fa-brands fa-facebook fa-2xl" style="color: #33c8c8;"></i>
          </a>
      </div>
  </div>`;
    }
}

customElements.define( "website-nav", WebsiteNav );
