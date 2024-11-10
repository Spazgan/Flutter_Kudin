function showSection(sectionId) {
    // Скрыть все секции
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    // Показать выбранную секцию
    document.getElementById(sectionId).style.display = 'block';
}
