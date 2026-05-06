import { Layout, Typography } from 'antd';

import styles from '../style.module.css';
import { cardsData } from '../constans';
import { Card } from '../../components/cards/Card';

const { Title, Text } = Typography;

export const HomePage = () => {


    return (
        <Layout className={styles.wrapper}>
            <Title level={2}>с любовью с 2026 года</Title>
            <Text style={{ fontSize: '16rem', lineHeight: 1 }}>Душа</Text>
            <Title level={2}>Мы создаем безопасное пространство для самовыражения, поиска единомышленников, саморазвития и поиска себя.</Title>
            <Title level={2}>"Твори так, как будто никто не смотрит."</Title>
            <div className={styles.cardsContainer}>
                {cardsData.map((el) => (
                    <Card text={el.text} key={el.id} link={el.link} />
                ))}
            </div>
        </Layout>
    );
};
