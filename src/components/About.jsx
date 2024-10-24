import React from 'react';
import terminal from '../assets/OPPAInomics.png'

const About = () => {
  return (
    <div className='w-full bg-black text-white text-center'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 '>
        <div id="roadmap">
        <h1> The Opp.AI</h1> <br /><br />
        <p className='text-3xl'>Opp.AI is truth terminal's boobs that takes its inspiration from the popular Japanese slang word Oppai, which means "breasts." The goal of Opp.ai is to create a meme and inclusive community around the token on Solana Chain!, where holders can come together to share their love for anime, manga, and titties with the power of "terminal of truths".</p>


        <img className='justify-center' src={terminal} alt="/" />
        <a href="https://app.uniswap.org/#/swap?outputCurrency=" target="_blank" rel="noopener noreferrer"> <button type="button" class="text-teal-400 hover:text-white border border-teal-400 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-teal-300 dark:text-teal-300 dark:hover:text-white dark:hover:bg-teal-400 dark:focus:ring-teal-900">BUY $OppAI</button></a>
        <a href="https://www.dextools.io/app/en/ether/pair-explorer/" target="_blank" rel="noopener noreferrer"> <button type="button" class="text-teal-400 hover:text-white border border-teal-400 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-teal-300 dark:text-teal-300 dark:hover:text-white dark:hover:bg-teal-400 dark:focus:ring-teal-900">DEXTOOLS</button></a>
          <div>
<iframe className='py-4 w-full aspect-video' src="https://dexscreener.com/ethereum/" title="dexchart"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
