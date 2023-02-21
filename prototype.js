// Creamos el objeto prototipo
const animalPrototype = {
  tipo: 'desconocido',
  sonido: function() {
    console.log('...');
  }
};

// Creamos un objeto a partir del prototipo
const perro = Object.create(animalPrototype);
perro.tipo = 'perro';
perro.sonido = function() {
  console.log('guau!');
};

// Creamos otro objeto a partir del prototipo
const gato = Object.create(animalPrototype);
gato.tipo = 'gato';
gato.sonido = function() {
  console.log('miau!');
};

// Llamamos a los métodos de los objetos
perro.sonido(); // guau!
gato.sonido(); // miau!
