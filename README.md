PATRON MODULAR
===================
En el mundo de javascript tu puedes escribir codigo de manera libre y sin restricciones, el único problema es abusar
de la libertad que te da a la hora de programar. Al final uno obtiene variables y funciones repartidas a lo largo de
todo el código y sin un orden, lo que termina siendo inmantenible. Una de las mejores practicas a la hora de escribir
código es usar los patrones de diseño en javascript y el más utilizado es el patron modular.

En javascript el patron modular emula el concepto de clases, de manera que somos capaces de incluir métodos
públicos/privados y propiedades dentro de un único objeto, protegiendo las datos particulares del ámbito global,
lo que ayuda a evitar la colisión de nombres de funciones y variables ya definidas a lo largo de nuestro proyecto, o
API’s de terceros, aqui unos conceptos previos para poder entender mejor el patrón modular.

### Módulo
Un módulo es una unidad independiente funcional que forma parte de la estructura de una aplicación y puede ser
implementado con una función u objeto.
```
/* modulo con objeto literal */

var modulo = {
	saludo : "soy parte del módulo",
	myFunction : function(){
		alert("soy una función y "+this.saludo);
	}
};

/* accediendo a la función del modulo */
modulo.myFunction();

/* módulo con una función anonima */

var modulo = function(){
    var saludo =";soy parte del módulo";
    var myFunction = function(){
        alert("soy una función y ");
    };
};

/* accediendo a la función del modulo */
modulo2().myFunction();
```
### Objeto literal
Un objeto literal es descrito como cero o más pares nombre/valor, separados por comas entre llaves.
Nombres dentro del objeto pueden ser cadenas o identificadores que son seguidas por 2 puntos.
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
#### Funciónes auto-ejecutables (IIFE)
Estas funciónes una vez declaradas se llaman a sí mismas para inicializarse, los primeros paréntesis encierran
el contenido, los segundos paréntesis asumen que el interior de los primeros paréntesis es una función y la ejecuta
inmediatamente.
```
/* 01 */
(function(){
	alert("Hello World!");
})();

/* 02 */
var myAnonymousFunction = (function(){
	alert("Hello World!");
})();
```
#### Encapsulamiento
Es el proceso de agrupar datos y metodos en un entorno independiente.

#### Metodos privados y publicos
##### Privado:
Los metodos privados son funciones que no pueden ser llamados desde fuera del **ámbito** donde
se encuentran.

##### Publico:
Los metodos publicos son funciones que pueden ser llamadas desde fuera de su **ámbito**.

#### ejemplo :
**Caja negra:** Objeto la cual su comportamiento y atributos son conocidos pero
no su trabajo interno.

#### Ventajas del patron modular
- Código limpio , separado y organizado.
- Soportan datos privados.
- Codigo Escalable.

#### Entendiendo el retorno
```
var module = (function(){
		return{
			publicMethod : function(){
				console.log("soy un metodo publico");
			}
		}
})();
```
Como devolvemos un objeto literal, podemos acceder a sus propiedades exactamente como objetos literales.
```
module.publicMethod();
```
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
#### Referencias
http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascriptt
https://www.safaribooksonline.com/library/view/javascript-the-good/9780596517748/
http://toddmotto.com/mastering-the-module-pattern/
