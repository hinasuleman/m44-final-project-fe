export async function fetchBooks(setBooks) {
    const res = await fetch(
      "https://www.googleapis.com/books/v1/volumes?q=intitle:matilda"
    );
    const data = await res.json();
  
    setBooks(data.items);
  }
  