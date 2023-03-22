import { NextSeo } from 'next-seo';

import { Section } from '@/components/base';
import { Main } from '@/components/base';
import ContactForm from '@/components/forms/ContactForm';
import { H2, Paragraph } from '@/components/Typography';


export default function ContactPage() {

  const customMetadata = {
    title: 'Contact',
    canonical: 'https://https://hungnguyen-portfolio.vercel.app//contact',
    openGraph: {
      url: 'https://https://hungnguyen-portfolio.vercel.app//contact',
    },
  };

  return (
    <>
      <NextSeo {...customMetadata} />

      <Main>
        <Section>
          <div className='mx-auto mb-8 w-full md:w-8/12'>
            <H2>Contact Me</H2>
            <Paragraph className='mt-2 mb-8'>
              If you want to hire me, collaborate or give me any feedback or
              suggestions, get in touch.
            </Paragraph>
            <ContactForm />
          </div>
        </Section>
      </Main>
    </>
  );
}
