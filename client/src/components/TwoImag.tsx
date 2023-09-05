import React from 'react'
import img from '../assets/img1.jpg'

interface Isection {
    img: string
    textH: string
    lgOrSm: boolean
    textP: string
    textB: string
    bgColor: string 
    bgHovColor: string
    rOrl: boolean
    textColor: string
}

const TwoImag = (props: Isection) => {

    const ClassH = props.lgOrSm ? ['text-', props.textColor, ' font-semibold text-5xl content-center'] : ['text-', props.textColor, ' font-semibold text-2xl content-center']
    const ClassP = props.lgOrSm ? ['text-', props.textColor ,' text-2xl my-12'] : ['text-', props.textColor ,' text-xl my-12']
    const ClassBg = [props.bgColor, 'w-full flex sm:flex-col']
    const ClassBgHov = ['ease-in duration-100 h-9 w-28 border', ' border-', props.textColor,' text-', props.textColor, ' rounded-full hover:',props.bgHovColor, ' font-medium text-lg']

    return (
        <section className='mt-9'>
            <div className={ ClassBg.join(' ') }>
                { props.rOrl && <div className='relative w-1/2 sm:w-full h-auto'>
                    <img className='block object-contain h-full w-full' src={ props.img } alt="" />
                </div> }
                <div className='relative w-1/2 sm:w-full flex-col'>
                    <div className='mx-24 my-16'>
                        <h1 className={ ClassH.join('') }>
                            { props.textH }
                        </h1>
                        <p className={ ClassP.join('') }>
                            { props.textP }
                        </p>
                        <button className={ ClassBgHov.join('') } >
                            { props.textB }
                        </button>
                    </div>
                    
                </div>
                { !props.rOrl && <div className='relative w-1/2 sm:w-full h-auto'>
                    <img className='block object-contain h-full w-full' src={ props.img } alt="" />
                </div> }
            </div>
        </section>
  )
}

export default TwoImag