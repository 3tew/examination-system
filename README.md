<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

## Required

1. PHP version 7.3+ (XAMPP - Lastest version) - [Link](https://www.apachefriends.org/index.html)
2. Composer - [Link](https://getcomposer.org/download/)
3. NodeJS (Current version) - [Link](https://nodejs.org/en/download/)
4. Git - [Link](https://git-scm.com/)

## Installation - For Developer

1. Clone project นี้โดยการพิมพ์คำสั่งใน CMD หรือ Terminal ว่า `git clone git@github.com:3tew/examination-system.git`
2. Copy ไฟล์ `.env.example` เป็น `.env` แล้ว `php artisan key:generate`
3. แก้ไขไฟล์ .env ให้ตรงกับ Configuration ด้านล่าง
4. พิมพ์ `composer install`
5. พิมพ์ `npm install`
6. Run web server โดยการพิมพ์ `php artisan serve`
7. เว็บจะทำงานอยู่ที่ `http://localhost:8000/`

## Configuration - ENV

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=examination_system
DB_USERNAME=root
DB_PASSWORD=
```

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
