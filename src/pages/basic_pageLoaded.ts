function basic_pageLoaded(callback: Function): void {
    function EventPageLoaded(): void {
        const rootContainer: HTMLElement = document.getElementById("Root"); // Получаем главный элемент страницы
        if (!rootContainer) {
            return;
        }
        callback(rootContainer); // передаем его в функцию
    }
    document.addEventListener("DOMContentLoaded", EventPageLoaded); // Вешаем обработчик событий на загрузку стр
}

export default basic_pageLoaded;
