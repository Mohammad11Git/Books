import React from "react";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";

const Favourite = () => {
  const [Books, setBooks] = useState([]);
  useEffect(() => {

    fetch('http://localhost:5000/books')
    .then(res => res.json())
    .then(res =>{
       setBooks(res.data)
    })
    .catch(err => console.log(err))
   }, []);
  
    
    return ( 
        <div className="mt-28 px-4 lg:px-24 ">
          <h2 className=" p-1 text-5xl font-bold text-center hover:text-blue-700 transition-all ease-in "> Favourites Books</h2>
        <div className=" p-1 grid gap-8 my-12 lg:grid-cols-3  sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {
               Books.map((book) => (
                    <Card
                  >
                    <img src={book.imageURL} alt="" className="h-96 rounded" />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <p>
                        {book.title}
                
                      </p>
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                         It is "captivating", suggesting the book will be engaging and difficult to put down.
                    </p>              
                  
                    <button className="bg-blue-700 text-white font-semibold py-2 hover:bg-blue-300 transition-all ease-linear rounded"> Remove from favorite </button>
                    
                  </Card>
                  
                )
                )
            }
            
        </div>
        </div>
     );
}
 
export default Favourite;