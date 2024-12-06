import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
} & (
  | { Svg: React.ComponentType<React.ComponentProps<'svg'>>; Img?: never }
  | { Img: string; Svg?: never }
);

const FeatureList: FeatureItem[] = [
  {
    title: 'Ships as Docker Container',
    Img: '/img/ships-as-docker.jpg',
    description: (
      <>
        PGMate runs in your browser. On your computer or in your Cloud. It connects to your db(s) and let you work with your data.
      </>
    ),
  },
  {
    title: 'Explore Your DB',
    Img: '/img/explore-your-data1.jpg',
    description: (
      <>
        All the tools that you expect to <em>CRUD</em> your schemas and data, plus analytics tools, backups, migrations and SQL workbooks.
      </>
    ),
  },
  {
    title: 'Talk With Your Data',
    Img: '/img/talk-with-your-data.jpg',
    description: (
      <>
        PGMate uses GenAI to facilitate your job and copilot into building your data-project and fine tuning your queries.
      </>
    ),
  },
  {
    title: 'Postman for SQL',
    Img: '/img/postman-for-sql.png',
    description: (
      <>
        Create SQL workbooks that you can share with your co-workers. PGMate supports both Postmand and Jupyter Notebook's styles!
      </>
    ),
  },
  {
    title: 'NPM For SQL',
    Img: '/img/npm-for-sql.png',
    description: (
      <>
        Quickly import public schemas and data, publish your data-projects and get support from the community.
      </>
    ),
  },
  {
    title: 'Learn On The Job',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    Img: '/img/learning-on-the-job.jpg',
    description: (
      <>
        Enjoy a selection of articles, news, and tutorials directly in your favourite Postgres IDE! <br />
        Challenge yourself with PGMate Academy tasks.
      </>
    ),
  },
  
];

function Feature({title, Svg, Img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Img ? <img src={Img} alt="img" style={{height: 267}} /> : <Svg className={styles.featureSvg} role="img" />}
        
        
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
