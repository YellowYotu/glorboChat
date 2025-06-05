const friendsButton = document.getElementById('friends-button');
const friendsPage = document.getElementById('friends-page');

friendsButton.addEventListener('click', () => {
  // Показать страницу Friends
  friendsPage.classList.toggle('active');
});
