# 🧠 Preguntas Teóricas sobre Prototipos, Clases y Métodos

## 1. ¿Qué diferencias, ventajas y desventajas encontrás entre usar funciones constructoras con `prototype` y usar `class`?

| Aspecto          | Función constructora + `prototype`                                       | `class`                                              |
| ---------------- | ------------------------------------------------------------------------ | ---------------------------------------------------- |
| **Sintaxis**     | Más antigua, menos intuitiva                                             | Más moderna, clara y parecida a otros lenguajes      |
| **Herencia**     | Se hace manualmente con `Object.create()` y reasignación del constructor | Se usa `extends` de forma directa y más legible      |
| **Internamente** | Todo sigue funcionando con prototipos                                    | También usa prototipos por debajo, pero lo abstrae   |
| **Ventajas**     | Más control bajo nivel. Compatible con versiones viejas de JS            | Código más limpio, legible, fácil de mantener        |
| **Desventajas**  | Más propenso a errores y requiere más líneas de código                   | No está soportado en navegadores muy antiguos (ES6+) |

## 2. ¿Cuáles son las ventajas de usar getters y setters?

- ✅ **Encapsulan** el acceso a propiedades privadas (como `#saldo`), permitiendo validaciones o lógica adicional
- ✅ Permiten tratar métodos como si fueran propiedades (`obj.prop` en lugar de `obj.getProp()`)
- ✅ Pueden ayudar a mantener **inmutabilidad parcial** o proteger datos sensibles
- ✅ Ayudan a aplicar **lógica de negocio** (por ejemplo, impedir saldos negativos)

> 🧠 _Con getters y setters podés controlar lo que entra y sale del objeto sin exponer directamente sus atributos internos._

## 3. ¿Qué problemas pueden surgir al modificar prototipos nativos como `String`?

- ⚠️ **Conflictos con librerías** que usen métodos con el mismo nombre
- ⚠️ **Colisiones futuras** si en una versión futura de JavaScript agregan un método nativo con el mismo nombre
- ⚠️ **Mantenimiento difícil**: otros programadores no esperan que los prototipos nativos estén modificados
- ⚠️ Puede romper código que dependa del comportamiento original del objeto

> ✋ _Modificar prototipos nativos solo se recomienda en entornos muy controlados o con nombres únicos que no choquen._

## 4. Teniendo en cuenta un objeto `personPrototype` que contiene un método `greet`, ¿qué diferencias encontrás entre asignar ese método directamente al prototype de una función constructora o usar `Object.assign`?

### 🔹 Asignar directamente:

```javascript
function Persona(nombre) {
  this.nombre = nombre;
}

Persona.prototype.greet = function () {
  console.log(`Hola, soy ${this.nombre}`);
};
```

- ✅ Método claro, individual
- ✅ Fácil de sobrescribir métodos uno por uno
- ❌ No ideal si hay muchos métodos que copiar

### 🔹 Usar `Object.assign`:

```javascript
function Persona(nombre) {
  this.nombre = nombre;
}

Object.assign(Persona.prototype, personPrototype);
```

- ✅ Permite copiar **varios métodos de una vez** desde `personPrototype`
- ✅ Más limpio si tenés muchos métodos
- ❌ Puede sobrescribir métodos existentes en el `prototype`
- ❌ Menos explícito qué métodos estás agregando
