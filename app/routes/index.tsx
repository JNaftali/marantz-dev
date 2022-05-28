import styles from '../styles/index.css';
import type { LinksFunction } from '@remix-run/node';

export function meta() {
  return {
    title: '👋 Hi from Josh',
    description: 'Very unfinished',
  };
}

export default function Index() {
  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <h2>This site is unfinished!</h2>
      <p>Eventually this will hold my website. For now it just holds this.</p>
    </div>
  );
}

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};
