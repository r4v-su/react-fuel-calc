import React from "react";

const OtherCosts = function() {

    return(
    <div>
        <h5 class="text mb-2 mt-4">Pozostale koszty</h5>
        <div class="input-group col-md-12 col-12 mb-2">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button"
                data-bs-toggle="dropdown" aria-expanded="false">Wybierz</button>
            <ul class="dropdown-menu">
                <li>
                    <p class="dropdown-item">Winiety</p>
                </li>
                <li>
                    <p class="dropdown-item">TOOL</p>
                </li>
                <li>
                    <p class="dropdown-item">Jedzenie</p>
                </li>
                <li>
                    <hr class="dropdown-divider" />
                </li>
                <li><a class="dropdown-item" href="#">Wlasne...</a></li>
            </ul>
            <input type="text" class="form-control" aria-label="Text input with dropdown button"
                placeholder="Nazwa kosztu"/>
        </div>
        <div class="col col-12 mb-2 input-group">
            <input type="text" class="form-control" placeholder="Koszt"/>
            <span class="input-group-text">ZL</span>
        </div>
        <div class="col-12 col-md-auto mb-2">
            <button class="btn btn-outline-primary col-12" type="button" id="button-addon2">+</button>
        </div>
        </div>
    )
}

export default OtherCosts