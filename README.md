PATRON MODULAR
===================
En el mundo de javascript tu puedes escribir código de manera libre y sin restricciones, el único problema es abusar
de la libertad que te da a la hora de programar. Al final uno obtiene variables y funciones repartidas a lo largo de
todo el código y sin un orden, lo que termina siendo inmantenible. Una de las mejores practicas a la hora de escribir
código es usar los patrones de diseño en javascript y el más utilizado es el patron modular.

En javascript el patron modular emula el concepto de clases, de manera que somos capaces de incluir métodos
públicos/privados y propiedades dentro de un único objeto, protegiendo las datos particulares del ámbito global,
lo que ayuda a evitar la colisión de nombres de funciones y variables ya definidas a lo largo de nuestro proyecto, o
API’s de terceros, aquí unos conceptos previos para poder entender mejor el patrón modular.

### Módulo
Un módulo es una unidad independiente funcional que forma parte de la estructura de una aplicación y puede ser.
```
var modulo = (function(){
    //- - -
})();

```
```
var automovil = (function(colorDeAuto){
    var color =colorDeAuto;
    return{
        avanzar : function(){
            console.log("el auto "+color+" esta avanzando");
        },

        retroceder : function(){
            console.log("el auto "+color+" esta retrocediendo");
        }
    }
})("azul");

/* accediendo los metodos retroceder y avanzar de nuestro módulo */
automovil.retroceder();
automovil.avanzar();
```

### Objeto literal
Un objeto literal es descrito como cero o más pares nombre/valor, separados por comas entre llaves.
Nombres dentro del objeto pueden ser cadenas o identificadores que son seguidas por 2 puntos.
```
var objectLiteral = {
    /* los objetos literales pueden contener propiedades y métodos */
    saludo : "soy un objeto literal",
    myFunction : function(){
      // ...
    }
};
/* accediendo a las propiedades de nuestro objeto literal */
objectLiteral.saludo
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

/* 03 */
var myAnonymousFunction = (function(message){
	alert(message);
})("hello world");
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
- Código Escalable.

#### Entendiendo el retorno
Communmente los móulos retornan un objeto, la cual los metodos ligados a dicho objeto seran
accesibles desde fuera del módulo.
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
