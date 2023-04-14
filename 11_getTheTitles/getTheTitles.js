const getTheTitles = function(bookList) {
    let flattened = bookList.flat();
    let bookTitles = []
    for (let i=0;i<flattened.length;i++) {
        bookTitles.push(flattened[i].title)

    }
    return bookTitles;
};
// Do not edit below this line
module.exports = getTheTitles;
