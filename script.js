const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
function render() {
    let libraryBook = document.getElementById("library");
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }}
function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}
let newBookbtn =document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function() {
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "grid";
    newBookForm.style.gap = "1em";
})

document.querySelector("#new-book-form").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary(); 
})
document.querySelector("#close-btn").addEventListener("click", function() {
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
})
document.querySelector("#display-btn").addEventListener("click", function() {
    let title = document.querySelector("#title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let newBooks = ((title) + ("/") + (author) + ("/") + (pages) + ("/") + (read))
    const newDiv = document.createElement("div");
   newDiv.innerHTML = (newBooks);
   document.body.appendChild(newDiv);
})


