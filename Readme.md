![GitHub release](https://img.shields.io/github/release/kirillz/mkfs.svg)
<a href="https://www.tinkoff.ru/cardtocard/">
<img src="https://img.shields.io/badge/%D0%97%D0%B0%D0%B4%D0%BE%D0%BD%D0%B0%D1%82%D0%B8%D1%82%D1%8C-%D0%BD%D0%B0%20%D0%BA%D0%B0%D1%80%D1%82%D1%83%205469%203800%202380%204429-blue.svg">
</a>

###  Описание  

[Посмотреть ДЕМО (БЫЛО/СТАЛО)](https://kirillz.github.io/mkfs)  


Новый интерфейс реализовывался следующими технологиями: 

-  [Express](https://expressjs.com/) Быстрый, простой, минималистичный веб-фреймворк для Node.js  
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


## :envelope: Контакты
* ~~ВКонтакте~~
* ~~ФейсБуки~~
* Telegram: [@kirillz](https://t.me/kirillz)


<a href="https://www.tinkoff.ru/cardtocard/">
<img src="https://img.shields.io/badge/%D0%97%D0%B0%D0%B4%D0%BE%D0%BD%D0%B0%D1%82%D0%B8%D1%82%D1%8C-%D0%BD%D0%B0%20%D0%BA%D0%B0%D1%80%D1%82%D1%83%205469%203800%202380%204429-blue.svg">
</a>


