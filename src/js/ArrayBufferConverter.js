/**
 * Класс для управления и конвертации данных ArrayBuffer в строку.
 */
export default class ArrayBufferConverter {
  constructor() {
    this.buffer = null;
  }

  /**
   * Загружает переданный ArrayBuffer во внутреннее свойство класса.
   * @param {ArrayBuffer} buffer - Входной буфер двоичных данных
   */
  load(buffer) {
    this.buffer = buffer;
  }

  /**
   * Преобразует содержимое загруженного ArrayBuffer в обычную строку.
   * @returns {string} - Раскодированная строка JSON
   */
  toString() {
    if (!this.buffer) {
      return '';
    }

    // Создаем представление Uint16Array для чтения 16-битных символов из буфера
    const bufferView = new Uint16Array(this.buffer);
    let result = '';

    // Перебираем каждый числовой код и превращаем его обратно в символ
    for (let i = 0; i < bufferView.length; i++) {
      result += String.fromCharCode(bufferView[i]);
    }

    return result;
  }
}
