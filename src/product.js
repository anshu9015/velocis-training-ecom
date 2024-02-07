import React from 'react';

const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
];

export default function Product() {
    const listItem = products.map((product) => {
        return(
        <li key={product.title} style={{ color: product.isFruit ? 'red' : 'darkgreen' }}>
            {product.title}
        </li>
    );});
    return (
        <ul>{listItem}</ul>
    );
}