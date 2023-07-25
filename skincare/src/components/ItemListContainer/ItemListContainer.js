import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Aquí realizarías la llamada a tus async-mocks para obtener los productos de skincare
    // Puedes filtrar los productos por categoría usando el 'id' si existe
    // Actualiza el estado 'products' con los productos obtenidos
    // Ejemplo de llamada a async-mock:
    fetch('URL_DEL_ENDPOINT')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [id]);
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
