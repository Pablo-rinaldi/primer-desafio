class ProductManager {
  static id = 0;
  constructor() {
    this.product = [];
  }

  addProduct(title, description, price, img, code, stock) {
    if (!title || !description || !price || !img || !code || !stock) {
      console.log("Faltan ingresar datos");
      return;
    }
    if (this.product.some((prod) => prod.code === code)) {
      console.log("No se puede agregar, Ya existe un producto con ese codigo");
      return;
    }

    const newProduct = {
      id: ++ProductManager.id,
      title,
      description,
      price,
      img,
      code,
      stock,
    };

    this.product.push(newProduct);
  }

  getProducts() {
    console.log(this.product);
  }

  getProductById(id) {
    const product = this.product.find((prod) => prod.id === id);
    if (product) {
      console.log("se encontro el producto: ", product);
    } else {
      console.log("no existe producto con ese id");
    }
  }
}

//Proceso de Testing:

//Se instancia la clase “ProductManager”

const manager = new ProductManager();

//Se invoca “getProducts”, debe devolver un array vacío []

manager.getProducts();

//Se llamará al método “addProduct” con los campos:
//title: “producto prueba”
//description:”Este es un producto prueba”
//price:200,
//thumbnail:”Sin imagen”
//code:”abc123”,
//stock:25

manager.addProduct(
  "producto prueba",
  "este es un producto prueba",
  200,
  "sin imagen",
  "abc123",
  25
);

//El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE

manager.addProduct("cafe", "la virginia", 2200, "sin imagen", "122", 500);

manager.addProduct("galletitas", "sonrisas", 2100, "sin imagen", "123", 350);

//Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado

manager.getProducts();

//Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.

manager.addProduct("te", "te verde", 1200, "sin imagen", "123", 530);

//Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo

manager.getProductById(3);
manager.getProductById(13);
