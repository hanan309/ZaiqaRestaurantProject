import "./App.css";
import whiteKorma from "./assets/White-Korma.jpeg";
import redKorma from "./assets/Red-Korma.jpeg";
import Kima from "./assets/Kima.jpeg";
import dalMash from "./assets/Dal-Mash.jpeg";
import dalChana from "./assets/Dal-Chana.jpeg";
import Lobia from "./assets/Lobia.jpeg";
import PalakSaag from "./assets/Palak-Saag.jpeg";
import biryani from "./assets/Biryani.jpeg";
import chickenPulao from "./assets/Chiken-Pulao.jpeg";
import chef from "./assets/Chef.jpeg";
import restaurantManager from "./assets/Restaurant-Manager.jpeg";
import chefManager from "./assets/Chef-Manager.jpeg";
import logo from "./assets/logo.png";
import banner from "./assets/banner.png";

function App() {
  return (
    <>
      {/* Header */}
      {/* Header */}
      <header className="hero">
        <img src={logo} alt="Zaiqa Logo" className="logo" />
      
        <div className="hero-text">
          <h1>Zaiqa Restaurant and Biryani House</h1>
          <p>Where Tradition Meets Taste</p>
        </div>
      </header>



      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container">
          <h2 className="section-title">About Zaiqa Restaurant</h2>
          <p>
            Zaiqa Restaurant delivers authentic desi dishes in a professional
            and hygienic environment with consistent quality and service.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-section" id="menu">
        <div className="container">
          <h2 className="section-title">Our Signature Dishes</h2>

          <div className="menu-grid">
            <div className="dish-card">
              <img src={whiteKorma} alt="White Qorma" />
              <h3>White Qorma</h3>
              <p>Rich and creamy traditional chicken curry.</p>
              <p className="price">PKR 1800</p>
            </div>

            <div className="dish-card">
              <img src={redKorma} alt="Red Qorma" />
              <h3>Red Qorma</h3>
              <p>Spicy red chicken curry with aromatic spices.</p>
              <p className="price">PKR 2200</p>
            </div>

            <div className="dish-card">
              <img src={Kima} alt="Chicken Qeema" />
              <h3>Chicken Qeema</h3>
              <p>Minced chicken sautéed with herbs.</p>
              <p className="price">PKR 1500</p>
            </div>

            <div className="dish-card">
              <img src={dalMash} alt="Dal Mash" />
              <h3>Dal Mash</h3>
              <p>Creamy black lentils slow-cooked.</p>
              <p className="price">PKR 900</p>
            </div>

            <div className="dish-card">
              <img src={dalChana} alt="Dal Chana" />
              <h3>Dal Chana</h3>
              <p>Split chickpeas with traditional spices.</p>
              <p className="price">PKR 850</p>
            </div>

            <div className="dish-card">
              <img src={Lobia} alt="Lobia" />
              <h3>Red Lobia</h3>
              <p>Red kidney beans in savory gravy.</p>
              <p className="price">PKR 950</p>
            </div>

            <div className="dish-card">
              <img src={PalakSaag} alt="Palak Saag" />
              <h3>Palak Saag</h3>
              <p>Fresh spinach with garlic seasoning.</p>
              <p className="price">PKR 1000</p>
            </div>

            <div className="dish-card">
              <img src={biryani} alt="Chicken Biryani" />
              <h3>Chicken Biryani</h3>
              <p>Fragrant basmati rice with spiced chicken.</p>
              <p className="price">PKR 900</p>
            </div>

            <div className="dish-card">
              <img src={chickenPulao} alt="Chicken Pulao" />
              <h3>Chicken Pulao</h3>
              <p>Lightly spiced rice with tender chicken.</p>
              <p className="price">PKR 900</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section" id="team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>

          <div className="team-grid">
            <div className="employee-card">
              <img src={restaurantManager} alt="Restaurant Manager" />
              <h3>Khalid Khan</h3>
              <p className="role">Restaurant Manager</p>
            </div>

            <div className="employee-card">
              <img src={chef} alt="Head Chef" />
              <h3>Ghazi</h3>
              <p className="role">Head Chef</p>
            </div>

            <div className="employee-card">
              <img src={chefManager} alt="Service Staff" />
              <h3>Sami Khan</h3>
              <p className="role">Service Staff</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <h3>Contact Us</h3>
              <p>
                <i class="fas fa-phone"></i> +92 314 3166603
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i> 173G centar flats N block
                model town lahore punjab N, Lahore, 54700
              </p>
            </div>

            <div class="footer-section">
              <h3>Opening Hours</h3>
              <p>Monday - Friday: 11am - 10pm</p>
              <p>Saturday - Sunday: 10am - 11pm</p>
            </div>
          </div>

          <div class="footer-bottom">
            <p>
              &copy; 2026 Zaiqa Restaurant & Biryani House. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
