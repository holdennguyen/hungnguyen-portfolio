// import { useState } from 'react';

import Image from 'next/image'
import { NextSeo } from 'next-seo';

import { pick } from 'contentlayer/client';
import { allPosts } from 'contentlayer/generated';

import { Section } from '@/components/base';
import { Main } from '@/components/base';
import Card from '@/components/cards/Card';
// import FeaturedPostCard from '@/components/cards/FeaturedPostCard';
import GithubCard from '@/components/cards/GithubCard';
// import Demo from '@/components/chart/demo'
import CurrentGoals from '@/components/CurrentGoals';
import { H1, H2, H4, Paragraph } from '@/components/Typography';

import { jobs } from '@/fixtures/jobs';

// import YoutubeIframe from '../content/YoutubeIframe';
import { display,repoState } from "../stores/reducer";
import { wrapper }  from '../stores/store';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here
      await store.dispatch(display); 
      const repos = store.getState().repoReducer.repoList

      const posts = allPosts.filter((post) => post.isFeatured);
      const featuredPosts = posts.map((post) =>
        pick(post, ['_id', 'title', 'slug', 'readingTime'])
      );
      return {
        props: {
          repos,
          featuredPosts
        },
      };
    }
);

function HomePage({
  featuredPosts,
  repos
}:any) {
  const customMetadata = {
    title: 'Home',
    canonical: '',
    openGraph: {
      url: '',
    },
  };

//  const videoId = "zClBmkVESnI";
//  const title = "Portfolio";

  return (
    <>
      <NextSeo {...customMetadata} />

      <Main>
        {/* Hero */}
        <Section>
          <header>
            <div className="flex flex-row ...">
              <div className='md:w-2/3'>
                <H1>Hi, I&apos;m Hung Nguyen</H1>
                <Paragraph className='mt-3 mb-3 text-gray-400 dark:text-slate-400'>
                  DevOps/SRE engineer
                </Paragraph>
                <Paragraph>
                An accomplished engineer who has successfully transitioned from the mechanical engineering field to the exciting world of Software Engineering. 
                Honed problem-solving skills and gained invaluable experience after over six years at global company and corporation.
                </Paragraph>
              </div>
              <div className='md:w-1/4 container mx-auto' >
                  <Image src="/static/images/avatar.png" width={200} height={200} alt="avatar" className='mx-auto' />
              </div>
            </div>
          </header>
          
        </Section>

        {/*
        <Section>
          <div className='mb-10'>
          <YoutubeIframe margin-right="auto" videoId={videoId} title={title} />
          </div>
        </Section>
        */}

        {/* What I do */}
        <Section>
          <H2>My Skills</H2>

          <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
            {jobs.map((job) => (
              <Card key={job.id} className='hover:border-primary hover:bg-teal-300 hover:bg-opacity-10'>
                <div className='flex flex-col'>
                  <H4>{job.title}</H4>
                  <Paragraph className='text-sm dark:text-gray-300'>
                    {job.description}
                  </Paragraph>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Featured Posts
        <Section>
          <H2>Research Projects</H2>

          <div className='mb-4 flex flex-col gap-6 md:flex-row'>
            {featuredPosts.map((post:any) => (
              <FeaturedPostCard
                key={post._id}
                title={post.title}
                slug={post.slug}
                readingTime={post.readingTime}
              />
            ))}
          </div>

          <Link href='/research'>
            <a
              className={clsx(
                'flex items-center text-gray-500 transition-colors ease-in-out',
                'hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              )}
            >
              See all projects <BsArrowRight className='ml-2' />
            </a>
          </Link>
        </Section> */}

        {/* Featured Projects */}
        <Section>
          <H2>Self Projects</H2>
          <Paragraph className='mb-4'>
            Here you can see some of the DevOps home labs I've worked on. These are fetched
            from Github using Github GraphQL API.
          </Paragraph>

          <div className='mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2'>
            {repos.map((repo:repoState) => (
              <GithubCard key={repo.id} repo={repo} />
            ))}
          </div>

        </Section>

        {/* Current Goals */}
        <Section>
          <H2>Certifications</H2>
          <CurrentGoals />
        </Section>
      </Main>
    </>
  );
}

export default wrapper.withRedux(HomePage);
