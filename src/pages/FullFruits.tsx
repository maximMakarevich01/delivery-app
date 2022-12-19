import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const FullFruits: React.FC = () => {
  const [fruits, setFruits] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchFruits() {
      try {
        const { data } = await axios.get(
          "https://638c7706eafd555746a6f3d9.mockapi.io/items/" + id
        );
        setFruits(data);
      } catch (error) {
        alert("Ошибка при получении продуктов!");
        navigate("/");
      }
    }

    fetchFruits();
  }, []);

  if (!fruits) {
    return <>Загрузка...</>;
  }

  return (
    <div className="container">
      <img src={fruits.imageUrl} />
      <h2>{fruits.title}</h2>
      <h4>{fruits.price} ₽</h4>
      <Link to="/">
        <button className="button button--outline button--add">
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullFruits;
