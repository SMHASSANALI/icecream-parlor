import React from "react";
import Banner from "../components/products/Banner";
import Card from "../components/products/Card";

const page = () => {
  const products = [
    {
      id: 1,
      name: "Amorino Chocolate",
      description: "Rich, dark chocolate with an intense cocoa flavor.",
      image: "/assets/products/amorino_chocolate.jpg",
    },
    {
      id: 2,
      name: "Blood Orange",
      description: "Zesty and refreshing citrus with a tangy twist.",
      image: "/assets/products/blood_orange.jpg",
    },
    {
      id: 3,
      name: "Coffee",
      description: "Smooth, roasted coffee flavor for caffeine lovers.",
      image: "/assets/products/coffee.jpg",
    },
    {
      id: 4,
      name: "Hazelnut Chocolate",
      description: "Creamy blend of roasted hazelnuts and sweet cocoa.",
      image: "/assets/products/hazelnut_chocolate.jpg",
    },
    {
      id: 5,
      name: "Mango",
      description: "Tropical and juicy mango sorbet bursting with flavor.",
      image: "/assets/products/mango.jpg",
    },
    {
      id: 6,
      name: "Mascarpone Fig",
      description: "Lush mascarpone base with sweet, jammy figs.",
      image: "/assets/products/mascarpone_fig.jpg",
    },
    {
      id: 7,
      name: "Mint Chips",
      description: "Cool mint ice cream studded with chocolate chips.",
      image: "/assets/products/mint_chips.jpg",
    },
    {
      id: 8,
      name: "Pistachio",
      description: "Nutty and creamy pistachio made with real nuts.",
      image: "/assets/products/pistachio.jpg",
    },
    {
      id: 9,
      name: "Sicilian Mandarin",
      description: "Bright, citrusy flavor made from Sicilian mandarins.",
      image: "/assets/products/sicilian_mandarin.jpg",
    },
    {
      id: 10,
      name: "Strawberry",
      description: "Classic strawberry flavor with sweet, ripe berries.",
      image: "/assets/products/strawberry.jpg",
    },
    {
      id: 11,
      name: "Tiramisu",
      description: "A coffee-infused dessert with mascarpone and cocoa.",
      image: "/assets/products/tiramisu.jpg",
    },
    {
      id: 12,
      name: "Vanilla",
      description: "Smooth and classic vanilla bean flavor.",
      image: "/assets/products/vanilla.jpg",
    },
    {
      id: 13,
      name: "Yogurt",
      description: "Creamy, tangy frozen yogurt for a light indulgence.",
      image: "/assets/products/yougurt.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Banner />
      <div className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['nerko_one'] text-blue-700 font-bold text-center uppercase mb-4">
          Our Products
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-center mb-6 md:mb-8 lg:mb-10 max-w-2xl mx-auto">
          Explore our wide range of delicious ice creams, crafted with the finest ingredients.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;