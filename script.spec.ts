import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock the DOM elements
const mockDocument: any = {
  querySelectorAll: vi.fn(),
  getElementById: vi.fn(),
};

// Mock the DOM elements for the book cards
const mockBookCards = [
  {
    querySelector: vi.fn().mockReturnValue({ textContent: 'Book Title 1' }),
    style: { display: 'block' },
  },
  {
    querySelector: vi.fn().mockReturnValue({ textContent: 'Book Title 2' }),
    style: { display: 'block' },
  },
];

// Mock the search bar element
const mockSearchBar = {
  value: '',
};

// Set up the mocks before each test
beforeEach(() => {
  vi.clearAllMocks();
  mockDocument.querySelectorAll.mockReturnValue(mockBookCards);
  mockDocument.getElementById.mockReturnValue(mockSearchBar);
  global.document = mockDocument;
});

// Mock the searchBooks function
function searchBooks() {
  const searchTerm = document.getElementById("search-bar").value.toLowerCase();

  const livroCards = document.querySelectorAll(".livro-card");
  livroCards.forEach(card => {
    const title = card.querySelector("h2").textContent.toLowerCase();
    const shouldShow = title.includes(searchTerm);

    card.style.display = shouldShow ? "block" : "none";
  });
}

describe('searchBooks', () => {
  it('should display all book cards when search term is empty', () => {
    mockSearchBar.value = '';
    searchBooks();
    mockBookCards.forEach(card => {
      expect(card.style.display).toBe('block');
    });
  });

  it('should display only matching book cards', () => {
    mockSearchBar.value = 'Book Title 1';
    searchBooks();
    expect(mockBookCards[0].style.display).toBe('block');
    expect(mockBookCards[1].style.display).toBe('none');
  });

  it('should hide all book cards if no title matches the search term', () => {
    mockSearchBar.value = 'Non-matching Title';
    searchBooks();
    mockBookCards.forEach(card => {
      expect(card.style.display).toBe('none');
    });
  });
});
