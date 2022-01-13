<template>
	<div>
		<div class="accordion" id="accordionExample">
			<div class="accordion-item">
				<h2 class="accordion-header" id="headingOne">
					<button
						class="accordion-button collapsed"
						type="button"
						data-coreui-toggle="collapse"
						data-coreui-target="#collapseOne"
						aria-expanded="false"
						aria-controls="collapseOne"
					>
						Accordion Item #1
					</button>
				</h2>
				<div
					class="accordion-collapse collapse"
					id="collapseOne"
					aria-labelledby="headingOne"
					data-coreui-parent="#accordionExample"
				>
					<div class="accordion-body">
						<strong
							>This is the first item&apos;s accordion
							body.</strong
						>
						It is hidden by default, until the collapse plugin adds
						the appropriate classes that we use to style each
						element. These classes control the overall appearance,
						as well as the showing and hiding via CSS transitions.
						You can modify any of this with custom CSS or overriding
						our default variables. It&apos;s also worth noting that
						just about any HTML can go within
						the<code>.accordion-body</code>, though the transition
						does limit overflow.
					</div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header" id="headingTwo">
					<button
						class="accordion-button collapsed"
						type="button"
						data-coreui-toggle="collapse"
						data-coreui-target="#collapseTwo"
						aria-expanded="false"
						aria-controls="collapseTwo"
					>
						Accordion Item #2
					</button>
				</h2>
				<div
					class="accordion-collapse collapse"
					id="collapseTwo"
					aria-labelledby="headingTwo"
					data-coreui-parent="#accordionExample"
				>
					<div class="accordion-body">
						<strong
							>This is the second item&apos;s accordion
							body.</strong
						>
						It is hidden by default, until the collapse plugin adds
						the appropriate classes that we use to style each
						element. These classes control the overall appearance,
						as well as the showing and hiding via CSS transitions.
						You can modify any of this with custom CSS or overriding
						our default variables. It&apos;s also worth noting that
						just about any HTML can go within
						the<code>.accordion-body</code>, though the transition
						does limit overflow.
					</div>
				</div>
			</div>
			<div class="accordion-item">
				<h2 class="accordion-header" id="headingThree">
					<button
						class="accordion-button collapsed"
						type="button"
						data-coreui-toggle="collapse"
						data-coreui-target="#collapseThree"
						aria-expanded="false"
						aria-controls="collapseThree"
					>
						Accordion Item #3
					</button>
				</h2>
				<div
					class="accordion-collapse collapse"
					id="collapseThree"
					aria-labelledby="headingThree"
					data-coreui-parent="#accordionExample"
				>
					<div class="accordion-body">
						<strong
							>This is the third item&apos;s accordion
							body.</strong
						>
						It is hidden by default, until the collapse plugin adds
						the appropriate classes that we use to style each
						element. These classes control the overall appearance,
						as well as the showing and hiding via CSS transitions.
						You can modify any of this with custom CSS or overriding
						our default variables. It&apos;s also worth noting that
						just about any HTML can go within
						the<code>.accordion-body</code>, though the transition
						does limit overflow.
					</div>
				</div>
			</div>
		</div>
		<p>
			<button
				class="btn btn-primary"
				type="button"
				data-coreui-toggle="collapse"
				data-coreui-target="#collapseWidthExample"
				aria-expanded="false"
				aria-controls="collapseWidthExample"
			>
				Toggle width collapse
			</button>
		</p>
		<div style="min-height: 120px">
			<div class="collapse collapse-horizontal" id="collapseWidthExample">
				<div class="card card-body" style="width: 300px">
					This is some placeholder content for a horizontal collapse.
					It's hidden by default and shown when triggered.
				</div>
			</div>
		</div>
		<nav aria-label="...">
			<ul class="pagination">
				<li class="page-item disabled">
					<a
						class="page-link"
						href="#"
						tabindex="-1"
						aria-disabled="true"
						>Previous</a
					>
				</li>
				<li class="page-item"><a class="page-link" href="#">1</a></li>
				<li class="page-item active" aria-current="page">
					<a class="page-link" href="#">2</a>
				</li>
				<li class="page-item"><a class="page-link" href="#">3</a></li>
				<li class="page-item">
					<a class="page-link" href="#">Next</a>
				</li>
			</ul>
		</nav>
		<button
			class="btn btn-lg btn-danger"
			type="button"
			data-coreui-toggle="popover"
			title=""
			data-coreui-content="And here's some amazing content. It's very engaging. Right?"
			data-coreui-original-title="Popover title"
		>
			Click to toggle popover
		</button>
		<div class="spinner-border" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">First</th>
					<th scope="col">Last</th>
					<th scope="col">Handle</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">1</th>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
				</tr>
				<tr>
					<th scope="row">2</th>
					<td>Jacob</td>
					<td>Thornton</td>
					<td>@fat</td>
				</tr>
				<tr>
					<th scope="row">3</th>
					<td colspan="2">Larry the Bird</td>
					<td>@twitter</td>
				</tr>
			</tbody>
		</table>
		<span
			class="d-inline-block"
			tabindex="0"
			data-coreui-toggle="tooltip"
			data-coreui-original-title="Disabled tooltip"
		>
			<button class="btn btn-primary" type="button" disabled>
				Disabled button
			</button></span
		>
		<div class="col-md-6 mb-4">
			<div class="nav-tabs-boxed">
				<ul class="nav nav-tabs" role="tablist">
					<li class="nav-item">
						<a
							class="nav-link active"
							data-coreui-toggle="tab"
							href="#home"
							role="tab"
							aria-controls="home"
							>Home</a
						>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							data-coreui-toggle="tab"
							href="#profile"
							role="tab"
							aria-controls="profile"
							>Profile</a
						>
					</li>
					<li class="nav-item">
						<a
							class="nav-link"
							data-coreui-toggle="tab"
							href="#messages"
							role="tab"
							aria-controls="messages"
							>Messages</a
						>
					</li>
				</ul>
				<div class="tab-content">
					<div class="tab-pane active" id="home" role="tabpanel">
						1. Lorem ipsum dolor sit amet, consectetur adipisicing
						elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis
						nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</div>
					<div class="tab-pane" id="profile" role="tabpanel">
						2. Lorem ipsum dolor sit amet, consectetur adipisicing
						elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis
						nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</div>
					<div class="tab-pane" id="messages" role="tabpanel">
						3. Lorem ipsum dolor sit amet, consectetur adipisicing
						elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis
						nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</div>
				</div>
			</div>
		</div>
		<div class="row align-items-center">
			<div class="col-12 col-xl-2 mb-3 mb-xl-0">Normal</div>
			<div class="col-auto">
				<button class="btn btn-primary" type="button">Primary</button>
				<button class="btn btn-secondary" type="button">
					Secondary
				</button>
				<button class="btn btn-success" type="button">Success</button>
				<button class="btn btn-danger" type="button">Danger</button>
				<button class="btn btn-warning" type="button">Warning</button>
				<button class="btn btn-info" type="button">Info</button>
				<button class="btn btn-light" type="button">Light</button>
				<button class="btn btn-dark" type="button">Dark</button>
				<button class="btn btn-link" type="button">Link</button>
			</div>
		</div>
		<div class="row align-items-center mt-3">
			<div class="col-12 col-xl-2 mb-3 mb-xl-0">Active State</div>
			<div class="col-auto">
				<button
					class="btn btn-primary active"
					type="button"
					aria-pressed="true"
				>
					Primary
				</button>
				<button
					class="btn btn-secondary active"
					type="button"
					aria-pressed="true"
				>
					Secondary
				</button>
				<button
					class="btn btn-success active"
					type="button"
					aria-pressed="true"
				>
					Success
				</button>
				<button
					class="btn btn-danger active"
					type="button"
					aria-pressed="true"
				>
					Danger
				</button>
				<button
					class="btn btn-warning active"
					type="button"
					aria-pressed="true"
				>
					Warning
				</button>
				<button
					class="btn btn-info active"
					type="button"
					aria-pressed="true"
				>
					Info
				</button>
				<button
					class="btn btn-light active"
					type="button"
					aria-pressed="true"
				>
					Light
				</button>
				<button
					class="btn btn-dark active"
					type="button"
					aria-pressed="true"
				>
					Dark
				</button>
				<button
					class="btn btn-link active"
					type="button"
					aria-pressed="true"
				>
					Link
				</button>
			</div>
		</div>
		<div class="row align-items-center mt-3">
			<div class="col-12 col-xl-2 mb-3 mb-xl-0">Disabled</div>
			<div class="col-auto">
				<button
					class="btn btn-primary active"
					type="button"
					disabled=""
				>
					Primary
				</button>
				<button
					class="btn btn-secondary active"
					type="button"
					disabled=""
				>
					Secondary
				</button>
				<button
					class="btn btn-success active"
					type="button"
					disabled=""
				>
					Success
				</button>
				<button class="btn btn-danger active" type="button" disabled="">
					Danger
				</button>
				<button
					class="btn btn-warning active"
					type="button"
					disabled=""
				>
					Warning
				</button>
				<button class="btn btn-info active" type="button" disabled="">
					Info
				</button>
				<button class="btn btn-light active" type="button" disabled="">
					Light
				</button>
				<button class="btn btn-dark active" type="button" disabled="">
					Dark
				</button>
				<button class="btn btn-link active" type="button" disabled="">
					Link
				</button>
			</div>
		</div>
		<div class="mb-3">
			<label class="form-label" for="exampleFormControlInput1"
				>Email address</label
			>
			<input
				class="form-control"
				id="exampleFormControlInput1"
				type="email"
				placeholder="name@example.com"
			/>
		</div>
		<div class="mb-3">
			<label class="form-label" for="exampleFormControlTextarea1"
				>Example textarea</label
			>
			<textarea
				class="form-control"
				id="exampleFormControlTextarea1"
				rows="3"
			></textarea>
		</div>
		<div class="mb-3 row">
			<label class="col-sm-2 col-form-label" for="staticEmail"
				>Email</label
			>
			<div class="col-sm-10">
				<input
					class="form-control-plaintext"
					id="staticEmail"
					type="text"
					readonly
					value="email@example.com"
				/>
			</div>
		</div>
		<div class="mb-3 row">
			<label class="col-sm-2 col-form-label" for="inputPassword"
				>Password</label
			>
			<div class="col-sm-10">
				<input
					class="form-control"
					id="inputPassword"
					type="password"
				/>
			</div>
		</div>
		<div class="mb-3">
			<label class="form-label" for="formFile"
				>Default file input example</label
			>
			<input class="form-control" id="formFile" type="file" />
		</div>
		<div class="mb-3">
			<label class="form-label" for="formFileMultiple"
				>Multiple files input example</label
			>
			<input
				class="form-control"
				id="formFileMultiple"
				type="file"
				multiple
			/>
		</div>
		<div class="mb-3">
			<label class="form-label" for="formFileDisabled"
				>Disabled file input example</label
			>
			<input
				class="form-control"
				id="formFileDisabled"
				type="file"
				disabled
			/>
		</div>
		<div class="mb-3">
			<label class="form-label" for="formFileSm"
				>Small file input example</label
			>
			<input
				class="form-control form-control-sm"
				id="formFileSm"
				type="file"
			/>
		</div>
		<div>
			<label class="form-label" for="formFileLg"
				>Large file input example</label
			>
			<input
				class="form-control form-control-lg"
				id="formFileLg"
				type="file"
			/>
		</div>
		<div class="form-check">
			<input
				class="form-check-input"
				id="flexCheckDefault"
				type="checkbox"
			/>
			<label class="form-check-label" for="flexCheckDefault"
				>Default checkbox</label
			>
		</div>
		<div class="form-check">
			<input
				class="form-check-input"
				id="flexCheckChecked"
				type="checkbox"
				checked
			/>
			<label class="form-check-label" for="flexCheckChecked"
				>Checked checkbox</label
			>
		</div>
		<div class="form-floating mb-3">
			<input
				class="form-control"
				id="floatingInput"
				type="email"
				placeholder="name@example.com"
			/>
			<label for="floatingInput">Email address</label>
		</div>
		<div class="form-floating">
			<input
				class="form-control"
				id="floatingPassword"
				type="password"
				placeholder="Password"
			/>
			<label for="floatingPassword">Password</label>
		</div>
		<div class="card-body tab-pane p-3 preview active">
			<form class="row g-3">
				<div class="col-md-6">
					<label class="form-label" for="inputEmail4">Email</label>
					<input class="form-control" id="inputEmail4" type="email" />
				</div>
				<div class="col-md-6">
					<label class="form-label" for="inputPassword4"
						>Password</label
					>
					<input
						class="form-control"
						id="inputPassword4"
						type="password"
					/>
				</div>
				<div class="col-12">
					<label class="form-label" for="inputAddress">Address</label>
					<input
						class="form-control"
						id="inputAddress"
						type="text"
						placeholder="1234 Main St"
					/>
				</div>
				<div class="col-12">
					<label class="form-label" for="inputAddress2"
						>Address 2</label
					>
					<input
						class="form-control"
						id="inputAddress2"
						type="text"
						placeholder="Apartment, studio, or floor"
					/>
				</div>
				<div class="col-md-6">
					<label class="form-label" for="inputCity">City</label>
					<input class="form-control" id="inputCity" type="text" />
				</div>
				<div class="col-md-4">
					<label class="form-label" for="inputState">State</label>
					<select class="form-select" id="inputState">
						<option selected>Choose...</option>
						<option>...</option>
					</select>
				</div>
				<div class="col-md-2">
					<label class="form-label" for="inputZip">Zip</label>
					<input class="form-control" id="inputZip" type="text" />
				</div>
				<div class="col-12">
					<div class="form-check">
						<input
							class="form-check-input"
							id="gridCheck"
							type="checkbox"
						/>
						<label class="form-check-label" for="gridCheck"
							>Check me out</label
						>
					</div>
				</div>
				<div class="col-12">
					<button class="btn btn-primary" type="submit">
						Sign in
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
