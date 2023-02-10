import CardContainer from "../../components/cardContainer/CardContainer";
import BookSearchModal from "../../components/modals/bookSearchModal/BookSearchModal";

const mainPage = ({setBooks, fetchError, setFetchError, books, user}) => {
    return ( 
        <>
        <BookSearchModal setBooks={setBooks} fetchError={fetchError} setFetchError={setFetchError}/>
        <CardContainer books={books} fetchError={fetchError} user={user}/>
        </>
    )
};

export default mainPage;
