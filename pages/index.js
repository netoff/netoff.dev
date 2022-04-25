import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Mailto from 'react-protected-mailto'

import Favicon from '../components/Favicon'
import developerImage from '/public/images/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg'
// import background from '/public/images/bruno-bergher--8ttvM3Ca94-unsplash.jpg'
import me from '/public/images/dusan.png'

import MobileNav from '@/components/MobileNav'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHouse, faBriefcase, faGlobe } from '@fortawesome/free-solid-svg-icons'

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
            <div className="mb-8 flex hidden items-center text-base lg:flex">
              <div className="w-8 text-right">
                <FontAwesomeIcon icon={faHouse} className="mr-2 h-4 text-blue-800" size="xs" />
              </div>

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
              <span className="block w-8 text-right">
                <FontAwesomeIcon icon={faBriefcase} className="mr-2 h-4 text-blue-800" size="xs" />
              </span>
              Full-Stack Software Engineer
            </p>
            <p className="flex items-center justify-center pt-2 text-xs text-gray-600 lg:justify-start lg:text-sm">
              <span className="block w-8 text-right">
                <FontAwesomeIcon icon={faGlobe} className="mr-2 h-4 text-blue-800" size="xs" />
              </span>
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
              {[
                'html5',
                'css3',
                'git',
                'github',
                'ruby',
                'rspec',
                'javascript',
                'react',
                'postgresql',
                'heroku',
                'amazonwebservices',
              ].map((lang) => (
                <div className="skill" key={lang}>
                  <Image
                    title={lang}
                    alt={lang}
                    width="32"
                    height="32"
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${lang}/${lang}-original.svg`}
                  />
                </div>
              ))}
            </div>

            <div className="mt-4 text-xs text-base lg:ml-8">
              Copyright &copy; {new Date().getFullYear()} Dusan Pantelic |{' '}
              <Link href="/cookies_policy">
                <a className="underline">Cookies policy</a>
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
