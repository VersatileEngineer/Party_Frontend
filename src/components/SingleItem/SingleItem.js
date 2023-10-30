import { Link } from "react-router-dom"



export default function SingleListItem( party ) {



  
    console.log(party)
  return (

    <div   key={party.id} className="card">
     
      <h3>{party.partyName}</h3>
      <p>{party.details} to make.</p>
      <div>{party.dueDate}</div>
      <li><Link to={`/list/${party.id}`}>Details</Link></li>
     </div>
     )
  
}
