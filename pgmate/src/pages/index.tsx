import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import CodeBlock from '@theme/CodeBlock';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <CodeBlock language="bash">
          docker run -p 8080:8080 pgmate/pgmate:latest-full
        </CodeBlock>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--md"
            to="/docs/intro"
          >
            PGMate Tutorial - 5min ⏱️
          </Link>
          <a
            href="https://gitpod.io/#https://github.com/pgmate/demo"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.gitpodButton}
          >
            <img
              src="https://gitpod.io/button/open-in-gitpod.svg"
              alt="Open in Gitpod"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
