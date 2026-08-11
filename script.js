const myLibrary =[];


function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function addToLibrary(title,author,pages,read){
    myLibrary.push(new Book(title,author,pages,read));
}

addToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addToLibrary("1984", "George Orwell", 328, false);
addToLibrary("The Midnight Library", "Matt Haig", 304, true);
addToLibrary("A Short History of Nearly Everything", "Bill Bryson", 544, false);
addToLibrary("Pride and Prejudice", "Jane Austen", 432, true);



const displayBox=document.querySelector(".book-display");

function displayBooks() {
    displayBox.innerHTML = "";

    for (let book of myLibrary) {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>No. of Pages: ${book.pages}</p>
            <p>${book.read ? "Read" : "Not Read"}</p>
        `;

        displayBox.appendChild(card);
    }
}

displayBooks();

const addBtn = document.querySelector("#add-book-dialog-btn");
const addDialog= document.querySelector("#add-book-dialog");

addBtn.addEventListener("click",()=> {addDialog.showModal()});

const cancelBtn= document.querySelector("#cancel-add-book-btn");
cancelBtn.addEventListener("click",()=>{addDialog.close()});

const form= document.querySelector("#add-book-form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const title= document.querySelector("#title").value;
    const author= document.querySelector("#author").value;
    const pages= document.querySelector("#pages").value;
    const read= document.querySelector("#read").checked;

    addToLibrary(title,author,pages,read);
    displayBooks();

    form.reset();
    addDialog.close();
});

