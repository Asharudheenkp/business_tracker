import WebLayout from '@/Layouts/WebLayout';

const products = [
  {
    id: 1,
    name: 'Taco',
    description: 'A delicious taco filled with fresh ingredients.',
    price: '$5.99',
    image: 'https://via.placeholder.com/300x200?text=Taco',
  },
  {
    id: 2,
    name: 'Porikadi',
    description: 'Crispy fried snack with a tasty filling.',
    price: '$3.49',
    image: 'https://via.placeholder.com/300x200?text=Porikadi',
  },
  {
    id: 3,
    name: 'Samosa',
    description: 'Spicy and crispy pastry filled with vegetables.',
    price: '$2.99',
    image: 'https://via.placeholder.com/300x200?text=Samosa',
  },
];

const ProductDetails = () => {
  return (
    <WebLayout>
        <div className="w-[95%] md:w-[80%] mx-auto mt-24">
        <h1 className="text-4xl font-extrabold text-primary text-center mb-10">
           Product
        </h1>

        </div>
    </WebLayout>
  );
};

export default ProductDetails;
