class Library{

    constructor(booklist){
        this.booklist = booklist;
        this.issuedBooks = {};
    }

    getBookList(){
        this.booklist.forEach(
            element => {
                console.log(element);
            }
        );
    }

    issueBook(bookname, user){
        console.log(this.issuedBooks[bookname]);
        if(this.issuedBooks[bookname] == undefined){
            this.issuedBooks[bookname] = user;
        }
        else{
            console.log("This book is already issued");
        }
    }

    returnBook(bookname){
        delete this.issuedBooks[bookname];
    }

}