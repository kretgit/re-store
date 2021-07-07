import React from "react";
import BookList from "../book-list";

const HomePage = () => {
    const books = [
        {id: 1, title: 'Dracula', author: 'Bram Stoker'},
        {id: 2, title: 'React Redux TypeScript', author: 'o Relly'}
    ];

    return (
        <BookList books={books}/>
    )
};

export default HomePage;