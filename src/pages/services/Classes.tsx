import { Typography, Row, Col, Divider, Layout, List } from "antd";
import styles from "../style.module.css";
import { BackArrow } from '../../components/common/BackArrow';

const { Title, Text } = Typography;

export const Classes = () => {
  const masterClasses = [
    {
      id: 1,
      text: "Гитара: 23.05 14:00 “Беспечный ангел”",
      level: "продолжающий",
    },
    { id: 2, text: "Гитара 23.05 15:30 “Батарейка”", level: "начинающий" },
    {
      id: 3,
      text: "Танцы 22.05 18:00 “Swim”",
      level: "начинающий (контемпорари)",
    },
    {
      id: 4,
      text: "Танцы 22.05 18:00 “Come to brazil”",
      level: "продолжающий",
    },
    { id: 5, text: "Рисование 24.05 12:00", level: "все уровни" },
  ];
  const groups = [
    {
      title: "Гитара",
      items: [
        "начинающий: ср, чт, сб - 17:30",
        "продолжающий: пн, чт, сб - 18:30",
      ],
    },
    {
      title: "Танцы",
      items: ["хип хоп: пт, сб - 17:00", "контемпорари: пн, ср - 18:00"],
    },
    {
      title: "Вокал",
      items: [
        "индивидульно - по договоренности",
        "в группе - сб 14:00 (по предварительному прослушиванию)",
      ],
    },
  ];

  return (
    <Layout className={styles.wrapper}>
        <BackArrow />
      <Title>Мастер-классы и обучение</Title>

      <Row gutter={[16, 16]}>
        {masterClasses.map((item) => (
          <Col xs={24} sm={12} lg={8} key={item.id}>
            <div
              style={{
                width: "450px",
                height: "200px",
                padding: "15px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                borderRadius: "16px",
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  display: "block",
                  fontWeight: "bold",
                  fontSize: "28px",
                }}
              >
                {item.text}
              </Text>
              <Text type="secondary" style={{ fontSize: "28px" }}>
                Уровень: {item.level}
              </Text>
            </div>
          </Col>
        ))}
      </Row>

      <Divider style={{ margin: "40px 0" }} />
      <Title>Группы</Title>
      <Row gutter={[16, 16]}>
        {groups.map((group, index) => (
          <div
            key={index}
            style={{
              width: "450px",
              height: "300px",
              padding: "15px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              borderRadius: "16px",
              textAlign: "center",
            }}
          >
            <Text style={{ fontSize: "28px" }}>{group.title}</Text>
            <List
              dataSource={group.items}
              renderItem={(item) => (
                <List.Item style={{ paddingLeft: "20px", fontSize: "28px" }}>
                  <Text type="secondary" style={{ fontSize: "28px" }}>
                    {item}
                  </Text>
                </List.Item>
              )}
            />
          </div>
        ))}
      </Row>

      <Divider />
    </Layout>
  );
};
