import React from "react";

const FuelsRadios = function () {
	return (
		<div>
			<input type="radio" class="btn-check" name="fuels" id="on" autocomplete="off"/>
			<label class="btn btn-secondary btn-sm"for="on">
				ON
			</label>
			<input type="radio" class="btn-check" name="fuels" id="pb95" autocomplete="off"/>
			<label class="btn btn-secondary btn-sm"for="pb95">
				PB95
			</label>
			<input
				type="radio" class="btn-check" name="fuels" id="lpg" autocomplete="off"/>
			<label class="btn btn-secondary btn-sm"for="lpg">
				LPG
			</label>
		</div>
	);
};
export default FuelsRadios;
