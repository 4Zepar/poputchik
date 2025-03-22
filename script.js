document.addEventListener("DOMContentLoaded", () => {
    flatpickr("#arrivalDate", {
        minDate: "today",
        allowInput: true
    });
});