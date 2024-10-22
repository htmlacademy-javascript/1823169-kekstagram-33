// Функция для проверки длины строки.

const definesLengthString = function(text, maxLength) {
  if (text.length <= maxLength) {
    return true;
  }
  return false;
};

console.log(definesLengthString('проверяемая строка', 20));

// Функция для проверки, является ли строка палиндромом.

const message = 'Лёша на полке клопа нашёл ';

const checksPalindrome = function() {
  message.replaceAll(' ', '').toLowerCase();

  let palindromeMessage = '';

  for (let i = message.length - 1; i >= 0; i--) {
    const letter = message[i];
    palindromeMessage += letter;
  }

  if (palindromeMessage === message) {
    return true;
  }
  return false;
};

console.log(checksPalindrome(message));

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.

const extractsNumber = function(text) {
  let resultExtractNumber = '';
  text = text.toString();
  for (let i = 0; i < text.length; i++) {
    const digit = parseInt(text[i], 10);
    if (!Number.isNaN(digit)) {
      resultExtractNumber += text[i];
    }
  }

  if (resultExtractNumber.length === 0) {
    return NaN;
  }

  return parseInt(resultExtractNumber, 10);
};

console.log(extractsNumber('007 123 abc 8!'));
