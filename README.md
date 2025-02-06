**Коментарии**

1. Проект вместе с сервером запускается с помощью команды: `npm run start`;

2. Функция удаления карточек реализована через нажатие на крестик, при наведении на карточку. Происходит запрос DELETE на сервер, возвращается объект с сообщением об успешном удалении, либо сообщение об ошибке;

3. Функция редактирования карточек реализована через нажатие на саму карточку (возможность взаимодействовать с карточкой понятна для пользователя, благодаря ее увеличению при наведении). Закрыть модалку карточки можно путем нажатия на оверлей, я подумал, что это будет интуитивно понятно для пользователя. Запрос PATCH отправляется на сервер, после закрытия карточки; 

4. Ошибки обрабатываются в каждом serverAction, также меняется состояние загрузки во время выполнения экшна (когда фетчатся данные вверху слева можно увидеть надпись "загрузка..."). Решил реализовать таким простым способом для экономии времени в контексте практической задачи, но по хорошему для отображения состояния загрузки само собой лучше использовать либо лоадер либо скелетон;

5. **Структура проекта.** В папке **components** соответственно компоненты ui, в папке **consts** используемые в проекте константы (url сервера), в папке **hooks** кастомные хуки: useApp и useModal содержат функции, используемые в компонентах App и SeminarModal, useServerAction содержит асинхронные функции для запросов на сервер;

6. Пару слов о производительности, для сокращения перерисовок, конечно, лучше было бы использовать инструменты мемоизации, но я решил в данной практической работе их не использовать, потому что по производительности все и так нормально работает без тормозов;

7. Сама структура проекта, а именно: scss и craco с предварительными настройками алиасов для вебпака я взял из своих прошлых проектов, потому что там я столкнулся с некоторыми трудностями при разработке, потому что CRA немного костыльный, поэтому приходилось донастраивать самому, поэтому решил настроенную лично версию CRA использовать в следующих проектах для удобства;

На этом все, надеюсь работа понравится!