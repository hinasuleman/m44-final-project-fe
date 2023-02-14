import CardContainer from "../../components/cardContainer/CardContainer";
import LibraryContainer from "../../components/libraryContainer/LibraryContainer";
import BookSearchModal from "../../components/modals/bookSearchModal/BookSearchModal";
import Footer from '../..components/footer/Footer';

const MainPage = ({setBooks, fetchError, setFetchError, books, user}) => {
    return ( 
        <>
        <BookSearchModal setBooks={setBooks} fetchError={fetchError} setFetchError={setFetchError}/>
        <CardContainer books={books} fetchError={fetchError} user={user}/>
        <LibraryContainer fetchError={fetchError} user={user}/>
        </>
    )
};

export default MainPage;
