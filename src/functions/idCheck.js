import { doc, getDoc } from "firebase/firestore";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function idCheck(db) {
    
    useEffect(()=>{
        const checkDocs = async () => {
            const userID = localStorage.getItem("userID")
            console.log(`${userID} IS THE USERID`)

            if(userID){
                console.log("user exists yippee")
                const docRef = doc(db, 'formData', userID)
                const document = await getDoc(docRef);

                if(document.exists){
                    console.log("IT EXISTS!! THEY HAVE PLAYED BEFORE")
                    redirect(`/game`)
                } else {
                    console.log("ooh fresh blood")
                }
            }
        }

        checkDocs();
        
    }, [db])

    // return doesExist


}