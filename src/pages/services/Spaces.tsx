import { Typography, Layout } from "antd";
import styles from "../style.module.css";
import { BackArrow } from "../../components/common/BackArrow";

import danceStudio from "../../assets/images/dance-studio.jpg";
import musicStudio from "../../assets/images/music-studio.jpg";
import artStudio from "../../assets/images/art-studio.jpg";
import coworking from "../../assets/images/coworking.jpg";

const { Title } = Typography;

export const Spaces = () => {
  return (
    <Layout className={styles.wrapper} style={{ padding: "32px" }}>
      <BackArrow />
      <Title>Пространства</Title>
      <Title level={2}>
        Добро пожаловать в творческое пространство «Душа» — место, где рождаются
        идеи и воплощаются мечты!
      </Title>
      <Title level={2}>
        Мы создали среду для самовыражения и продуктивной работы, объединив
        четыре уникальные зоны под одной крышей. Здесь каждый найдёт
        пространство по душе: от танцевальных репетиций до сосредоточенной
        работы в коворкинге.
      </Title>
      <Title level={2}>Наше пространство — это:</Title>
      <ul style={{ fontSize: "28px", marginBottom: "32px" }}>
        <li>атмосфера вдохновения и творчества</li>
        <li>современное оборудование для разных видов деятельности</li>
        <li>удобное расположение и комфортная обстановка</li>
        <li>сообщество единомышленников</li>
        <li>удобное расположение и комфортная обстановка</li>
      </ul>
      <Title>
        Приходите работать, творить и развиваться в «Душе» — месте, где ваше
        творчество получает крылья!
      </Title>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "20px",
        }}
      >
        <img
          src={danceStudio}
          alt="Студия для танцев"
          style={{
            width: "200px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <img
          src={musicStudio}
          alt="Студия для музыкальных репетиций"
          style={{
            width: "200px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <img
          src={artStudio}
          alt="Художественная студия"
          style={{
            width: "200px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <img
          src={coworking}
          alt="Коворкинг"
          style={{
            width: "200px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>
    </Layout>
  );
};
