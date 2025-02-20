Django To-Do App
A simple To-Do List Application built with Django as the backend and JavaScript (Fetch API) for handling frontend requests.

📋 Features
✅ Add, update, and delete tasks
✅ Mark tasks as completed or pending
✅ Store tasks in a SQLite database
✅ API-based CRUD operations using Django REST framework
✅ Minimal UI with clean design

🚀 Installation Guide
Follow these steps to set up and run the project on your local machine.

1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/your-username/django-todo.git
cd django-todo

2️⃣ Create a Virtual Environment (Recommended)
sh
Copy
Edit
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

3️⃣ Install Dependencies
sh
Copy
Edit
pip install -r requirements.txt

4️⃣ Apply Migrations
sh
Copy
Edit
python manage.py migrate

5️⃣ Run the Django Development Server
sh
Copy
Edit
python manage.py runserver
The app will be available at: http://127.0.0.1:8000/

🛠 Usage
1️⃣ Visit the home page – Add, delete, or mark tasks as completed.
2️⃣ API Endpoints (For developers)

GET /api/todos/ → Fetch all tasks
POST /api/todos/ → Create a task
PUT /api/todos/<id>/ → Update a task
DELETE /api/todos/<id>/ → Delete a task

📦 Project Structure
php
Copy
Edit
django-todo/
│── todo_app/        # Main Django app
│── static/          # Frontend static files (CSS, JS)
│── templates/       # HTML templates
│── db.sqlite3       # SQLite database (ignored in .gitignore)
│── manage.py        # Django entry point
│── requirements.txt # List of dependencies
│── .gitignore       # Ignore unnecessary files
└── README.md        # Documentation

🤝 Contributing
Pull requests and issue reports are welcome! Follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-xyz).
Commit your changes (git commit -m "Add new feature").
Push to your fork (git push origin feature-xyz).
Create a Pull Request on GitHub.

📜 License
This project is open-source under the MIT License.

📬 Contact
For questions or feedback, feel free to reach out:
📧 Email: thevishwass@gmail.com
🐙 GitHub: thevishwass

