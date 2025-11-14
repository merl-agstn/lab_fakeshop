export function getProducts() {
  return fetch('https://fakestoreapi.com/products')
    .then(r => {
      if (!r.ok) throw new Error('Ocurrió un error al traer productos');
      return r.json();
    })
    .then(data => {
      console.log(data);
      return data;
    });
}
