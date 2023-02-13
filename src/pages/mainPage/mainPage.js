import CardContainer from "../../components/cardContainer/CardContainer";
import LibraryContainer from "../../components/libraryContainer/LibraryContainer";
import BookSearchModal from "../../components/modals/bookSearchModal/BookSearchModal";
import './mainPage.css'

const MainPage = ({ setBooks, fetchError, setFetchError, books, user }) => {
    return (
        <>
            <div className="mainpage">

                <div className='booksearch' >
                    <BookSearchModal setBooks={setBooks} fetchError={fetchError} setFetchError={setFetchError} />
                </div>
                <div className='cardcontainer'>
                    <CardContainer books={books} fetchError={fetchError} user={user} />
                </div>

                {/* <LibraryContainer fetchError={fetchError} user={user}/> */}
            </div>
        </>
    )
};

export default MainPage;
