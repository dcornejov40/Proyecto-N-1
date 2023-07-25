import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Aquí realizarías la llamada a tus async-mocks para obtener los detalles del producto con el ID 'id'
    // Actualiza el estado 'product' con los detalles del producto obtenidos
    // Ejemplo de llamada a async-mock:
    fetch(`URL_DEL_ENDPOINT/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div>
      {product ? (
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          {/* Mostrar otros detalles del producto */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
