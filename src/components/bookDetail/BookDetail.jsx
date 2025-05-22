import { useLoaderData, useParams } from "react-router-dom";


const BookDetail = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);

    const { bookId: currentBookId, image, author,
        bookName, tags, category, publisher, rating,
        totalPages, review } = book;


    const handleMarkAsRead = () => {

    }

    return (
        <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-100 rounded-lg mt-6 mb-6">
                <img
                    className="w-72 ml-36 mt-6 mb-6"
                    src={image} alt="" />
            </div>
            <div className="mt-4">
                <h2 className="font-bold text-2xl">
                    {bookName}
                </h2>
                <p>{author}</p>
                <div className="border mb-5 mt-5"></div>
                <h3 className="font-bold">{category}</h3>
                <div className="border mb-5 mt-5"></div>
                <p>
                    <span className="font-bold">Review:</span>
                    <span className="text-xs">{review}</span>
                </p>
                <div className="border mb-5 mt-5"></div>
                <div className="flex gap-2 mt-6 mb-2">
                    <h2 className="font-bold">Tags:</h2>
                    {
                        tags.map((tag, inbox) => <button
                            key={inbox}
                            className="btn btn-sm bg-green-50 rounded-xl
                     text-green-700 ">
                            {tag}
                        </button>)
                    }
                </div>
                <div>
                    <button
                        onClick={handleMarkAsRead}
                        className="hover:bg-green-100 rounded-lg border pt-1 
                    pb-1 text-sm pl-4 pr-4 mb-4 mt-4">
                        Marks as Read</button>
                    <button

                        className="hover:bg-green-100 hover:text-black ml-2 bg-green-700 text-white rounded-lg border pt-1 
                    pb-1 pl-4 pr-4 mb-4 mt-4 text-sm">
                        Add to Wish List</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;