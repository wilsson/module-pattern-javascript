PATRON MODULAR
===================
### Objecto literal
Un objecto literal es descrito como una lista de pares key/value , separados por comas entre llaves. Nombres dentro del objecto pueden ser
cadenas o identificadores que son seguidas por 2 puntos.
```
var objectoLiteral = {
    variable : "soy una variable",
    myFunction : function() {
      // ...
    }
};
```
#### Función anonima
```
var myAnonymousFunction = function(){
	alert("Hello World!");
};
```
#### Función anonima auto-ejecutable
var myAnonymousFunction = (function(){
	alert("Hello World!");
})();
#### Módulo
Es una unidad independiente funcional que forma parte de la estructura de una aplicacíon.
```
var modulo = {
	saludo : "soy parte del modulo",
	myFunction : function() {
		alert("soy una función");
	}
};
/* accediendo a parte de nuestro modulo */
modulo.myFunction();
```
#### Encapsulamiento
Es el proceso de agrupar datos y metodos en un entorno independiente.

**ejemplo :**
Caja negra : Un objeto en el que su comportamiento y atributos son conocidos pero
no así su trabajo interno.

#### Ventajas del patron modular
Ayudan a mantener tu codigo de manera limpia , separada y organizada.
