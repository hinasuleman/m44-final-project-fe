import WishlistContainer from "../../components/wishlistContainer/WishlistContainer";

const WishlistPage = ({setBooks, fetchError, setFetchError, books, user}) => {
    return ( 
        <>
        <WishlistContainer fetchError={fetchError} user={user}/>
        </>
    )
};

export default WishlistPage;