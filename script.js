console.log('Library Management System initialized');

class LibraryManager {
    constructor() {
        this.books = this.loadFromStorage('books') || [];
        this.members = this.loadFromStorage('members') || [];
        this.loadSampleData();
        this.setupEventListeners();
        this.renderBooks();
    }

    // Local Storage Operations
    loadFromStorage(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error(`Error loading ${key} from storage:`, error);
            return null;
        }
    }

    saveToStorage(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error(`Error saving ${key} to storage:`, error);
        }
    }

    generateId() {
        return 'BOOK' + Date.now() + Math.random().toString(36).substr(2, 9);
    }

    generateMemberId() {
        const count = this.members.length + 1;
        return 'MEM' + String(count).padStart(3, '0');
    }

    loadSampleData() {
        if (this.books.length === 0) {
            this.books = [
                {
                    id: this.generateId(),
                    title: 'Clean Code',
                    author: 'Robert C. Martin',
                    isbn: '978-0132350884',
                    category: 'Technology',
                    status: 'available'
                },
                {
                    id: this.generateId(),
                    title: 'The Pragmatic Programmer',
                    author: 'Andrew Hunt',
                    isbn: '978-0201616224',
                    category: 'Technology',
                    status: 'available'
                },
                {
                    id: this.generateId(),
                    title: '1984',
                    author: 'George Orwell',
                    isbn: '978-0451524935',
                    category: 'Fiction',
                    status: 'borrowed'
                },
                {
                    id: this.generateId(),
                    title: 'Sapiens',
                    author: 'Yuval Noah Harari',
                    isbn: '978-0062316097',
                    category: 'History',
                    status: 'available'
                }
            ];

            this.saveToStorage('books', this.books);
        }

        if (this.members.length === 0) {
            this.members = [
                {
                    id: 'MEM001',
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    phone: '+254700000001',
                    type: 'Student',
                    status: 'Active'
                },
                {
                    id: 'MEM002',
                    name: 'Jane Smith',
                    email: 'jane.smith@example.com',
                    phone: '+254700000002',
                    type: 'Faculty',
                    status: 'Active'
                }
            ];

            this.saveToStorage('members', this.members);
        }
    }

    // Book and Member Form Event Listeners
    setupEventListeners() {
    // Book events
    document.getElementById('addBookBtn').addEventListener('click', () => {
        this.toggleForm('bookForm');
    });

    document.getElementById('cancelBookBtn').addEventListener('click', () => {
        this.toggleForm('bookForm');
        document.getElementById('newBookForm').reset();
    });

    document.getElementById('newBookForm').addEventListener('submit', (e) => {
        e.preventDefault();
        this.addBook();
    });

    // Member events
    document.getElementById('addMemberBtn').addEventListener('click', () => {
        this.toggleForm('memberForm');
    });

    document.getElementById('cancelMemberBtn').addEventListener('click', () => {
        this.toggleForm('memberForm');
        document.getElementById('newMemberForm').reset();
    });

    document.getElementById('newMemberForm').addEventListener('submit', (e) => {
        e.preventDefault();
        this.addMember();
    });
}

    toggleForm(formId) {
        const form = document.getElementById(formId);
        form.classList.toggle('hidden');
    }

    // Book Management
    addBook() {
        const title = document.getElementById('bookTitle').value.trim();
        const author = document.getElementById('bookAuthor').value.trim();
        const isbn = document.getElementById('bookISBN').value.trim();
        const category = document.getElementById('bookCategory').value;

        if (!title || !author || !isbn || !category) {
            alert('Please fill in all fields');
            return;
        }

        const newBook = {
            id: this.generateId(),
            title,
            author,
            isbn,
            category,
            status: 'available'
        };

        this.books.push(newBook);
        this.saveToStorage('books', this.books);
        this.renderBooks();

        document.getElementById('newBookForm').reset();
        this.toggleForm('bookForm');

        alert('Book added successfully!');
    }

    deleteBook(bookId) {
        if (confirm('Are you sure you want to delete this book?')) {
            this.books = this.books.filter(book => book.id !== bookId);
            this.saveToStorage('books', this.books);
            this.renderBooks();
        }
    }

    toggleBookStatus(bookId) {
        const book = this.books.find(b => b.id === bookId);

        if (book) {
            book.status =
                book.status === 'available'
                    ? 'borrowed'
                    : 'available';

            this.saveToStorage('books', this.books);
            this.renderBooks();
        }
    }

    // Book Display
    renderBooks() {
        const booksGrid = document.getElementById('booksGrid');

        if (this.books.length === 0) {
            booksGrid.innerHTML =
                '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No books in the collection yet. Add your first book!</p>';
            return;
        }

        booksGrid.innerHTML = this.books
            .map(book => this.createBookCard(book))
            .join('');
    }

    createBookCard(book) {
        const statusClass =
            book.status === 'available'
                ? 'badge-available'
                : 'badge-borrowed';

        const statusText =
            book.status === 'available'
                ? 'Available'
                : 'Borrowed';

        const actionText =
            book.status === 'available'
                ? 'Mark as Borrowed'
                : 'Mark as Available';

        return `
            <div class="book-card">
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>ISBN:</strong> ${book.isbn}</p>
                <p><strong>Category:</strong> ${book.category}</p>

                <div class="book-meta">
                    <span class="badge ${statusClass}">
                        ${statusText}
                    </span>
                </div>

                <div class="book-actions">
                    <button class="btn btn-primary"
                        onclick="library.toggleBookStatus('${book.id}')">
                        ${actionText}
                    </button>

                    <button class="btn btn-danger"
                        onclick="library.deleteBook('${book.id}')">
                        Delete
                    </button>
                </div>
            </div>
        `;
    }
}

const library = new LibraryManager();