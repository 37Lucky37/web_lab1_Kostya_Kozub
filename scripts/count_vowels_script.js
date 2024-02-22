let input = document.getElementById("input");

let output = document.getElementById("output");

function countVowels() {
  let input_first = document.getElementById("input").value;
  const lowercaseString = input_first.toLowerCase();
  
  // Задаємо голосні, які ми шукаємо
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  // Ініціалізуємо лічильник голосних
  let vowelCount = 0;
  
  // Перебираємо кожен символ у рядку
  for (let i = 0; i < lowercaseString.length; i++) {
      // Якщо символ є голосною, збільшуємо лічильник
      if (vowels.includes(lowercaseString[i])) {
          vowelCount++;
      }
  }

  output.innerText = "Результат: " + vowelCount;
}

  