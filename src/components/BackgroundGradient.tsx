import { BackgroundGradientAnimation } from './ui/background-gradient-animation'

export function BackgroundGradient() {
    return (
        <div className='absolute inset-0 -z-[999] opacity-40'>
            <BackgroundGradientAnimation />
        </div>
    )
}
