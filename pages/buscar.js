import React, { useEffect, useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { useRouter } from 'next/router';
import useProductos from '../hooks/useProductos';
import { DetallesProducto } from '../components/layout/DetallesProducto';

export default function Buscar() {

  const router = useRouter();
  const { query: { q } } = router;

  // Todos los productos
  const { productos } = useProductos('creado');

  const [ resultado, setResultado ] = useState([]);

  // Filtrado
  useEffect(() => {

    if(!q) return;

    const busqueda = q.toLowerCase();

    const filtro = productos.filter( producto => {
      return (
        producto.nombre.toLowerCase().includes(busqueda) ||
        producto.descripcion.toLowerCase().includes(busqueda) 
      )
    });

    setResultado(filtro);

  }, [q, productos]);


     
  return (
    <div>
      <Layout>
        <div className="listado-productos ">
          <div className="contenedor">
            <ul className="bg-white">
              {
                resultado?.map( producto => (
                  <DetallesProducto
                    key={producto.id}
                    producto={producto}
                  />
                ))
              }
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  )
}
