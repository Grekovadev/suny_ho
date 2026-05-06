import React from 'react';
import { Typography, Collapse, Divider, Layout } from 'antd';
import { BackArrow } from '../../components/common/BackArrow';
import styles from "../style.module.css";

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

export const Faq = () => {
  const faqItems = [
    {
      key: '1',
      question: 'Как записаться на мастер‑класс?',
      answer: 'Через форму на сайте или написав нам в Telegram: @suny_ho.'
    },
    {
      key: '2',
      question: 'Есть ли пробное занятие?',
      answer: 'Да, первое занятие бесплатное для всех направлений.'
    },
    {
      key: '3',
      question: 'Какие инструменты предоставляются в музыкальной студии?',
      answer: 'Ударная установка, усилители, комбики, клавишные, микрофоны и система записи.'
    },
    {
      key: '4',
      question: 'Можно ли арендовать студию для фотосессии?',
      answer: 'Да, все студии доступны для аренды. Уточняйте детали в личных сообщениях.'
    },
    {
      key: '5',
      question: 'Есть ли возрастные ограничения?',
      answer: 'Нет, мы работаем со всеми возрастами — от детей до взрослых.'
    }
  ];

  return (
    <Layout className={styles.wrapper} style={{ padding: "32px" }}>
        <BackArrow />
      <Title style={{ textAlign: 'center', marginBottom: '40px' }}>
        Часто задаваемые вопросы
      </Title>

      <Collapse
        accordion
        expandIconPosition="right"
        style={{
          width: '800px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px'
        }}
      >
        {faqItems.map(item => (
          <Panel
            header={
              <span style={{ fontWeight: '600', fontSize: "28px" }}>
                {item.question}
              </span>
            }
            key={item.key}
          >
            <Paragraph style={{ color: '#595959', lineHeight: '1.6', fontSize: "28px" }}>
              {item.answer}
            </Paragraph>
          </Panel>
        ))}
      </Collapse>

      <Divider style={{ margin: '40px 0' }} />

      <div style={{ textAlign: 'center' }}>
        <Paragraph style={{ fontSize: "28px" }}>
          Не нашли ответ на свой вопрос?
        </Paragraph>
        <a
          href="https://t.me/suny_ho"
          target="_blank"
          rel="noopenerer noreferrer"
          style={{
            color: '#1890ff',
            textDecoration: 'none',
            fontWeight: '500',
            fontSize: "28px"
          }}
        >
          Напишите нам в Telegram
        </a>
      </div>
    </Layout>
  );
};
