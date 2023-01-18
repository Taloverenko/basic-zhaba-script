let h1 = document.createElement('h1'); // создаем элемент h1
h1.textContent = 'Cписок покупок:'; // добавляем текст в элемент 
document.body.append(h1); // добавляем элемент в DOM

let ol = document.createElement('ol');
document.body.append(ol);

let list = [
  document.createElement('li'),
  document.createElement('li'),
  document.createElement('li')
];

list[0].textContent = 'Циркулярная пила';
list[1].textContent = 'Молоко';
list[2].textContent = 'Хлеб';

ol.prepend(list[0]);
ol.prepend(list[1]);
ol.prepend(list[2]);

let eggs = document.createElement('li');
eggs.textContent = 'Яйца';
list[1].before(eggs); // Добавляем элемент перед молоком (list[1])

let sausage = document.createElement('li');
sausage.textContent = 'Ковбаска';
list[2].after(sausage);

// Далее заменим один элемент на второй

let breadBought = document.createElement('li');
breadBought.innerHTML = '<strike>Хлеб</strike>';
ol.children[0].replaceWith(breadBought);

// Удаляем элемент из DOM

ol.children[4].remove(); 

ol.reversed = true; // Реверс нумерации списка
ol.start = 20; // Нумерация начнётся с 20и, но в меньшую сторону, поскольку до этого применили ol.reverse
ol.removeAttribute('start'); // Удалили аттрибут старт, примененный на прошлой строке кода

ol.classList.add('class1'); // Добавление класса для списка
ol.classList.remove('class1'); // Удаление класса у списка
ol.classList.toggle('class1'); // Переключение класса. Если его нет, то доюавится, если есть - удалится
ol.classList.contains('class1'); // Проверить на наличие класса - в консоли true/false