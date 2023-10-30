
// import BookList from '../components/BookList'
// import BookForm from '../components/BookForm'

// import { useCollection } from '../hooks/useCollection';
// import { useAuthContext } from '../hooks/useAuthContext'; 
import './Home.css'

export default function Home() {
    // const { user} = useAuthContext();
    // const {documents: books} = useCollection( 
    //     'books',
    //     ['uid', '==', user?.uid]
    //     )


    return (
        // <div >
        //     {books && <BookList books={books} />}
        //     <BookForm />
        // </div>
        <div className="welcome-message">
           Welcome to The party center
           We hope we are going to have a great time togather
        </div>
    );
}
