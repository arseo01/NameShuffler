window.onload = () => {
    const shuffleBtn = document.getElementById("shuffleBtn");
    const nameInput = document.getElementById("nameInput");
    const result = document.getElementById("result");

    shuffleBtn.addEventListener("click", () => {
        const names = nameInput.value .split(",") .map(n => n.trim()) .filter(n => n);

        if (names.length === 0) {
            result.textContent = "Please enter at least one name.";
            return;
        }

        const randomIndex = Math.floor(Math.random() * names.length);
        const selectedName = names[randomIndex];

        result.textContent = `${selectedName}`;
    });
};