PATRON MODULAR
===================
El patron modular proporcina una forma de encapsulamiento de los metodos públicos, privados
(y variables), en una sola entidad exponiendo solo los miembros del sector público con el alcance del módulo, para poder entender mejor el patrón modular, hay que enteder estos conceptos primero : 

### Objeto literal
Un objeto literal es descrito como cero o más pares name/value, separados por comas entre llaves. Nombres dentro del objeto pueden ser cadenas o identificadores que son seguidas por 2 puntos.
```
var objectLiteral = {
    variable : "soy una variable",
    myFunction : function(){
      // ...
    }
};
```
#### Función anónima
Las funciónes anónimas son funciónes sin nombre, comúnmente asociados a una variable.
```
var myAnonymousFunction = function(){
	alert("Hello World!");
};
```
#### Funciónes auto-ejecutables
Estas funciónes una vez declaradas se llaman a sí mismas para inicializarse, los primeros paréntesis encierran
el contenido, los segundos paréntesis asumen que el interior de los primeros paréntesis es una función y la ejecuta
inmediatamente.
```
(function(){
	alert("Hello World!");
})();

var myAnonymousFunction = (function(){
	alert("Hello World!");
})();
```
#### Módulo
Es una unidad independiente funcional que forma parte de la estructura de una aplicacíon.
```
var modulo = {
	saludo : "soy parte del modulo",
	myFunction : function(){
		alert("soy una función");
	}
};
/* accediendo a parte de nuestro modulo */
modulo.myFunction();
```
#### Encapsulamiento
Es el proceso de agrupar datos y metodos en un entorno independiente.

#### **ejemplo :**
Caja negra : Un objeto en el que su comportamiento y atributos son conocidos pero
no así su trabajo interno.

#### Ventajas del patron modular
Ayudan a mantener tu codigo limpio , separado y organizado.


#### Estructura básica del patron modular
```
var modulo = (function(){
	privateMethod = function(){
		alert("soy un metodo privado");
	};	
	return {
		publicMethod : function(){
			alert("soy un meotodo publico");
			privateMethod();
		}
	}
})();

/* accediendo a la parte publica de nuestro modulo */
modulo.publicMethod();
```
