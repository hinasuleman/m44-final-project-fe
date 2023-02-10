import WishlistContainer from "../../components/WishlistContainer/WishlistContainer.";

const WishlistPage = ({setBooks, fetchError, setFetchError, books, user}) => {
    return ( 
        <>
        <WishlistContainer fetchError={fetchError} user={user}/>
        </>
    )
};

export default WishlistPage;