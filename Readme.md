
###  Описание  


[Посмотреть ДЕМО (БЫЛО/СТАЛО)](https://kirillz.github.io/mkfs)  


Новый интерфейс реализовывался следующими тенологиями:  
-  [Alpine.js](https://github.com/alpinejs/alpine)  
-  [TailwindCSS](https://tailwindcss.com/)  

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

Если вы всё сделали правильно, и нет ошиок в терминале, вы можете зайти в web-интерфейс по адресу: [http://localhost:3000/](http://localhost:3000/).





