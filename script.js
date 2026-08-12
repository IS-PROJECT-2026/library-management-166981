console.log('Library Management System initialized');

class LibraryManager {
    constructor() {
        this.books = [];
        this.members = [];
    }

    generateId() {
        return 'BOOK' + Date.now() + Math.random().toString(36).substr(2, 9);
    }

    generateMemberId() {
        const count = this.members.length + 1;
        return 'MEM' + String(count).padStart(3, '0');
    }
}