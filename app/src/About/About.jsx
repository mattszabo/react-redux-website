import React from 'react'

const About = () => {
  return(
    <div className='about'>
      <p>
        My name is Matt and I've been learning front end development for about 6 weeks.
        This single page app shows what I've learned so far. It was written in JS es6 (transpiled with babel) and uses react components and sass styling. For development I used webpack with hot module replacement, and for the build you see here I ran a production build - also with webpack - and served the resulting js and css on a nodejs express server, which in turn resides on an AWS EC2 server housed in Sydney, Australia.
      </p>
    </div>
  )
}

export default About
