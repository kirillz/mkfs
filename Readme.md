
###  Описание  


[Посмотреть ДЕМО (БЫЛО/СТАЛО)](https://kirillz.github.io/mkfs)  


Новый интерфейс реализовывался следующими тенологиями:  
-  [Alpine.js](https://github.com/alpinejs/alpine)  
-  [TailwindCSS](https://tailwindcss.com/)  

## :open_file_folder: Файловая структура  

```
mkfs
├── webpage
│   └── . . .
├── new__webpage
│   └── . . .
├──  make_new.sh
├──  make.sh
├──  mkfs.pl
└── .gitignore
```

- Папка `webpage` - папка, со старым вариантом интерфейса
- Папка `new_webpage` - папка, с новым вариантом интерфейса
- Файл `mkfs-fsdata.c` результат работы скрипта `mkfs.pl`
- Файл `make.sh` подготовить **старый** интерфейс
- Файл `make_new.sh` подготовить **новый** интерфейс
- Файл `mkfs.pl` сценарий Perl для создания C-массивов из всех страниц



