const getTheTitles = function(bookList) {
    let flattened = bookList.flat();
    let bookTitles = []
    console.log(bookList.length);

    for (let i = 1; i<bookList.length-1;i ++) {
            let bookDetails = bookList[i].title
            bookTitles.push(bookDetails[1])
    }

    return bookTitles;
};


// Do not edit below this line
module.exports = getTheTitles;
