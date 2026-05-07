import { Button } from 'antd';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export type CardProps = {
  text: string;
  link: string;
};

export const Card = ({ text, link }: CardProps) => {
  return (
    <Link to={link} className={styles.wrapper}>
      <Button 
        type="link" 
        style={{ color: '#000', fontSize: '24px', whiteSpace: 'normal', wordWrap: 'break-word', padding: '12px 24px', textAlign: 'center' }}>
        {text}
      </Button>
    </Link>
  );
};
