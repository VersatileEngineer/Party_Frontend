import { useEffect, useState } from "react"
import { db } from "../firebase/config" 
import {collection, getDoc, doc, onSnapshot} from 'firebase/firestore'

export const useDocument = (c, id) => {
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)

  // realtime document data
  useEffect(()=> {

    const ref = doc(db, c, id)

    // const unsubscribe = getDoc(ref).then((doc)=>{
    //   console.log(doc.data(), doc.id);
    // })
    const unsub =  onSnapshot(ref, (doc)=> {
      if(doc.data()) {
            setDocument({...doc.data(), id: doc.id})
            setError(null)
          }
          else {
            setError('No such document exists')
          }
        }, err => {
          console.log(err.message)
          setError('failed to get document')

      console.log(doc)
      console.log(doc.data(), doc.id);
     
    })
    
    return ()=> unsub()
  }, [c, id])

    return { document, error}
}
    
     

        