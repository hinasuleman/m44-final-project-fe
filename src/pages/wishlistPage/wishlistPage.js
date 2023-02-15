//import React, { useState } from "react";
import WishlistContainer from "../../components/wishlistContainer/WishlistContainer";
import "./wishlistPage.css";

const WishlistPage = ({ books, fetchError, setWishList, wishList }) => {

    return (
        <>
            <div className="wishlistMain">
                <div className="wishListContainer">
                <WishlistContainer books={books} fetchError={fetchError} setWishList={setWishList} wishList={wishList} />
                </div> 
                

            </div>
        </>
    )
};

export default WishlistPage;