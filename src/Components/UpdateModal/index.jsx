import React from 'react';
import { createPortal } from 'react-dom';

const UpdateModal = ({ children }) => {
    return createPortal (
        <div className='bg-slate-500 w-screen h-screen text-black fixed top-0 right-0 bg-opacity-75 flex items-center flex-col justify-center z-50'>
            { children }
        </div>,
        document.getElementById('update-modal')
    )
}

export { UpdateModal }