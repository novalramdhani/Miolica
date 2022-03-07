# Miolica Backend

Miolica is an e-commerce application that uses React.js as the frontend and Laravel as the backend.

## Miolica Resources

1. Database Design: [Click Here](https://dbdiagram.io/d/620e660e485e433543cee43a)
2. Figma Design: [Click Here](https://www.figma.com/file/Rt1alvAw8zJNDSxnNGxrWi/Miolica-Store?node-id=0%3A1)
3. API Documentation: [Coming Soon]()

## Miolica Backend Techstack

- [Laravel](https://laravel.com/)
- [GraphQL](https://graphql.org/learn)
- [PostgreSQL](https://www.postgresql.org/docs/14/intro-whatis.html)
- [MongoDB](https://docs.mongodb.com/)
- [Sanctum](https://laravel.com/docs/9.x/sanctum)

## How to use Miolica (Only Backend)
First, clone this repository and then enter the `Miolica/backend` project directory and run the composer package manager command below.

```bash
composer install && composer update
```

Second, copy and paste the `.env.example` file and create a new file with the name `.env` for the environment configuration file, or you can use the terminal command below.

```bash
cp .env.example .env
```

Third, generate an application key for this backend using the Laravel Artisan command.

```bash
php artisan key:generate --show
```

Finally, run Artisan serve command to open local development server with `localhost:8000`.

```bash
php artisan serve
```
