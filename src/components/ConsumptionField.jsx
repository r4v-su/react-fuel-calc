import React from "react";

const ConsumptionField = function() {

    return (
        <div class="form-floating mt-2 input-group">
        <input type="number" class="form-control" id="consumption" placeholder="Np. 8.6"/>
        <label for="consumption">Średnie spalanie pojazdu:</label>
        <button class="btn btn-outline-secondary dropdown-toggle" type="button"
            data-bs-toggle="dropdown" aria-expanded="false">Wybierz</button>
        <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="#">l / 100km</a></li>
            <li><a class="dropdown-item" href="#">km / l</a></li>
            <li><a class="dropdown-item" href="#">mpg (US)</a></li>
            <li><a class="dropdown-item" href="#">mpg (imperialne)</a></li>
        </ul>
    </div>
)
}

export default ConsumptionField