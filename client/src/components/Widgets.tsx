import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import TwoImag from './TwoImag'


const Widgets = () => {
  return (
    <main className='max-w-screen-xl mx-auto'>
        <TwoImag  img={ img1 }
                  textH='Fall at your fingertips'
                  lgOrSm={ false }
                  textP='Ordering your fall favorites is a snap with the app. Join Starbucks® Rewards and tap into fall.'
                  textB='Join now'
                  bgColor='bg-[#D4E9E2]' 
                  bgHovColor='bg-gray-300'
                  rOrl={ true }
                  textColor='black'
        />
        <TwoImag  img={ img2 }
                  textH='PSL for your BFF'
                  lgOrSm={ false }
                  textP='Treat your bestie to a Pumpkin Spice Latte and more with a thoughtful gift card.'
                  textB='Buy now'
                  bgColor='bg-[#006241]' 
                  bgHovColor='bg-gray-300'
                  rOrl={ false }
                  textColor='white'
        />
        <TwoImag  img={ img3 }
                  textH='Welcome home, pumpkin'
                  lgOrSm={ true }
                  textP='Fall favorites return with the blissful Pumpkin Spice Latte and smooth Pumpkin Cream Cold Brew.'
                  textB='Learn more'
                  bgColor='bg-[#006241]' 
                  bgHovColor='bg-gray-300'
                  rOrl={ true }
                  textColor='white'
        />
        <TwoImag  img={ img4 }
                  textH='Layers of baked apple yum'
                  lgOrSm={ true }
                  textP='Try the Apple Crisp Oatmilk Macchiato, now nondairy and with Starbucks® Blonde Espresso.'
                  textB='Learn more'
                  bgColor='bg-[#006241]' 
                  bgHovColor='bg-gray-300'
                  rOrl={ false }
                  textColor='white'
        />
        <TwoImag  img={ img5 }
                  textH='Falling for chai'
                  lgOrSm={ true }
                  textP='Cozy up to Chai Tea Latte’s warm spices balanced with creamy milk.'
                  textB='Order now'
                  bgColor='bg-[#006241]' 
                  bgHovColor='bg-gray-300'
                  rOrl={ true }
                  textColor='white'
        />
        <TwoImag  img={ img6 }
                  textH='Picks of the patch'
                  lgOrSm={ true }
                  textP='Choose a comforting classic: Pumpkin Cream Cheese Muffin, Pumpkin & Pepita Loaf or Pumpkin Scone.'
                  textB='Learn more'
                  bgColor='bg-[#006241]' 
                  bgHovColor='bg-gray-300'
                  rOrl={ false }
                  textColor='white'
        />
        <TwoImag  img={ img7 }
                  textH='Fall faves at your fingertips'
                  lgOrSm={ false }
                  textP='Order Starbucks® delivery with Uber Eats today.*'
                  textB='Order now'
                  bgColor='bg-[#D4E9E2]' 
                  bgHovColor='bg-gray-300'
                  rOrl={ true }
                  textColor='black'
        />
        <div className='relative flex justify-center mt-10 mx-auto'>
          <p className='absolute top-1/2 text-center h-'>*Menu limited. Restricted delivery area. Available in participating locations only. Fees subject to change. Prices for Starbucks® items purchased through Uber Eats may be higher than posted in stores or as marked. See the Uber Eats app for details.</p>
        </div>
    </main>
  )
}

export default Widgets