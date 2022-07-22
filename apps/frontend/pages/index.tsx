import styles from '../styles/Index.module.scss';
import { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <div className={styles.page}>
      <h1>Hello Next.js</h1>
    </div>
  );
};

export default Index;
