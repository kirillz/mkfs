![GitHub release](https://img.shields.io/github/release/kirillz/mkfs.svg)

###  Описание  


[Посмотреть ДЕМО (БЫЛО/СТАЛО)](https://kirillz.github.io/mkfs)  


Новый интерфейс реализовывался следующими технологиями: 

Backend:  
-  [Express](https://expressjs.com/) Быстрый, простой, минималистичный веб-фреймворк для Node.js  
-  [MongoDB](https://www.mongodb.com/) MongoDB - это распределенная база данных общего назначения на основе документов.  
-  [Docker+docker compose](https://www.youtube.com/watch?v=omi_amBXC84) видео ответ почему.  

Frontend:  
-  [Alpine.js](https://github.com/alpinejs/alpine) Предлагает реактивный и декларативный характер больших фреймворков, таких, как Vue или React, по гораздо более низкой "цене".  
-  [TailwindCSS](https://tailwindcss.com/) Большинство фреймворков CSS делают слишком много. Tailwind отличается.  


## :open_file_folder: Файловая структура  

```
mkfs
├── mkfsapp
│   └── public
│   └── routes
│   └── views
├── webpage
│   └── . . .
├── new__webpage
│   └── . . .
├──  make_new.sh
├──  make.sh
├──  mkfs.pl
└── .gitignore
```
- Папка `mkfsapp` - корневая папка Node.js сервера Express, содержит в себе настроенный сервер и перенесенный новый интерфейс.
  - подПапка `routes` - папка, содержит настройки маршрутизации сервера
  - подПапка `public` - папка, содержит в себе img, css, js
  - подПапка `views` - папка, содержит в себе HTML страницы
- Папка `new_webpage` - папка, с новым вариантом интерфейса
- Папка `webpage` - папка, со старым вариантом интерфейса
- Файл `mkfs-fsdata.c` результат работы скрипта `mkfs.pl`
- Файл `make.sh` подготовить **старый** интерфейс
- Файл `make_new.sh` подготовить **новый** интерфейс
- Файл `mkfs.pl` сценарий Perl для создания C-массивов из всех страниц  

## :hammer_and_wrench: Установка
* установите [NodeJS](https://nodejs.org/en/) (если требуется) и [Yarn](https://yarnpkg.com/en/docs/install)  
* скачайте сборку с помощью [Git](https://git-scm.com/downloads): ```git clone https://github.com/kirillz/mkfs.git```  
* перейдите в скачанную папку со сборкой: ```cd mkfs/mkfsapp```  
* скачайте необходимые зависимости: ```yarn```
* чтобы начать работу, введите команду: ```yarn run dev``` (режим разработки)
* чтобы собрать проект, введите команду ```yarn run start``` (режим просто запуска сервера)  


  Если вы всё сделали правильно, и нет ошибок в терминале,  
  вы можете зайти в web-интерфейс по адресу: [http://localhost:3000/](http://localhost:3000/).


## :keyboard: Команды
* ```yarn run build:css``` - проверить SCSS-файлы. Для VSCode необходимо установить [плагин](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint). Для WebStorm
или PHPStorm необходимо включить Stylelint в ```Languages & Frameworks - Style Sheets - Stylelint``` (ошибки будут исправлены автоматически при сохранении файла)
* ```yarn run dev``` - запуск сервера для разработки проекта  
* ```yarn run start``` - просто запуск сервера для работы  
* ```yarn run docker:start``` - запускает контейнеры MongoDB и Mongo-Express (веб-админ панель Mongo [http://localhost:8081](http://localhost:8081))  командой `docker-compose up`
* ```yarn run docker:stop``` - останавливает запущенные контейнеры 

## :envelope: Контакты
* ~~ВКонтакте~~
* ~~ФейсБуки~~
* Telegram: [@kirillZ](https://t.me/kirillZ)  
<a href="https://paypal.me/kirillza/">
<img src="https://img.shields.io/badge/%D0%94%D0%BE%D0%BD%D0%B0%D1%82%20%D0%BD%D0%B0-PayPal-informatinal.svg">
</a> 

