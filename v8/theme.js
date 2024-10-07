// Функция для установки темы
function setTheme(theme) {
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme); // Сохраняем выбор пользователя
    updateThemeLinks(theme); // Обновляем видимость ссылок
}

// Функция для обновления отображения ссылок
function updateThemeLinks(currentTheme) {
    if (currentTheme === 'dark-theme') {
        document.getElementById('dark-theme').style.display = 'none';
        document.getElementById('light-theme').style.display = 'inline';
    } else {
        document.getElementById('dark-theme').style.display = 'inline';
        document.getElementById('light-theme').style.display = 'none';
    }
}

// Проверяем, есть ли сохраненная тема
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    setTheme(savedTheme); // Устанавливаем сохраненную тему
} else {
    // Если темы нет, проверяем системные настройки
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDarkScheme ? 'dark-theme' : 'light-theme');
}

// Переключение на светлую тему
document.getElementById('light-theme').addEventListener('click', function (e) {
    e.preventDefault(); // Отменяем переход по ссылке
    setTheme('light-theme');
});

// Переключение на темную тему
document.getElementById('dark-theme').addEventListener('click', function (e) {
    e.preventDefault(); // Отменяем переход по ссылке
    setTheme('dark-theme');
});