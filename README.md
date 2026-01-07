# Blog Site Backend API

## Description
This project is a RESTful backend API for a blog application. It provides full CRUD operations for categories, posts, and comments, along with filtering capabilities and soft delete functionality.

The API follows REST principles and is structured with a clean and modular architecture.

---

## 🛠 Technologies

* **Runtime:** Node.js
* **Framework:** Express.js
* **Language:** TypeScript
* **Database:** PostgreSQL
* **Query Builder:** Knex.js

---

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sunazaloglu/blog-site-backend.git
    cd blog-site-backend

    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the root directory:
    ```env
    DB_NAME=your_database_name
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    PORT=3000
    ```
    An `.env.example` file is included as a reference for environment configuration.


4.  **Run Database Migrations:**
    ```bash
    npm run migrate
    ```

5.  **Start Development Server:**
    ```bash
    npm run dev
    ```

---
 
## 🔗 API Endpoints

### 📂 Categories
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/categories` | List all categories |
| `GET` | `/api/v1/categories/:id` | Get category details |
| `POST` | `/api/v1/categories` | Create new category |
| `PUT` | `/api/v1/categories/:id` | Update category |
| `DELETE` | `/api/v1/categories/:id` | Soft delete category |

### 📝 Posts
* **Query Filters:** 
    * `category`: Filter by category ID
    * `status`: `published`, `draft`, `all`
    * `showDeleted`: `true`, `false`, `onlyDeleted`

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/posts` | List posts with filters |
| `GET` | `/api/v1/posts/:id` | Get post details |
| `POST` | `/api/v1/posts` | Create new post |
| `PUT` | `/api/v1/posts/:id` | Update post |
| `DELETE` | `/api/v1/posts/:id` | Soft delete post |

### 💬 Comments
* **Query Filters:** `post`, `commenter`

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/comments` | List comments with filters |
| `GET` | `/api/v1/comments/:id` | Get comment details |
| `POST` | `/api/v1/comments` | Create new comment |
| `PUT` | `/api/v1/comments/:id` | Update comment |
| `DELETE` | `/api/v1/comments/:id` | Soft delete comment |

---

## 🛠 Technical Notes

* **Soft Delete:** Implemented using the `deleted_at` field. Deleted records remain in the DB but are hidden from standard queries.
* **Architecture:** Controllers, models, and routes are strictly separated.
* **Health Check:** Access `GET /projectcheck` to verify API status.
    ```json
    { "message": "OK" }
    ```

## 📮 Testing
A **Postman Collection** is included in the project folder to test all API endpoints with example request/response bodies.

## 📊 HTTP Status Codes
- `200 OK`
- `201 Created`
- `204 No Content`
- `400 Bad Request`
- `404 Not Found`
- `500 Internal Server Error`
