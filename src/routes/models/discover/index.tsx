import "./discover.scss";
import image1 from "../../../assets/images/discover1.jpg";
import image2 from "../../../assets/images/discover2.jpg";
import image3 from "../../../assets/images/discover3.jpg";
import image4 from "../../../assets/images/discover4.jpg";

const Discover = () => {
  return (
    <section id="discover">
      <h2>Descubra</h2>
      <div className="discover-container">
        <div className="discover-item">
          <img src={image1} alt="A comunidade Scenic Routing da Porsche" />
          <h3>A comunidade Scenic Routing da Porsche.</h3>
        </div>
        <div className="discover-item">
          <img src={image2} alt="Porsche Design Online Shop" />
          <h3>Porsche Design Online Shop.</h3>
        </div>
        <div className="discover-item">
          <img src={image3} alt="Tequipment Sound & Design" />
          <h3>Tequipment Sound & Design.</h3>
        </div>
        <div className="discover-item">
          <img src={image4} alt="Porsche Exclusive Manufaktur" />
          <h3>Porsche Exclusive Manufaktur.</h3>
        </div>
      </div>
    </section>
  );
};

export default Discover;
