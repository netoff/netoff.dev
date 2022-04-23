import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Mailto from 'react-protected-mailto'

import Favicon from '../components/Favicon'
import developerImage from '/public/images/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg'
import background from '/public/images/bruno-bergher--8ttvM3Ca94-unsplash.jpg'
import me from '/public/images/dusan.png'

import MobileNav from '@/components/MobileNav'

import skills from '@/data/skills.json'

export async function getStaticProps(context) {
  return {
    props: {},
  }
}

export default function Home() {
  return (
    <div className="relative h-full bg-gray-900 leading-normal tracking-wider text-gray-900 antialiased">
      <Head>
        <Favicon />
        <title>netoff | Software Engineer</title>
      </Head>

      {/* <Image src={background} layout="fill" alt="Road to freedom" /> */}

      <div className="mx-auto mt-12 flex h-auto max-w-4xl flex-wrap items-center lg:my-0 lg:h-screen">
        <div
          id="profile"
          className="z-10 mx-6 mb-8 w-full rounded-lg bg-white shadow-2xl lg:mx-0 lg:mb-0 lg:w-3/5 lg:rounded-l-lg"
          style={{ backgroundColor: 'rgba(255, 255, 255, .7)' }}
        >
          <MobileNav />

          <div className="p-4 text-center md:p-8 lg:text-left">
            <div className="mb-8 flex hidden lg:ml-8 lg:flex">
              <div className="mr-2">netoff.dev</div>
              <div className="main-nav-link">
                <Link href={'/blog'}>Blog</Link>
              </div>
              <div className="main-nav-link">
                <Link href={'/projects'}>Projects</Link>
              </div>
              <div className="main-nav-link">
                <Link href={'/about'}>About</Link>
              </div>
            </div>

            <div className="mx-auto -mt-12 block h-32 w-32 rounded-full border border-blue-400 bg-white bg-cover bg-center shadow-xl md:-mt-24 lg:hidden">
              <Image
                src={me}
                title="Dusan Pantelic"
                alt="Dusan Pantelic"
                className="rounded-full bg-white"
              />
            </div>

            <div className="pt-8 lg:pt-0">
              <div className="flex flex-row items-baseline">
                <div className="mr-2 hidden h-6 w-6 rounded-full border-2 border-blue-400 bg-gray-200 lg:inline-block">
                  <Image
                    src={me}
                    title="Dusan Pantelic"
                    alt="Dusan Pantelic"
                    className="rounded-full bg-gray-200"
                  />
                </div>
                <h1 className="mx-auto text-center text-3xl font-bold lg:mx-0">Dusan Pantelic </h1>
              </div>
              <div className="mx-auot border-b border-blue-500 opacity-50 lg:mx-8 "></div>
              <h2 className="text-xl lg:ml-8">
                aka <span className="font-bold">netoff</span>
              </h2>
            </div>

            <p className="flex items-center justify-center pt-4 text-base font-bold lg:justify-start">
              <svg
                className="h-4 fill-current pr-4 text-blue-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              Full-Stack Software Engineer
            </p>
            <p className="flex items-center justify-center pt-2 text-xs text-gray-600 lg:justify-start lg:text-sm">
              <svg
                className="h-4 fill-current pr-4 text-blue-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>
              Serbia (
              <a
                className="link"
                href="https://en.wikipedia.org/wiki/Central_European_Time"
                target="_blank"
                rel="noreferrer"
              >
                CET - Central European Time
              </a>
              )
            </p>
            <ul className="list-none pt-4 text-sm lg:list-disc lg:pl-8">
              <li className="mb-2">
                Hola! My name is <span className="font-bold">Dusan</span>. Some people know me as
                <a className="link ml-1" href="https://github.com/netoff">
                  netoff
                </a>
                .
              </li>
              <li>
                I’ve been in Software Engineering and Web Development for more than half of my life.
                I have
                <span className="ml-1 font-bold">15+ years</span> of experience with
                <span className="ml-1 font-bold">Ruby on Rails</span>, and
                <span className="ml-1 font-bold">7+ years</span> of experience with
                <span className="ml-1 font-bold">React/JS.</span>
              </li>
            </ul>

            <div className="mt-8 lg:ml-8">
              <Mailto email="me@netoff.dev" className="button" />
              &nbsp;or&nbsp;
              <a href="https://calendly.com/netoff/15min" className="button">
                Schedule a Meeting
              </a>
            </div>

            <div className="items-left mx-auto mt-8 flex flex-wrap justify-between lg:ml-8 lg:pb-0">
              {Object.entries(skills).map(([lang, title], i) => (
                <div className="skill" key={i}>
                  <Image
                    title={title}
                    alt={title}
                    width="32"
                    height="32"
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${lang}/${lang}-original.svg`}
                  />
                </div>
              ))}
            </div>

            <div className="mt-4 text-xs text-base lg:ml-8">
              Copyright &copy; {new Date().getFullYear()} Dusan Pantelic |{' '}
              <Link href="/privacy">
                <a className="underline">Privacy policy</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden w-full lg:block lg:w-2/5">
          <Image
            className="rounded-none shadow-2xl lg:rounded-lg lg:rounded-l-none"
            priority
            src={developerImage}
            title="Dusan Pantelic"
            alt="Dusan Pantelic"
          />
        </div>
      </div>
    </div>
  )
}
