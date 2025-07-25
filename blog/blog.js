const articles = [
  {
    id: 1,
    title: 'Septimus Heap Book One: Magyk',
    date: 'July 5, 2022',
    description: 'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
    imgAlt: 'Book cover for Septimus Heap 1',
    ages: '10-14',
    genre: 'Fantasy',
    stars: '****'
  },
  {
    id: 2,
    title: 'Magnus Chase Book One: Sword of Summer',
    date: 'December 12, 2021',
    description: 'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
    imgSrc: 'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
    imgAlt: 'Book cover for Magnus Chase 1',
    ages: '12-16',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐'
  }
];

function renderArticles() {
  const container = document.getElementById('articles');
  container.innerHTML = '';
  articles.forEach(item => {
    const article = document.createElement('article');
    article.innerHTML = `
	<div class="book-meta">
		<time datetime="${item.date}">${item.date}</time>
		<span class="ages">${item.ages}</span><br>
		<span class="genre">${item.genre}</span><br>
		<span class="stars">${item.stars}</span>
	</div>
      <div class="book-content">
        <h2>${item.title}</h2>
        <img src="${item.imgSrc}" alt="${item.imgAlt}">
        <p>${item.description} <span class="readmore">Read More...</span></p>
      </div>
    `;
    container.appendChild(article);
  });
}

document.addEventListener('DOMContentLoaded', renderArticles);
