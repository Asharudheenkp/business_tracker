import WebLayout from "@/Layouts/WebLayout";
import { Link } from "@inertiajs/react";
import { useState } from "react";

const products = [
    {
        id: 1,
        name: "Taco",
        description: "A delicious taco filled with fresh ingredients.",
        price: "$5.99",
        image: "https://via.placeholder.com/300x200?text=Taco",
    },
    {
        id: 2,
        name: "Porikadi",
        description: "Crispy fried snack with a tasty filling.",
        price: "$3.49",
        image: "https://via.placeholder.com/300x200?text=Porikadi",
    },
    {
        id: 3,
        name: "Samosa",
        description: "Spicy and crispy pastry filled with vegetables.",
        price: "$2.99",
        image: "https://via.placeholder.com/300x200?text=Samosa",
    },
];

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleSelectProduct = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    return (
        <WebLayout>
            <div className="w-[95%] md:w-[80%] mx-auto mt-24">
                <h1 className="text-4xl font-extrabold text-primary text-center mb-10">
                    Our Menu
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="border-2 border-neutral rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            <Link href={route("product.details", product.name)}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-56 object-cover"
                                />
                                <h3 className="text-xl font-semibold text-secondary px-4 pt-4">
                                    {product.name}
                                </h3>
                            </Link>
                            <div className="p-4">
                                <p className="text-sm text-secondary mb-4">
                                    {product.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold text-primary">
                                        {product.price}
                                    </span>
                                    <button
                                        className=" bg-primary text-white rounded-md px-6 py-2 hover:bg-accent transition-all duration-300"
                                        onClick={() =>
                                            handleBuyNow(selectedProduct)
                                        }
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </WebLayout>
    );
};

export default Products;
