import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';


const FAQS = [
  {
    title: 'What is React Fetch Tree?',
    content: () => (
      <>
        React Fetch Tree is a tool that helps developers pinpoint where data
        requests are happening in their apps. This can allow developers to
        eliminate or consolidate unnecessary data fetching, and avoid
        "waterfalls".
      </>
    ),
  },
  {
    title: 'What is a waterfall?',
    content: () => (
      <>
        The React team have defined a waterfall as 'an unintentional sequence
        that should have been parallelized'. In regards to data fetching, it
        refers to the case where a data request in a child component depends on
        a data request in a parent component. Because the data must flow through
        both components before they are correctly rendered, the rendering
        process is slowed and performance is diminished. React Fetch Tree can
        help you identify the location of data requests in your app and prevent
        waterfalls.
      </>
    ),
  },
  {
    title: 'How does React Fetch Tree help prevent waterfalls?',
    content: () => (
      <>
        React Fetch Tree provides a visualization of the component tree which
        shows the layout and hierarchy of your React app with all it's
        components. Components that contain data requests are highlighted within
        the visualization, so you can easily see the relationship between
        components that contain data requests. Nodes containing data fetches
        that are highlighted can be clicked on to reveal details about the data
        requests they contain.
      </>
    ),
  },
  {
    title: 'How can React Fetch Tree be used?',
    content: () => (
      <>
        React Fetch Tree can be used to streamline your application by removing
        or consolidating data requests when waterfalls can be identified or to
        refactor your request process. With the release of React Concurrent Mode
        and Suspense, React Fetch Tree can be used to identify areas in your app
        where the implementation of Suspense for Data Fetching will be most
        advantageous.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
