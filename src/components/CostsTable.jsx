import React from "react";

const CostsTable = function() {

    return(
        <div class="row p-3">
				<div class="col p-3">
					<table class="table">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Nazwa</th>
								<th scope="col">Koszt</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Winiety</td>
								<td>200 zl</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Jedzenie</td>
								<td>25 zl</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>Jedzenie</td>
								<td>25 zl</td>
							</tr>
							<tr class="table-active">
								<th>SUMA</th>
								<td></td>
								<td>250 zl</td>
							</tr>
				</tbody>
				</table>
			</div>
            </div>
    )
}

export default CostsTable