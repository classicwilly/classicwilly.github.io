// Card Catalog Application
class CardCatalog {
    constructor() {
        this.cards = this.loadCards();
        this.currentEditId = null;
        this.init();
    }

    init() {
        this.renderCards();
        this.setupEventListeners();
    }

    // Load cards from localStorage
    loadCards() {
        const stored = localStorage.getItem('wonkySproutCards');
        if (stored) {
            return JSON.parse(stored);
        }
        // Default sample cards
        return [
            {
                id: Date.now() + 1,
                title: "Fixed the Leaky Faucet",
                category: "fix",
                description: "Used a new washer and some plumber's tape. No more dripping! Remember to turn off the water main first next time.",
                tags: ["plumbing", "quick-fix", "hardware"],
                timestamp: new Date().toISOString()
            },
            {
                id: Date.now() + 2,
                title: "WiFi Router Placement",
                category: "hack",
                description: "Moved router to central location and elevated it. Placed aluminum foil behind antenna as a reflector. Signal improved by 40%!",
                tags: ["wifi", "networking", "diy"],
                timestamp: new Date().toISOString()
            },
            {
                id: Date.now() + 3,
                title: "Automated Plant Watering",
                category: "idea",
                description: "Build a system using Arduino, soil moisture sensors, and a water pump. Could water plants automatically when soil is dry.",
                tags: ["arduino", "automation", "plants", "iot"],
                timestamp: new Date().toISOString()
            },
            {
                id: Date.now() + 4,
                title: "Kitchen Organization Insight",
                category: "note",
                description: "Labels on containers really help! Used a label maker to mark all spice jars. Also discovered Marie Kondo was right about vertical storage.",
                tags: ["organization", "kitchen", "life-hack"],
                timestamp: new Date().toISOString()
            }
        ];
    }

    // Save cards to localStorage
    saveCards() {
        localStorage.setItem('wonkySproutCards', JSON.stringify(this.cards));
    }

    // Render all cards
    renderCards(filter = 'all', searchTerm = '') {
        const catalog = document.getElementById('cardCatalog');
        
        let filteredCards = this.cards;
        
        // Apply category filter
        if (filter !== 'all') {
            filteredCards = filteredCards.filter(card => card.category === filter);
        }
        
        // Apply search filter
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filteredCards = filteredCards.filter(card => 
                card.title.toLowerCase().includes(term) ||
                card.description.toLowerCase().includes(term) ||
                card.tags.some(tag => tag.toLowerCase().includes(term))
            );
        }
        
        if (filteredCards.length === 0) {
            catalog.innerHTML = `
                <div class="empty-state">
                    <h3>No cards found</h3>
                    <p>Try adjusting your filters or add a new card!</p>
                </div>
            `;
            return;
        }
        
        catalog.innerHTML = filteredCards.map(card => this.createCardHTML(card)).join('');
        
        // Add event listeners to card action buttons
        this.setupCardActionListeners();
    }

    // Create HTML for a single card
    createCardHTML(card) {
        const date = new Date(card.timestamp).toLocaleDateString();
        const tags = card.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        return `
            <div class="card" data-id="${card.id}">
                <div class="card-header">
                    <div>
                        <div class="card-title">${this.escapeHtml(card.title)}</div>
                    </div>
                    <span class="card-category ${card.category}">${card.category}</span>
                </div>
                <div class="card-description">${this.escapeHtml(card.description)}</div>
                <div class="card-tags">${tags}</div>
                <div class="card-actions">
                    <button class="edit-btn" data-id="${card.id}">Edit</button>
                    <button class="delete-btn" data-id="${card.id}">Delete</button>
                </div>
            </div>
        `;
    }

    // Escape HTML to prevent XSS
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Setup event listeners
    setupEventListeners() {
        // Add card button
        document.getElementById('addCardBtn').addEventListener('click', () => {
            this.openModal();
        });

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        
        searchBtn.addEventListener('click', () => {
            this.performSearch();
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch();
            }
        });

        // Filter functionality
        document.getElementById('categoryFilter').addEventListener('change', (e) => {
            this.performSearch();
        });

        // Modal close
        document.querySelector('.close').addEventListener('click', () => {
            this.closeModal();
        });

        // Click outside modal to close
        window.addEventListener('click', (e) => {
            const modal = document.getElementById('cardModal');
            if (e.target === modal) {
                this.closeModal();
            }
        });

        // Form submission
        document.getElementById('cardForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveCard();
        });
    }

    // Setup event listeners for card actions
    setupCardActionListeners() {
        // Edit buttons
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.dataset.id);
                this.editCard(id);
            });
        });

        // Delete buttons
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.dataset.id);
                this.deleteCard(id);
            });
        });
    }

    // Perform search with current filters
    performSearch() {
        const searchTerm = document.getElementById('searchInput').value;
        const category = document.getElementById('categoryFilter').value;
        this.renderCards(category, searchTerm);
    }

    // Open modal for adding/editing
    openModal(card = null) {
        const modal = document.getElementById('cardModal');
        const form = document.getElementById('cardForm');
        const title = document.getElementById('modalTitle');
        
        if (card) {
            // Edit mode
            title.textContent = 'Edit Card';
            document.getElementById('cardTitle').value = card.title;
            document.getElementById('cardCategory').value = card.category;
            document.getElementById('cardDescription').value = card.description;
            document.getElementById('cardTags').value = card.tags.join(', ');
            this.currentEditId = card.id;
        } else {
            // Add mode
            title.textContent = 'Add New Card';
            form.reset();
            this.currentEditId = null;
        }
        
        modal.style.display = 'block';
    }

    // Close modal
    closeModal() {
        const modal = document.getElementById('cardModal');
        modal.style.display = 'none';
        document.getElementById('cardForm').reset();
        this.currentEditId = null;
    }

    // Save card (add or update)
    saveCard() {
        const title = document.getElementById('cardTitle').value.trim();
        const category = document.getElementById('cardCategory').value;
        const description = document.getElementById('cardDescription').value.trim();
        const tagsInput = document.getElementById('cardTags').value.trim();
        const tags = tagsInput ? tagsInput.split(',').map(tag => tag.trim()) : [];

        if (!title || !description) {
            alert('Please fill in all required fields');
            return;
        }

        if (this.currentEditId) {
            // Update existing card
            const index = this.cards.findIndex(card => card.id === this.currentEditId);
            if (index !== -1) {
                this.cards[index] = {
                    ...this.cards[index],
                    title,
                    category,
                    description,
                    tags
                };
            }
        } else {
            // Add new card
            const newCard = {
                id: Date.now(),
                title,
                category,
                description,
                tags,
                timestamp: new Date().toISOString()
            };
            this.cards.unshift(newCard); // Add to beginning
        }

        this.saveCards();
        this.closeModal();
        this.renderCards();
    }

    // Edit card
    editCard(id) {
        const card = this.cards.find(card => card.id === id);
        if (card) {
            this.openModal(card);
        }
    }

    // Delete card
    deleteCard(id) {
        if (confirm('Are you sure you want to delete this card?')) {
            this.cards = this.cards.filter(card => card.id !== id);
            this.saveCards();
            this.renderCards();
        }
    }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new CardCatalog();
});
