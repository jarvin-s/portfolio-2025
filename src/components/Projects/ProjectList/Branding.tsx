'use client'

import React from 'react'

const Branding = () => {
    return (
        <div className='my-8 max-w-4xl'>
            <div className='mx-auto mb-8 flex max-w-md flex-col gap-4 text-center'>
                <h2 className='text-3xl font-bold'>Project overview</h2>
                <p>
                    I created a branding for a techno artist named Boris Schmidt
                    to promote his music.
                </p>
            </div>

            <div className='mb-8 grid grid-cols-1 gap-6 md:grid-cols-2'>
                <div>
                    <h3 className='mb-2 text-xl font-semibold'>Title</h3>
                    <p>Text</p>
                </div>

                <div>
                    <h3 className='mb-2 text-xl font-semibold'>Title</h3>
                    <p>Text</p>
                </div>
            </div>
        </div>
    )
}

export default Branding
