import { Typography, Layout, Card } from "antd";
import styles from "../style.module.css";
import { BackArrow } from "../../components/common/BackArrow";

// Замените пути на актуальные для ваших изображений событий
import event1 from "../../assets/images/event1.png";
import event2 from "../../assets/images/event2.png";
import event3 from "../../assets/images/event3.png";
import event4 from "../../assets/images/event4.png";
import event5 from "../../assets/images/event5.png";
import event6 from "../../assets/images/event6.png";

const { Title, Paragraph } = Typography;

export const Events = () => {
  const events = [
    {
      id: 1,
      title: "Весенний танцевальный фестиваль",
      date: "15 мая 2026",
      time: "18:00",
      location: "Городской культурный центр",
      description: "Ежегодный фестиваль современного танца с участием лучших коллективов города. В программе — выступления, мастер‑классы и конкурс для начинающих танцоров.",
      image: event1,
    },
    {
      id: 2,
      title: "Мастер‑класс по игре на гитаре для начинающих",
      date: "20 мая 2026",
      time: "16:00",
      location: "Музыкальная студия «Аккорд»",
      description: "Бесплатный вводный мастер‑класс от преподавателя с 10‑летним опытом. Научим держать гитару, ставить первые аккорды и играть простые мелодии.",
      image: event2,
    },
    {
      id: 3,
      title: "Арт‑вечеринка: рисование акрилом",
      date: "25 мая 2026",
      time: "19:00",
      location: "Творческая мастерская «Палитра»",
      description: "Вечер творчества для всех желающих. Создадим картину акриловыми красками под руководством профессионального художника. Материалы включены в стоимость.",
      image: event3,
    },
    {
      id: 4,
      title: "Тренинг по управлению стрессом",
      date: "30 мая 2026",
      time: "17:30",
      location: "Психологический центр «Гармония»",
      description: "Практический тренинг от клинического психолога. Научимся техникам релаксации, дыхательным практикам и способам быстрого восстановления в стрессовых ситуациях.",
      image: event4,
    },
    {
      id: 5,
      title: "Концерт авторской песни",
      date: "5 июня 2026",
      time: "19:30",
      location: "Клуб «Гитара и слово»",
      description: "Вечер живой музыки с участием местных авторов‑исполнителей. Акустическая атмосфера, песни под гитару и возможность выступить со своим творчеством.",
      image: event5,
    },
    {
      id: 6,
      title: "Семейный день творчества",
      date: "10 июня 2026",
      time: "14:00",
      location: "Парк культуры и отдыха",
      description: "Бесплатные мастер‑классы для детей и родителей: рисование, лепка, поделки из природных материалов. Весёлые игры и фотосессия в творческой атмосфере.",
      image: event6,
    },
  ];

  return (
    <Layout className={styles.wrapper} style={{ padding: "32px" }}>
      <BackArrow />
      <Title>События</Title>
      <Title level={2}>
        Актуальные мероприятия, мастер‑классы и встречи. Присоединяйтесь к нашему творческому сообществу!
      </Title>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          marginTop: "32px",
        }}
      >
        {events.map((event) => (
          <Card
            key={event.id}
            hoverable
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              background: "linear-gradient(135deg, #FFFFFF 0%, #f0faff 100%)",
            }}
            cover={
              <img
                alt={event.title}
                src={event.image}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "12px 12px 0 0",
                }}
              />
            }
          >
            <Card.Meta
              title={
                <div>
                  <div style={{ color: "#1890ff", fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}>
                    {event.title}
                  </div>
                  <div style={{ color: "#595959", fontSize: "16px" }}>
                    📅 {event.date} в {event.time}
                  </div>
                  <div style={{ color: "#595959", fontSize: "16px", marginTop: "4px" }}>
            📍 {event.location}
          </div>
        </div>
              }
              description={
                <Paragraph
                  style={{
                    color: "#333",
                    lineHeight: "1.6",
                    marginTop: "16px",
                    fontSize: "16px",
                  }}
                >
                  {event.description}
                </Paragraph>
              }
            />
          </Card>
        ))}
      </div>
    </Layout>
  );
};
