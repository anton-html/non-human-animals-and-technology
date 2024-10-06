// Функция для установки темы
function setTheme(theme) {
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme); // Сохраняем выбор пользователя
    updateThemeLinks(theme); // Обновляем видимость ссылок и текст переключателя
}

// Функция для обновления текста переключателя
function updateThemeLinks(currentTheme) {
    const darkThemeLink = document.getElementById('dark-theme');
    const lightThemeLink = document.getElementById('light-theme');
    
    if (currentTheme === 'dark-theme') {
        darkThemeLink.style.display = 'none';
        lightThemeLink.style.display = 'inline';
    } else {
        darkThemeLink.style.display = 'inline';
        lightThemeLink.style.display = 'none';
    }
}

// Проверяем, есть ли сохраненная тема
document.addEventListener('DOMContentLoaded', () => {
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
        e.preventDefault();
        setTheme('light-theme');
    });

    // Переключение на темную тему
    document.getElementById('dark-theme').addEventListener('click', function (e) {
        e.preventDefault();
        setTheme('dark-theme');
    });
});