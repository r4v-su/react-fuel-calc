import React from "react";

const FuelsToggle = function() {
//change state of user self-input for prices
    return (
        <div class="form-group p-1 mt-2 mb-2">
        <h5 class="text mb-2">Rodzaj paliwa</h5>
        <div class="form-check form-switch mb-2">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label class="form-check-label" for="flexSwitchCheckDefault">Podam wlasna cene</label>
        </div>
        </div>
    )
}

export default FuelsToggle
