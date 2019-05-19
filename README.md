# MyReads Project

This is my submission for the first project for React Nanodegree (my-reads).
For further details on this assignment please see [this page](https://github.com/udacity/reactnd-project-myreads-starter)

## Getting Started

* install all project dependencies with `npm install`
* start the development server with `npm start`
* A new browser window will open the landing page

## Design
* The project consists of two pages:
    * A landing page which lists in the books in our library (Currently Reading, Want to Read, Read)
    * A search page to search for and add new books to our library
    
 ### Component Structure
 ```bash
 ├── App
    ├── ListBooks
        ├──  BookShelf
            ├── BookGrid
                ├── Book
    ├── Search
        ├──  BookGrid
            ├── Book
 ```
 
 ### Noteworthy points
 
 * Use [Debounce](https://github.com/slorber/awesome-debounce-promise) to reduce unnecessary client-server communication while searching for books
 * BookGrid is reused between BookShelf and Search to provide uniform presentation of books
 * See [Search Terms](https://github.com/labheshr/react-myreads/blob/master/SEARCH_TERMS.md) for sample of search on books