import WishlistContainer from "../../components/wishlistContainer/WishlistContainer";

const WishlistPage = ({ setBooks, fetchError, setFetchError, books, user }) => {



    return (
        <>
            <div className="wishlistMain">
                <WishlistContainer fetchError={fetchError} user={user} />

            </div>
        </>
    )
};

export default WishlistPage;