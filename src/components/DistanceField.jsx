import React from "react";

const DistanceField = function() {

    return(
        <div class="form-floating mt-2 input-group">
        <input type="number" class="form-control" id="distance" placeholder="Np. 1234"/>
        <label for="consumption">Dugość planowanej trasy:</label>
        <span class="input-group-text">km</span>
    </div>
    )
}

export default DistanceField;