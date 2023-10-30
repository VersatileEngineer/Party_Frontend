
import {useState, useEffect, useRef} from 'react';
import { db } from '../firebase/config'; 

import {collection, onSnapshot, query, where} from 'firebase/firestore'

export const useCollection = (c, _q)=> {
    const [ documents, setDocuments] = useState(null);

    const q = useRef(_q).current

    useEffect(()=> {
        let ref = collection(db, c);

        if(q){
            ref = query(ref, where(...q))
        }

        const unsub = onSnapshot(ref, (snapshot)=> {
            let result = [];
            snapshot.docs.forEach(doc=> {
                result.push({...doc.data(), id: doc.id})
            })
            setDocuments(result);
        })

        return ()=> unsub()
    }, [c, q])

    return { documents}
}
