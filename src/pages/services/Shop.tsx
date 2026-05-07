import { Typography, Layout, Card } from "antd";
import styles from "../style.module.css";
import { BackArrow } from "../../components/common/BackArrow";

const { Title, Paragraph } = Typography;

export const Shop = () => {
  const services = [
    {
      id: 1,
      title: "Абонемент на месяц",
      price: "5 000 ₽",
      description: "Неограниченные занятия в течение месяца. Доступ ко всем группам и мастер‑классам.",
    },
    {
      id: 2,
      title: "Индивидуальное занятие",
      price: "2 500 ₽",
      description: "Персональная работа с наставником. Подбор программы под ваши цели и уровень.",
    },
    {
      id: 3,
      title: "Мастер‑класс",
      price: "600 ₽",
      description: "Тематическое занятие по конкретной теме. Подходит для начинающих и продолжающих.",
    },
    {
      id: 4,
      title: "Первое занятие бесплатно",
      price: "0 ₽",
      description: "Попробуйте наши занятия без оплаты. Знакомство с наставником и форматом обучения.",
    },
  ];

  return (
    <Layout className={styles.wrapper} style={{ padding: "32px" }}>
      <BackArrow />
      <Title>Cтоимость услуг</Title>
      <Title level={2}>
        Выберите подходящий формат обучения и начните развиваться вместе с нами!
      </Title>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          marginTop: "32px",
        }}
      >
        {services.map((service) => (
          <Card
            key={service.id}
            hoverable
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              background: "linear-gradient(135deg, #FFFFFF 0%, #e6f7ff 100%)",
            }}
          >
            <Card.Meta
              title={
                <div>
                  <div style={{ color: "#1890ff", fontSize: "22px", fontWeight: "bold" }}>
                    {service.title}
                  </div>
                  <div style={{ color: "#ff4d4f", fontSize: "24px", marginTop: "8px" }}>
                    {service.price}
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
                  {service.description}
                </Paragraph>
              }
            />
          </Card>
        ))}
      </div>
    </Layout>
  );
};
