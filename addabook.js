import React, { useState } from 'react';

function AddBook() {
  const [book, setBook] = useState({ id: '', title: '', author: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform actions like sending the book data to a backend server or storing it locally
    console.log('Book added:', book);
    // Clear the form after submission
    setBook({ id: '', title: '', author: '' });
  };

  return (
    <div>
      <h1>Add a Book</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" name="id" value={book.id} onChange={handleChange} />
        </label>
        <br />
        <label>
          Title:
          <input type="text" name="title" value={book.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          Author:
          <input type="text" name="author" value={book.author} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
