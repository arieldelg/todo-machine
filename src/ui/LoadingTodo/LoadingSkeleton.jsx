import React from "react";

const LoadingSkeleton = () => {
    return(
        <div className="flex w-full gap-4 h-max bg-slate-500 py-2 rounded-lg px-2 relative items-center animate-pulse">
            <span className='bg-slate-500'></span>
            <span className=" w-20 h-8 animate-pulse"></span>
            <span className='absolute -top-3.5 right-2 w-8 h-8 rounded-full bg-slate-500'></span>
        </div> 
    )
}

export { LoadingSkeleton }