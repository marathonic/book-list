let lib = [];
/**
 * Log data on input
 * 
 * @param
 */
let bookTitle = document.querySelector('#book-title');
let bookAuthor = document.querySelector('#book-author');
let addBookBtn = document.querySelector('#add-book-btn');
let container = document.querySelector('.container');

function Book(title,author){
    this.title = title;
    this.author = author;
}

function addBookToLib(book){
    lib.push(book);
}

addBookBtn.addEventListener('click', function(){

    if(bookTitle.value == '' || bookAuthor.value == '') return;


    const book = new Book(bookTitle.value, bookAuthor.value);

    lib.push(book);
    
    let divTitle$ = document.createElement('div');
    let divAuthor$ = document.createElement('div');
    let pTitle$ = document.createElement('p');
    let pAuthor$ = document.createElement('p');
    pTitle$.textContent = `${book.title}`;
    pAuthor$.textContent = `${book.author}`;

    divTitle$.appendChild(pTitle$);
    divAuthor$.appendChild(pAuthor$);
    container.appendChild(divTitle$);
    container.appendChild(divAuthor$);
    


    lib.forEach(book => {
        console.log(book);
    });
})

