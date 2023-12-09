import React from "react";
import { usehighOrderFunc } from "./useHighOrderFunc";


const ChangeAlert = ({ syncUp, setOpenUpdateModal, openUpdateModal }) => {
    const { storage, update } = usehighOrderFunc(syncUp, setOpenUpdateModal, openUpdateModal)
    if (storage) {
        return (
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-4xl font-bold ">Hubo Cambios, desea volver a cargar la pagina?</h1>
                <button className="bg-blue-800 text-black px-4 py-1 text-xl font-semibold rounded-md hover:bg-blue-600" onClick={update}>Volver a Cargar</button>
            </div> 
        )
    }
}



export { ChangeAlert }

