const initialState = {
    books: [
        // {id: 1, title: 'Dracula', author: 'Bram Stoker'},
        // {id: 2, title: 'React Redux TypeScript', author: 'o Relly'}
    ]
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload
            };
        default:
            return state;
    }

};

export default reducer;