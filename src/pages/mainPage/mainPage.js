import React, { useState } from "react";
import CardContainer from "../../components/cardContainer/CardContainer";
import LibraryContainer from "../../components/libraryContainer/LibraryContainer";
import BookSearchModal from "../../components/modals/bookSearchModal/BookSearchModal";
import './mainPage.css'

const MainPage = ({ setBooks, fetchError, setFetchError, books, user }) => {
    const [showCardContainer, setShowCardContainer] = useState(false);
    const [showBookSearchModal, setShowBookSearchModal] = useState(true);

    const onSearch = () => {
        setShowCardContainer(true);
        setShowBookSearchModal(false);
        console.log('!!!')
    }
console.log(user);
    return (
        <>
            <div className="mainpage">

                {showBookSearchModal && (
                    <div className='booksearch' >
                        <BookSearchModal setBooks={setBooks} fetchError={fetchError}
                            setFetchError={setFetchError} onSearch={onSearch} />
                    </div>
                )}
                <div className="searchagain">
                    <button className="searchbtn" onClick={() => setShowBookSearchModal(true)}>Search Again</button>
                </div>
                {showCardContainer &&
                    <div className='cardcontainer'>
                        <CardContainer books={books} fetchError={fetchError} user={user} />
                    </div>
                }

                {/* <LibraryContainer fetchError={fetchError} user={user}/> */}
            </div>
        </>
    )
};

export default MainPage;
