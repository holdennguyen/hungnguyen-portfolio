import Link from 'next/link';
import { NextSeo } from 'next-seo';

import { Section } from '@/components/base';
import { Main } from '@/components/base';
import { H1, Paragraph } from '@/components/Typography';

export default function AboutPage() {
  const customMetadata = {
    title: 'About',
    canonical: 'https://https://hungnguyen-portfolio.vercel.app//about',
    openGraph: {
      url: 'https://https://hungnguyen-portfolio.vercel.app//about',
    },
  };

  return (
    <>
      <NextSeo {...customMetadata} />
      <Main>
        <Section>
          <H1>About me</H1>
          <article className='prose mt-6 max-w-none'>
            <Paragraph>
              Hello! I'm Hung Nguyen. I'm a DevOps/SRE engineer
              from Vietnam.
            </Paragraph>
            <Paragraph>
                🔭 After spending more than five years working in the mechanical engineering field at Intel Vietnam, 
                I decided it was time for a career change. During that time, I was focused on using LEAN principles and innovation 
                to improve operational efficiency, I notice how much the world was being transformed by software, 
                particularly in the mechanical industry. That realization led me to join an internal mentoring program in 2021, 
                where I had the opportunity to meet with a principal engineer of Intel's IoT Group from the US. 
                During our one-on-one meetings, we delved into the world of IoT and its related concepts, 
                including connectivity broadcasting, security, micro-services, and DevOps culture. 
                This experience was a turning point for me, as it inspired me to become a DevOps/SRE engineer and 
                work towards growing into roles such as MLOps/DataOps/AIOps. 
                <br /><br />
                🌱 This shift was more than a career pivot—it marked the beginning of my specialization in cutting-edge areas like
                DevSecOps. My successful transition culminated at OPSWAT Vietnam, where I excelled as an SRE, 
                managing the Metadefender Cloud Platform/API. Here, my role not only deepened my expertise in cybersecurity and 
                infrastructure but also underscored my continuous research and development within the software field.
                <br /><br />
                👯 One of the methods I've found to be particularly effective is sharing what I learn with others.  
                By doing so, not only am I able to better organize my own knowledge, but I'm also able to communicate 
                with others and reinforce my own understanding while correcting any misunderstandings along the way.
            </Paragraph>
            <Paragraph>
              If you want to{' '}
              <Link href='/contact'>
                <a className='text-primary hover:text-primary/70'>contact me</a>
              </Link>
              , go ahead and send me a message through email on my
              contact page. I'll be happy to connect and get the opportunity for a new job position.
            </Paragraph>
          </article>
        </Section>
      </Main>
    </>
  );
}
