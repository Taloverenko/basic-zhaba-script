/* 
- Не использовать Infinity без явной необходимости!
- Всё, что делает бесконечность ещё более бесконечной, возвращает бесконечность.
- Любые операции с числом и бесконечностью, вернут бесконечность.
- Уменьшение бесконечности при делении или вычитании бесконечности в JS не работает.
- Две бесконечности равны
- Деление на 0 даёт бесконечность
 */

Infinity > 100500;   // true
-Infinity < -100500; // true
100500 / 0; // Infinity

// Запомнить

Infinity === Infinity; // true

Infinity > Infinity;  // false
Infinity < Infinity;  // false

Infinity >= Infinity; // true
Infinity <= Infinity; // true

Infinity + Infinity;  // Infinity
-Infinity - Infinity; // -Infinity

Infinity - Infinity;  // NaN
-Infinity + Infinity; // NaN
Infinity / Infinity;  // NaN

Infinity * 10;        // Infinity
Infinity / 10;        // Infinity
Infinity ** 10;       // Infinity
Infinity * Infinity;  // Infinity

Infinity ** -Infinity;   // 0
(-Infinity) ** Infinity; // Infinity