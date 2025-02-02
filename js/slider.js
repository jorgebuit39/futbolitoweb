(function() {
    const sliders = [...document.querySelectorAll(".testimony_body")];
    const buttonNext = document.querySelector("#next");
    const buttonBefore = document.querySelector("#before");
    let value;

    buttonNext.addEventListener("click", () => {
        changePosition(1);
    });

    buttonBefore.addEventListener("click", () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        const currentTestimony = document.querySelector(".testimony_body--show").dataset.id;
        value = Number(currentTestimony);
        value += add;

        // Eliminar la clase actual
        sliders[Number(currentTestimony) - 1].classList.remove("testimony_body--show");

        // Manejar los extremos del carrusel
        if (value > sliders.length) {
            value = 1;
        } else if (value === 0) {
            value = sliders.length;
        }

        // Agregar la clase al nuevo elemento
        sliders[value - 1].classList.add("testimony_body--show");
    };
})();

