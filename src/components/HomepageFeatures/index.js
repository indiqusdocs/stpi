import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


const FeatureList = [
  /* This section lists the options to add links on the home page.
  {
    title: (
	<a href="/docs/intro" target="_self" rel="noopener noreferrer">
<div className="title">Docs</div>
	</a>
	),
    Svg: require('@site/static/img/sps.svg').default,	
    description: (
    <div className="description">  <>
        <a href="/docs/intro" target="_self" rel="noopener noreferrer">
          Click here
        </a> to read the documents that offer guidance on platform setup, user management, billing, customer support, etc.</>
	</div>
	   
    ),
  },
  {
    title: (
	<a href="https://swagger.apiculus.io" target="_blank" rel="noopener noreferrer">
	<div className="title">APIs</div>
	</a>
	),
    Svg: require('@site/static/img/sbs.svg').default,
    description: (
      <div className="description"> <>
       <a href="https://swagger.apiculus.io" target="_blank" rel="noopener noreferrer">
          Click here
        </a> to access detailed documentation on all services supported and deliverable via the Apiculus CloudConsole.
      </>
		</div>

    ),
  },
  {
    title: (
	<a href="https://console.ananta.stpi.in" target="_blank" rel="noopener noreferrer">
	<div className="title">Ananta</div>
	</a>
	),
    Svg: require('@site/static/img/rn.svg').default,
	
    
	description: (
      <div className="description"> <>
        <a href="https://console.ananta.stpi.in" target="_blank" rel="noopener noreferrer">
          Click here 
        </a> to learn about the new features, enhancements, known issues, and bugs in all the releases till date.
      </>
	  </div>
    ),
  },
    
  {
    title: 'API Documentation',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  }, 
  */
];
function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
