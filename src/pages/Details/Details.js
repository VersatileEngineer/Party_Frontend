import { Link, useParams } from "react-router-dom"
import { useDocument } from "../../hooks/useDocument"
import { useAuthContext } from "../../hooks/useAuthContext";
import './Details.css'
import Card from "../../components/Card/Card";

export default function Details() {
  const { id } = useParams()
  const { user } = useAuthContext();
  const userId = user?.uid;

  const { document, error } = useDocument('parties', id)
  console.log(document);
  const canEdit = (document?.author === userId)
  console.log('canEdit', canEdit);
  if (error) {
    return <div className="error">{error}</div>
  }
  if (!document) {
    return <div className="loading">Loading...</div>
  }

  return (document && (
    <Card className="party-item">
      <div key={document.id} className="party-item-description">

        <h3>{document.partyName}</h3>
        <p>{document.details} to make.</p>
        <p>{document.createdBy} Created by</p>
        <p>{document.category.label} </p>
        <div>{document.dueDate}</div>
        {canEdit && (
          <div><Link to={`/list/${id}/edit`} party={document} >Edit</Link></div>
        )}
      </div>
    </Card>
  )
  )
}