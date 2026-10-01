import ArrayBufferConverter from './ArrayBufferConverter.js';
import getBuffer from './getBuffer.js';

describe('ArrayBufferConverter', () => {
  let converter;

  beforeEach(() => {
    converter = new ArrayBufferConverter();
  });

  test('должен успешно загружать буфер методом load()', () => {
    const buffer = getBuffer();
    converter.load(buffer);
    expect(converter.buffer).toBe(buffer);
  });

  test('должен корректно преобразовывать ArrayBuffer в строку JSON', () => {
    const buffer = getBuffer();
    converter.load(buffer);
    
    const expectedString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    expect(converter.toString()).toBe(expectedString);
  });

  test('должен корректно парсить полученную строку в валидный JS-объект', () => {
    const buffer = getBuffer();
    converter.load(buffer);
    
    const jsonString = converter.toString();
    const parsedData = JSON.parse(jsonString);
    
    expect(parsedData.data.user.name).toBe('Hitman');
    expect(parsedData.data.user.level).toBe(10);
  });

  test('должен возвращать пустую строку, если буфер не был загружен', () => {
    expect(converter.toString()).toBe('');
  });
});
