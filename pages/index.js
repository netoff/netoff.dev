import Head from 'next/head'
import Image from 'next/image'
import Mailto from 'react-protected-mailto'
import Favicon from '../components/favicon'
import developerImage from '/public/images/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg';
import background from '/public/images/bruno-bergher--8ttvM3Ca94-unsplash.jpg';
import me from "/public/images/dusan.png";

export default function Home() {
  return (
    <div className="antialiased text-gray-900 leading-normal tracking-wider bg-gray-200 h-full"  >
        <Head>
          <Favicon />
          <title>netoff | Software Engineer</title>
        </Head>

        <Image src={background} layout="fill" priority alt="Road to freedom" />

        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto mt-12 lg:my-0">    
          <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg shadow-2xl bg-white mx-6 lg:mx-0 z-10 mb-8 lg:mb-0" style={{backgroundColor: "rgba(255, 255, 255, .7)"}}>    
            <div className="p-4 md:p-12 text-center lg:text-left">
              <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-12 md:-mt-24 h-32 w-32 bg-cover bg-center border border-blue-400 bg-white" >
                <Image src={me} title="Dusan Pantelic" alt="Dusan Pantelic" className="rounded-full bg-white" />
              </div>
              
              <h1 className="pt-8 lg:pt-0">
                <div className='lg:flex'>
                  <div className='hidden w-12 h-12 lg:inline-block bg-gray-200 rounded-full border-2 border-blue-400 mr-4'>
                    <Image src={me} title="Dusan Pantelic" alt="Dusan Pantelic" className="rounded-full bg-gray-200"/>
                  </div>
                  <div>
                  <div className='text-3xl font-bold my-auto'>Dusan Pantelic aka netoff</div>
                  <div className="mx-auto lg:mx-0 pt-2 border-b border-blue-500 opacity-50"></div>
                  </div>
                </div>
              </h1>
              
              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                <svg className="h-4 fill-current text-blue-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg> 
                Full-Stack Software Engineer
              </p>
              <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <svg className="h-4 fill-current text-blue-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"/></svg> 
                Serbia (
                  <a className='link' href="https://en.wikipedia.org/wiki/Central_European_Time" target="_blank" rel="noreferrer">CET - Central European Time</a>/
                  <a className='link' href="https://en.wikipedia.org/wiki/UTC%2B01:00" target="_blank" rel="noreferrer">UTC+1</a>
                )
              </p>
              <p className="pt-8 text-sm">
                Hello, my name is <span className='font-bold'>Dusan</span>. Some people know me as 
                <a className='link ml-1' href="https://github.com/netoff">netoff</a>. 
              </p>
              <p className="pt-4 text-sm">
                I’ve been in Software Engineering and Web Development for more than half of my life.
                I have 
                <span className='font-bold ml-1'>15+ years</span>  of experience with 
                <span className='font-bold ml-1'>Ruby on Rails</span>, and
                <span className='font-bold ml-1'>7+ years</span> of experience with 
                <span className='font-bold ml-1'>React/JS.</span>
              </p>
              {/* <p className="pt-4 text-sm">
                <a className="text-blue-600" href="#">Read more about myself…</a>
                I am the Ruby School and Turbo Funnel creator, and I running them passionately is what 
                I do day to day. Ruby School is the easiest way for non-programmers (e.g., non-technical founders) 
                to learn Web Programming. Turbo Funnel is the simplest Inbound marketing tool, helping people 
                turbocharging their conversions.
              </p>
              */}

              <div className="mt-6 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-left justify-between">
                <span className='hidden lg:block'>Skills: </span>
                {[
                  'html5',
                  'css3',
                  'git',
                  "github",
                  'ruby',
                  'rspec',
                  'javascript',
                  'react',
                  'postgresql',
                  'amazonwebservices',
                  'heroku',
                  ].map(lang => 
                    <div className='skill' key={lang}>
                      <Image title={lang} alt={lang} width="32" height="32" src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${lang}/${lang}-original.svg`} />
                    </div>
                  )}
                
                </div>

              <div className="pt-8 pb-4">
                Email <Mailto email="me@netoff.dev" className="button" />
                &nbsp;or&nbsp;
                <a href="https://calendly.com/netoff/15min" target="_blank" rel="noreferrer" className="button">
                  Schedule a Meeting
                </a>
              </div>
      
            </div>
          </div>

          <div className="w-full lg:w-2/5 hidden lg:block">
            <Image className='rounded-none lg:rounded-lg lg:rounded-l-none shadow-2xl' src={developerImage} title="Dusan Pantelic" alt='Dusan Pantelic' />
          </div>
          
        </div>
    </div>
  )
}
