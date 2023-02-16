import React, { useState } from "react";
import WishlistContainer from "../../components/wishlistContainer/WishlistContainer";
import "./wishlistPage.css";
import CardContainer from "../../components/cardContainer/CardContainer";
import BookSearchModal from "../../components/modals/bookSearchModal/BookSearchModal";


const WishlistPage = ({ books, setFetchError, fetchError, setWishList, wishList, user, setBooks, setBooksList }) => {
    const [showWishlistContainer, setShowWishlistContainer] = useState(true);
    const [showCardContainer, setShowCardContainer] = useState(false);
    const [showBookSearchModal, setShowBookSearchModal] = useState(false);


    const toggleSearchModal = () => {
        setShowBookSearchModal((prevState) => !prevState);
    };

    const onSearch = () => {
        setShowCardContainer(true);
        toggleSearchModal();
        setShowWishlistContainer(false);
    };

    return (
        <>
            <div className="wishlistMain">
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

                {showWishlistContainer && (
                    <div className="wishListContainer">
                        <WishlistContainer
                            books={books}
                            fetchError={fetchError}
                            setWishList={setWishList}
                            wishList={wishList} />
                    </div>
                )}

                {showCardContainer && (
                    <div className="cardcontainer">
                        <CardContainer
                            books={books}
                            fetchError={fetchError}
                            user={user}
                            setShowCardContainer={setShowCardContainer}
                            setShowWishlistContainer={setShowWishlistContainer}
                            page="wishlist"
                        />
                    </div>
                )}

                <div className="searchagain">
                    <button className="searchbtn" onClick={toggleSearchModal}>
                        <p className="plus">+</p>
                    </button>
                </div>

            </div>
        </>
    )
};

export default WishlistPage;