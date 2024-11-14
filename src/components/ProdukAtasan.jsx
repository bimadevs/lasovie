import React from 'react';
import {useNavigate} from 'react-router-dom'

const ProductCardAtasan = ({ product }) => {
    const navigate = useNavigate()
    return (
        <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg mt-10">
            <div className="flex flex-col md:flex-row items-center">
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                    <img alt={product.title} className="w-full h-auto rounded-lg" src={product.imageUrl} />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 md:pl-8 mt-4 md:mt-0">
                    <h1 className="text-2xl lg:text-3xl font-semibold ">{product.title}</h1>
                    <p className=" mb-4 text-lg">{product.description}</p>
                    <p className="font-medium text-gray-700 mb-4">{product.brand}</p>

                    <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
                        {product.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                        ))}
                    </ul>

                    <p className="text-gray-600 font-light mb-4">{product.warranty}</p>
                    <p className="font-semibold text-gray-700 mb-4">{product.shoppingMessage}</p>

                    <a onClick={() => navigate("/market")}>
                        <button className="bg-slate-500 hover:bg-slate-600 text-white font-semibold px-5 py-2 rounded-lg transition duration-200">
                            Where To Buy
                        </button>
                    </a>

                    <div className="mt-6">
                        <span className="text-gray-500">Category:</span>
                        <a onClick={() => navigate("/atasan")} className="cursor-pointer  hover:underline">{product.category}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardAtasan;