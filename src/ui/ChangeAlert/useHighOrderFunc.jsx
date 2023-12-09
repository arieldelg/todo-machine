import React from "react";
import { useEffect } from 'react';

const usehighOrderFunc = (syncUp, setOpenUpdateModal, openUpdateModal) => {
    const [storage, setStorage] = React.useState(false)
    useEffect(() => {
        if (openUpdateModal) {
            setStorage(true)
        }
    }, [])
    const update = () => {
        setStorage(false)
        syncUp()
        setOpenUpdateModal(false)
    }
    return {
        storage,
        update,
    }
}


export { usehighOrderFunc }