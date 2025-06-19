
---

## How to Run the Project

### 1. **Clone the Repository**

```bash
git clone https://github.com/<your-username>/geer-intern-assignment.git
cd geer-intern-assignment/e-commerce
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Run the Development Server**

```bash
npm run dev
```

- The app will be available at [http://localhost:3000](http://localhost:3000)

### 4. **Build for Production**

```bash
npm run build
npm start
```

---

## API Endpoints

All API routes are implemented using Next.js API routes:

- `GET /api/products` – Get all products
- `POST /api/products` – Add a new product (expects `{ name, price, imageUrl, category, description }`)
- `DELETE /api/products/[id]` – Delete a product by ID

Product data is stored in `src/data/product.json`.

---

## Notes & Assumptions

- **No Express server** is used; all backend logic is handled via Next.js API routes.
- **Data is stored in a JSON file** (`src/data/product.json`). This is suitable for demo/development, not for production.
- The app is fully responsive and works on mobile and desktop.
- You can add, view, search, and delete products from the UI.
- If you deploy to Vercel, file-based storage will not persist between deployments (use a real database for production).

---


## Author

- [Tanmoy Majee](https://github.com/TanmoyMajee)

---

## License

This project is for educational/internship evaluation purposes.