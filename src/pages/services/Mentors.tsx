import { Typography, Layout, Card } from "antd";
import styles from "../style.module.css";
import { BackArrow } from "../../components/common/BackArrow";


import danceTeacher from '../../assets/images/dance-teacher.jpeg';
import guitarTeacher from '../../assets/images/guitar-teacher.jpeg';
import schoolTeacher from '../../assets/images/chool-teacher.jpeg';
import psychologist from '../../assets/images/psychologist.jpeg';

const { Title, Paragraph } = Typography;

export const Mentors = () => {
  const mentors = [
    {
      id: 1,
      name: "Дэнис DanceVibes",
      role: "Хореограф",
      description:
        "Движения — это язык души. Помогу раскрыть пластику, поставить танец любой сложности и обрести уверенность на сцене. От базовых шагов до профессиональной хореографии!",
      image: danceTeacher,
    },
    {
      id: 2,
      name: "Маринка GuitarSoul",
      role: "Преподаватель гитары",
      description:
        "Гитара — это не просто инструмент, это способ выразить себя. Научу играть с нуля, разбираться в аккордах и импровизации. От классики до рока!",
      image: guitarTeacher,
    },
    {
      id: 3,
      name: "Иринка EduSpark",
      role: "Учитель рисования",
      description:
        "Учить — значит вдохновлять. Помогу освоить новые знания легко и с удовольствием: от школьной программы до подготовки к экзаменам. Индивидуальный подход к каждому!",
      image: schoolTeacher,
    },
    {
      id: 4,
      name: "Жасмин MindCalm",
      role: "Психолог",
      description:
        "Путь к гармонии начинается с понимания себя. Консультирую по вопросам стресса, самооценки и отношений. Создам безопасное пространство для ваших открытий!",
      image: psychologist,
    },
  ];

  return (
    <Layout className={styles.wrapper} style={{ padding: "32px" }}>
      <BackArrow />
      <Title>Наши наставники</Title>
      <Title level={2}>
        Познакомьтесь с командой профессионалов, которые помогут вам раскрыть потенциал
        и достичь новых высот в творчестве, обучении и самопознании.
      </Title>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "24px",
          marginTop: "32px",
        }}
      >
        {mentors.map((mentor) => (
          <Card
            key={mentor.id}
            hoverable
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              background: "linear-gradient(135deg, #FFFFFF 0%, #add8e6 100%)"
            }}
            cover={
              <img
                alt={mentor.role}
                src={mentor.image}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "contain",
                  borderRadius: "12px 12px 0 0",
                }}
              />
            }
          >
            <Card.Meta
              title={
                <div>
                  <div style={{ color: "#1890ff", fontSize: "24px" }}>
                    {mentor.name}
                  </div>
                  <div style={{ color: "#888", fontSize: "22px", marginTop: "4px" }}>
            {mentor.role}
          </div>
        </div>
              }
              description={
                <Paragraph
                  style={{
                    color: "#333",
                    lineHeight: "1.6",
                    marginTop: "16px",
                    fontSize: "22px"
                  }}
                >
                  {mentor.description}
                </Paragraph>
              }
            />
          </Card>
        ))}
      </div>
    </Layout>
  );
};
