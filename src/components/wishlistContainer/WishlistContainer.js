import React, { useState, useEffect } from "react";
import './WishlistContainer.css';
import WishlistCard from '../wishlistCard/WishlistCard';
import { wishListBooks } from "../../utilities/utilities";

const WishlistContainer = () => {
  const [wishList, setWishList] = useState({ books: [] });

  useEffect(() => {
    const fetchData = async () => {
      const data = await wishListBooks();
      console.log("data from wishListBooks:", data);
      setWishList(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("wishList: ", wishList);
  }, [wishList]);

  return (
    <div className="wishListContainer">
      <div className="wlcontainer">
        <div className="wishlisttitle">
          <h1>Wish List</h1>
        </div>
        <div className="wlContainer">
          {wishList.books.map((book, index) => (
            <WishlistCard key={index} bookItem={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistContainer;