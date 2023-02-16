import React, { useState } from "react";
import CardContainer from "../../components/cardContainer/CardContainer";
import BookSearchModal from "../../components/modals/bookSearchModal/BookSearchModal";
import LibraryContainer from "../../components/libraryContainer/LibraryContainer";
import "./mainPage.css";

const MainPage = ({ setBooks, setBookList, bookList, fetchError, setFetchError, books, user }) => {
    const [showCardContainer, setShowCardContainer] = useState(false);
    const [showBookSearchModal, setShowBookSearchModal] = useState(false);
    const [showLibraryContainer, setShowLibraryContainer] = useState(true);

    const toggleSearchModal = () => {
        setShowBookSearchModal((prevState) => !prevState);
    };

    const onSearch = () => {
        setShowCardContainer(true);
        toggleSearchModal();
        setShowLibraryContainer(false);
    };

    return (
        <>
            <div className="mainpage">
                {showBookSearchModal && (
                    <div className="booksearch">
                        <BookSearchModal
                            setBooks={setBooks}
                            fetchError={fetchError}
                            setFetchError={setFetchError}
                            onSearch={onSearch}
                        />
                    </div>
                )}

                {showLibraryContainer && (
                    <LibraryContainer
                        setBooks={setBooks}
                        setBookList={setBookList}
                        bookList={bookList}
                        fetchError={fetchError}
                        setFetchError={setFetchError}
                        user={user}
                        onSearch={onSearch}

                    />
                )}

                {showCardContainer && (
                    <div className="cardcontainer">
                        <CardContainer
                            books={books}
                            fetchError={fetchError}
                            user={user}
                            setShowCardContainer={setShowCardContainer}
                            setShowLibraryContainer={setShowLibraryContainer} />
                    </div>
                )}

                <div className="searchagain">
                    <button className="searchbtn" onClick={toggleSearchModal}>
                        <p className="plus">+</p>
                    </button>
                </div>

            </div>
        </>
    );
};

export default MainPage;


