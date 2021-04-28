function schoolLibrary(input) {
    let bookShelf = input.shift().split('&');
    let [command, book,secondBook] = input.shift().split(' | ');

    while(command !== 'Done'){
        if(command === 'Add Book'){
            if(!(bookShelf.includes(book))){
        
                bookShelf.unshift(book);
            }
        }else if (command === 'Take Book'){
            if(bookShelf.includes(book)){
                let index = bookShelf.indexOf(book);
                bookShelf.splice(index,1);
            }

        }else if (command === 'Swap Books'){
            if(bookShelf.includes(book) && bookShelf.includes(secondBook)){
                let indexOfBook = bookShelf.indexOf(book);
                let indexOfSecond = bookShelf.indexOf(secondBook);
                
                bookShelf.splice(indexOfBook,1,secondBook);
                bookShelf.splice(indexOfSecond,1,book);

            }

        }else if (command === 'Insert Book'){
            bookShelf.push(book);
        }else if (command === 'Check Book'){
            if(bookShelf[Number(book)] !== undefined){
                console.log(bookShelf[Number(book)] );
            }
            
            // let index = Number(book);
            // if(index >= 0 && index <= bookShelf.length){
            // console.log(bookShelf[index]);
            // }
        }

        [command, book, secondBook] = input.shift().split(' | ');
    }
    console.log(bookShelf.join(', '))
}

schoolLibrary([
    'Don Quixote&The Great Gatsby&Moby Dick&Hamlet',
    'Add Book | The Odyssey',
    'Take Book | Don Quixote',
    "Insert Book | Alice's Adventures in Wonderland",
    'Check Book | 3',
    'Done',
    '',
    '',
    ''
  ])