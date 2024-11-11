import Image from 'next/image';

const Flavour = () => {
  const flavors = [
    { name: 'Chocolate', description: 'Rich and creamy chocolate ice cream.', imageUrl: '/img/chocolate.webp'}, 
    { name: 'Vanilla', description: 'Classic vanilla ice cream with smooth texture.', imageUrl: '/img/cookies.jpg' }, 
    { name: 'Strawberry', description: 'Sweet strawberry flavor with real berries.', imageUrl: '/img/images.jpeg' },
    { name: 'Chocolate', description: 'Rich and creamy chocolate ice cream.', imageUrl: '/img/Chocolate-Ice.jpg' }, 
    { name: 'Vanilla', description: 'Classic vanilla ice cream with smooth texture.', imageUrl: '/img/best.jpeg' }, 
    { name: 'Strawberry', description: 'Sweet strawberry flavor with real berries.', imageUrl: '/img/24.jpg' },  
  ];

  return (
    <div className="p-6 flex flex-col justify-center items-center bg-purple-200">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Flavors</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {flavors.map((flavor, index) => (
          <div 
            key={index} 
            className="border p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-500"
          >
            <h2 className="text-xl font-semibold mb-4">{flavor.name}</h2>

            <Image 
              src={flavor.imageUrl} 
              alt={flavor.name} 
              width={400} 
              height={300} 
              className="rounded-md mb-4"
            />

            <p>{flavor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Flavour;
