import { BackgroundGradientAnimation } from './ui/background-gradient-animation'

export function BackgroundGradient() {
    return (
        <div className='absolute inset-0 opacity-50'>
            <BackgroundGradientAnimation />
        </div>
    )
}
