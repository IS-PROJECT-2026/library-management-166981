console.log('Library Management System initialized');

class LibraryManager {
    constructor() {
        this.books = this.loadFromStorage('books') || [];
        this.members = this.loadFromStorage('members') || [];
        this.loadSampleData();
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
}