import "./not-found.scss";
import notFountImage from "../../assets/images/notfound.jpg";

const NotFound = () => {
  return (
    <section id="not-found">
      <h2>Ops, não encontramos essa página</h2>
      <img src={notFountImage} alt="Not Found" />
    </section>
  );
};

export default NotFound;
