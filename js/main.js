// Fetch DATA from API
let data = null;
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => {
        data = json
        console.log("Data -> ", data);
        createTableRows()
    })

const getBooksByKey = function(key, value) {
    for (const book of books) {
        if (book[key] == value) {
            console.log("Book -> ", book)
        }
    }
}

const table = document.getElementById("data-table")
// console.log("Table -> ", table)
const createTableRows = function() {
    let rows = `
        <tr>
            <th>Title</th>
            <th>Sub-Title</th>
            <th>Year</th>
            <th>Pages</th>
        </tr>
    `;
    
    for (const book of data) {
        const template = `
            <tr>
                <td>${book.title}</td>
                <td>${book.id}</td>
                <td>${book.userId}</td>
                <td>${book.body}</td>
            </tr>
        `
        rows = rows + template
        console.log("rows -> ", rows)
    }
    table.innerHTML = rows;
}

createTableRows()

// getBooksByKey("position", 1);


// console.log("Books -> ", books);