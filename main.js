window.addEventListener('DOMContentLoaded',()=>{
    const storage = [];

    function Book(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    const addBookButton = document.getElementById('addbook');
    const formsubmit = document.getElementById('form-submit');
    const formclose = document.getElementById('form-close');
    const dialog = document.getElementById('popup'); 
    const bookContainer=document.getElementById('book-container');

    const b1 = new Book("Winds of Winter", "GRRM", 900);
    const b2 = new Book("The Lord of the Rings", "Tolkien", 750);
    storage.push(b1,b2);
    function showLibrary(){
        for(let i=0;i<storage.length;i++){
            const newbook = document.createElement('div');
            newbook.className= 'newbook';
        
            const title=document.createElement('div');
            const booktitle = document.createElement("div");
            title.className='title';
            booktitle.className='booktitle';
            booktitle.textContent = storage[i].title;
            booktitle.style.fontWeight = 'bold';
            title.appendChild(booktitle);
        
            const author = document.createElement('div');
            author.className='author';
            const authorlabel = document.createElement('div');
            authorlabel.className='authorlabel';
            authorlabel.textContent="Author: ";
        
            const authorName = document.createElement('div');
            authorName.className = 'authorname';
            authorName.textContent = storage[i].author;
            author.appendChild(authorlabel);
            author.appendChild(authorName);
        
            const pages = document.createElement('div');
            pages.className='pages';
            const pageno = document.createElement('div');
            pageno.className='pageno';
            pageno.textContent=storage[i].pages;
        
            const pagelabel = document.createElement('div');
            pagelabel.textContent="Page count:"
            pagelabel.className='pagelabel';
            pages.appendChild(pagelabel);
            pages.appendChild(pageno);
        
            const check = document.createElement('div');
            check.className = 'check';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            const checklabel = document.createElement('div');
            checklabel.textContent = 'Have you read this book?';
            check.appendChild(checkbox);
            check.appendChild(checklabel);
        
            newbook.appendChild(title);
            newbook.appendChild(author);
            newbook.appendChild(pages);
            newbook.appendChild(check);
            bookContainer.appendChild(newbook);
        }
    }

    function addBook(){
        bookContainer.innerHTML="";
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pagecount = document.getElementById('pagecount').value;
        const book = new Book(title,author,pagecount);
        storage.push(book);
        dialog.close();
        showLibrary();
    }

    showLibrary();

    addBookButton.addEventListener('click', () => {
        dialog.showModal();
    });
    formsubmit.addEventListener('click', (event) => {
        event.preventDefault(); //prevent the default behaviour of the page reloading and the input not being used to create new book
        addBook();
    });
    formclose.addEventListener('click',() =>{
        dialog.close();
    });
});


