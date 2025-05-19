import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const { bookId, image, author, bookName, tags, category, publisher, rating, totalPages } = book;

    return (
        <Link to={`/books/${bookId}`}>
            <div className="card h-[480px] bg-base-100 shadow-xl p-6">
                <figure className='bg-slate-100 py-8 rounded-2xl'>
                    <img
                        src={image}
                        className='h-[166px] '
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-2'>
                        {
                            tags.map((tag, index) => <button
                                key={index}
                                className="btn btn-sm bg-green-50 rounded-2xl text-green-700 ">
                                {tag}</button>)
                        }
                    </div>
                    <h2 className="card-title text-3xl mt-2">
                        {bookName}
                    </h2>
                    <p className='text-xl'>By: {author}</p>
                    <div className='border-t-2 mt-3 mb-3 border-dashed'></div>
                    <div className="card-actions justify-between">
                        <div className="font-semibold">{category}</div>
                        <div className="font-semibold">{rating} <span className='ml-3'>⭐</span></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;