import React, { useState } from 'react';
import './styles.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddBook from './components/addabook1';
function LibraryManagementSystem() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ id: '', title: '', author: '' });
  const [searchId, setSearchId] = useState('');
  const [searchedBook, setSearchedBook] = useState(null);

  const addBook = () => {
    setBooks([...books, newBook]);
    setNewBook({ id: '', title: '', author: '' });
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const updateBook = (id, updatedBook) => {
    setBooks(books.map(book => book.id === id ? updatedBook : book));
  };

  const searchBook = (id) => {
    const book = books.find(book => book.id === id);
    setSearchedBook(book);
  };
  function addBook() {
    return (
      <Router>
        <div>
          <Route path="./addabook" component={AddBook} />
        </div>
      </Router>
    );
  }
  
  

  return (
    <div>
      <h1>Library Management System</h1>
      <div>
        <h2>Add a Book</h2>
        <input type="text" placeholder="ID" value={newBook.id} onChange={(e) => setNewBook({...newBook, id: e.target.value})} />
        <input type="text" placeholder="Title" value={newBook.title} onChange={(e) => setNewBook({...newBook, title: e.target.value})} />
        <input type="text" placeholder="Author" value={newBook.author} onChange={(e) => setNewBook({...newBook, author: e.target.value})} />
        <button onClick={addBook}>Add Book</button>
      </div>
      <div>
        <h2>Delete a Book by ID</h2>
        <input type="text" placeholder="ID" onChange={(e) => setSearchId(e.target.value)} />
        <button onClick={() => deleteBook(searchId)}>Delete Book</button>
      </div>
      <div>
        <h2>Update a Book</h2>
        <input type="text" placeholder="ID" onChange={(e) => setSearchId(e.target.value)} />
        <input type="text" placeholder="New Title" value={newBook.title} onChange={(e) => setNewBook({...newBook, title: e.target.value})} />
        <input type="text" placeholder="New Author" value={newBook.author} onChange={(e) => setNewBook({...newBook, author: e.target.value})} />
        <button onClick={() => updateBook(searchId, newBook)}>Update Book</button>
      </div>
      <div>
        <h2>Search a Book by ID</h2>
        <input type="text" placeholder="ID" onChange={(e) => setSearchId(e.target.value)} />
        <button onClick={() => searchBook(searchId)}>Search Book</button>
        {searchedBook && (
          <div>
            <p>ID: {searchedBook.id}</p>
            <p>Title: {searchedBook.title}</p>
            <p>Author: {searchedBook.author}</p>
          </div>
        )}
      </div>
      <div>
        <h2>Get All Books</h2>
        {books.map(book => (
          <div key={book.id}>
            <p>ID: {book.id}</p>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LibraryManagementSystem;
