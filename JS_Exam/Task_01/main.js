var text =
    "Необходимо написать скрипт, читающий исходный текст из текстового поля. " +
    "Сценарий должен модифицировать исходный текст по алгоритму, описанному выше. " +
    "Буквы в словах перемешиваются случайным образом, первая и последняя буквы остаются на своих позициях.";

var textMix = text.replace(/([а-яА-Я]+|\w+)/g, word => wordTransform(word));

function wordTransform(word) {
    if (word.length > 3) {

        var sliceWord = String(word).slice(1, word.length - 1).split('');

        sliceWord.sort();

        return word[0] + sliceWord.join('') + word[word.length - 1];
    }

    return word;
}

document.write(textMix);
