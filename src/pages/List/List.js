
// styles
import './List.css';
// import { useEffect, useState } from 'react';

import { useCollection } from '../../hooks/useCollection';

// import { collection,getDocs } from 'firebase/firestore';
// import { db } from '../../firebase/config';
import ListItem from '../../components/ListItem/ListItem';

 
// import { useAuthContext } from '../../hooks/useAuthContext'



export default function List() {
    const {documents: parties} = useCollection('parties');
    // const [parties, setParties]= useState(null);

    // useEffect(()=>{
    //     const ref = collection(db, 'parties')

    //     getDocs(ref)
    //         .then((snapshot)=>{
    //         let result = [];
    //         snapshot.docs.forEach(doc=> {
    //             result.push({id:doc.id, ...doc.data()})
    //         })
    //         setParties(result)
    //         console.log(parties);
    //     })
        
    // },[])
      
   

  return (
    <div className='list'>
            {parties && <ListItem parties={parties} />}
            
        </div>
     
   
  )
}
