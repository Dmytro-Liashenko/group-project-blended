const themeToggleBtn = document.querySelector('.theme-toggle-btn');
export function toggleTheme() {
    const body = document.body;
    const currentTheme = body.dataset.theme || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    if (themeToggleBtn) {
        themeToggleBtn.textContent = newTheme === 'light' ? '🌙' : '☀️';
    }
}

export function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.dataset.theme = savedTheme;

    if (themeToggleBtn) {
        themeToggleBtn.textContent = savedTheme === 'light' ? '🌙' : '☀️';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }
    });