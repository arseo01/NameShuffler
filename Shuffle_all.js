window.onload = () => {
    const shuffleBtn = document.getElementById("shuffleBtn");
    const nameInput = document.getElementById("nameInput");
    const result = document.getElementById("result");

    shuffleBtn.addEventListener("click", () => {
        let names = nameInput.value
            .split(",")
            .map(n => n.trim())
            .filter(n => n);

        if (names.length === 0) {
            result.value = "Please enter at least one name.";
            return;
        }

        for (let i = names.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [names[i], names[j]] = [names[j], names[i]];
        }

        result.value = names.join("\n");
    });
};