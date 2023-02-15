import React, { useState } from "react";
import CardContainer from "../../components/cardContainer/CardContainer";
import BookSearchModal from "../../components/modals/bookSearchModal/BookSearchModal";
import "./mainPage.css";

const MainPage = ({ setBooks, fetchError, setFetchError, books, user }) => {
    const [showCardContainer, setShowCardContainer] = useState(false);
    const [showBookSearchModal, setShowBookSearchModal] = useState(false);

    const toggleSearchModal = () => {
        setShowBookSearchModal((prevState) => !prevState);
    };

    const onSearch = () => {
        setShowCardContainer(true);
        toggleSearchModal();
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


                {showCardContainer && (
                    <div className="cardcontainer">
                        <CardContainer books={books} fetchError={fetchError} user={user} />
                    </div>
                )}

                <div className="searchagain">
                    <button className="searchbtn" onClick={toggleSearchModal}>
                        <p className="plus">+</p>
                    </button>
                </div>

                {/* <LibraryContainer fetchError={fetchError} user={user}/> */}
            </div>
        </>
    );
};

export default MainPage;
