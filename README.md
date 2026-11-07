## Какую проблему решает этот код?

У налоговой есть поиск по УНП (уникальному номеру плательщика): https://grp.nalog.gov.by/grp/

Есть API: https://grp.nalog.gov.by/api/grp-public/data?unp=100582333&charset=UTF-8&type=json

Этот API не получится использовать в своем браузерном приложении, так как получим ошибку CORS.

Поэтому создадим свой backend, который будет получать данные по API налоговой и возращать нам JSON.

Использовать будем Google Apps Script.

## Что такое Google Apps Script

Google Apps Script - это платформа для разработки на Google JavaScript, которая позволяет работать с:
- Google Документы
- Google Таблицы
- Gmail

Google Apps Script можно писать в браузере в файле Code.gs: https://script.google.com/

Простой пример:
1. Зайти на https://script.google.com/
2. Нажать "Создать проект"
3. Появится файл `Код.gs`
4. Пишем код
    ```js
    function myFunction() {
        console.log('Hello, World!');
    }
    ```
5. Жмем кнопку "Сохранить проект на Диск"
6. Жмем кнокпу "Выполнить"

В Google Apps Script есть функции doGet(e) и doPost(e), которые могут возращать, например, JSON по переходу по ссылке скрипта

```js
function doGet(e) {
    const JSON_STRING = JSON.stringify({ message: "Hello, World" });
    return ContentService.createTextOutput(JSON_STRING).setMimeType(ContentService.MimeType.JSON);
}
```

Для получения ссылки скрипта:
1. Жмем "Нажать развертывание"
2. Жмем "Новое развертывание"
3. Жмем на шестриренку
4. Жмем на "Веб-приложение"
5. Заполняем поля:
    - Описание: пусто
    - Запуск от имени:
        - [x] От моего имени
        - [ ] От имени пользователя, открывающего веб-приложение
    - У кого есть доступ
        - [ ] Только у меня
        - [ ] Любой пользователь с аккаунтом Google
        - [x] Все
6. Копируем ссылку
7. Переходим по сгенерированной ссылке
    - https://script.google.com/macros/s/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/exec
8. Получили данные:
    ```json
    {"message":"Hello, World"}
    ```
