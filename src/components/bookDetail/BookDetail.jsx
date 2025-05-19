import { useLoaderData, useParams } from "react-router-dom";


const BookDetail = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);
    const { bookId: currentBookId, image, author,
        bookName, tags, category, publisher, rating,
        totalPages, review } = book;

    return (
        <div className="grid md:grid-cols-2">
            <div>
                <img
                    className="w-72 ml-20 mt-6 mb-6"
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
                <div className="flex gap-2 mt-6">
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
            </div>
        </div>
    );
};

export default BookDetail;