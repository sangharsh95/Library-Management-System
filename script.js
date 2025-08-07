const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    image: "https://m.media-amazon.com/images/I/81AFhc5JvUL._SL1500_.jpg"
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    image: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    image: "https://m.media-amazon.com/images/I/81Ox+qf2m3L.jpg"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    image: "https://m.media-amazon.com/images/I/81YOuOGFCJL._SL1500_.jpg"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
  }
];

function displayBooks(filtered = books) {
  const list = document.getElementById("book-list");
  list.innerHTML = "";

  filtered.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = "book";

    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <div class="book-details">
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
      </div>
      <button onclick="deleteBook(${index})">🗑 Remove</button>
    `;

    list.appendChild(card);
  });
}

function addBook() {
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const genre = document.getElementById("genre").value.trim();
  const image = document.getElementById("image").value.trim();

  if (!title || !author || !genre || !image) {
    alert("Please fill all fields before adding a book.");
    return;
  }

  if (!image.startsWith("http")) {
    alert("Please provide a valid image URL starting with http or https.");
    return;
  }

  books.push({ title, author, genre, image });
  displayBooks();

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("genre").value = "";
  document.getElementById("image").value = "";
}

function deleteBook(index) {
  if (confirm("Are you sure you want to delete this book?")) {
    books.splice(index, 1);
    displayBooks();
  }
}

document.getElementById("search").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query)
  );
  displayBooks(filtered);
});

displayBooks();
