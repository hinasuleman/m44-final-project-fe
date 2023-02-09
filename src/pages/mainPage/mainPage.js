import { useState } from "react";
import CardContainer from "../../components/cardContainer/CardContainer";
import BookSearchModal from "../../components/modals/bookSearchModal/BookSearchModal";

const MainPage = ({setBooks, fetchError, setFetchError, books, user}) => {
    return ( 
        <>
        <BookSearchModal setBooks={setBooks} fetchError={fetchError} setFetchError={setFetchError}/>
        <CardContainer books={books} fetchError={fetchError} user={user}/>
        </>
    )
};

export default MainPage;
