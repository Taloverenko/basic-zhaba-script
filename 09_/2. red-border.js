(() => {
 const divElements = document.querySelectorAll('div'); // проходим по всем элементам div
 for (const el of divElements) el.style.border = '1px solid red'; // добавляем элементам красную рамку
})();
