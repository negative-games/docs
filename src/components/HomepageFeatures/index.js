import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'alumina',
    link: '/alumina/Introduction',
    Svg: require('@site/static/img/alumina.svg').default,
    description: (
      <>
          alumina is a powerful wrapper library to streamline the development of
          Minecraft plugins using the PaperMC Api. It provides a
          comprehensive set of tools and utilities that simplify common tasks
          and enhance the overall development experience.
      </>
    ),
  },
  {
    title: 'Punishments',
    link: '/punishments/introduction',
    Svg: require('@site/static/img/punishments.svg').default,
    description: (
      <>
        A public plugin that extends the capabilities of the infamous LiteBans plugin which adds
          structured punishment management, gui support, and more!
      </>
    ),
  },
];

function Feature({Svg, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link} className={styles.featureLink}>
            <Svg className={styles.featureSvg} role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
          <a href={link} target="_blank" rel="noopener noreferrer">
              <Heading as="h3">{title}</Heading>
          </a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
