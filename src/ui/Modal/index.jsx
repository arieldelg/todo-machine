import React from "react";
import { createPortal } from "react-dom";


const Modal = ({ children }) => {
    return createPortal(
        <div className='h-full w-full bg-slate-500 bg-opacity-70 absolute top-0 left-0 '>
            { children }
        </div>,
        document.getElementById('modal')
    );
}

export { Modal }