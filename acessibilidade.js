function fonte(e){
	var elemento = document.getElementsByClassName("mudarfonte");
	var atual = elemento[0].style.fontSize;
	
	if(e == 'a'){
		atual = parseInt(atual)+2+'px';
	}else if(e == 'b'){
		atual = parseInt(atual)-2+'px';
	}else if(e == 'c'){
		atual = 18+'px';
	}
	
		
	elemento[0].style.fontSize=atual;
	elemento[1].style.fontSize=atual;
	elemento[2].style.fontSize=atual;
}

function alto_contraste(){
	const background = [...document.getElementsByClassName("background")];
	const titles = [...document.getElementsByClassName("title")];
	const labels = [...document.getElementsByClassName("label")];
	const input = [...document.getElementsByClassName("input")];
	const confirmationButtons = [...document.getElementsByClassName("confirmation-button")];

	background.forEach(element => {
		element.className = element.className.split(/\s+/).map(c => c.concat("-high-contrast")).join(/\s+/);
	});

	titles.forEach(element => {
		element.className = element.className.split(/\s+/).map(c => c.concat("-high-contrast")).join(/\s+/);
	});

	labels.forEach(element => {
		element.className = element.className.split(/\s+/).map(c => c.concat("-high-contrast")).join(/\s+/);
	});

	input.forEach(element => {
		element.className = element.className.split(/\s+/).map(c => c.concat("-high-contrast")).join(/\s+/);
	});

	confirmationButtons.forEach(element => {
		element.className = element.className.split(/\s+/).map(c => c.concat("-high-contrast")).join(/\s+/);
	});
}

function cor_original(){
	const background = [...document.getElementsByClassName("background-high-contrast")];
	const titles = [...document.getElementsByClassName("title-high-contrast")];
	const labels = [...document.getElementsByClassName("label-high-contrast")];
	const input = [...document.getElementsByClassName("input-high-contrast")];
	const confirmationButtons = [...document.getElementsByClassName("confirmation-button-high-contrast")];

	background.forEach(element => {
		element.className = element.className.split(/\s+/).map(c => {
			c = c.split("-high-contrast")[0];
			return c;
		}).join(/\s+/);
	});

	titles.forEach(element => {
		element.className = element.className.split(/\s+/).map(c => {
			c = c.split("-high-contrast")[0];
			return c;
		}).join(/\s+/);
	});

	labels.forEach(element => {
		element.className = element.className.split(/\s+/).map(c => {
			c = c.split("-high-contrast")[0];
			return c;
		}).join(/\s+/);
	});

	input.forEach(element => {
		element.className = element.className.split(/\s+/).map(c => {
			c = c.split("-high-contrast")[0];
			return c;
		}).join(/\s+/);
	});

	confirmationButtons.forEach(element => {
		element.className = element.className.split(/\s+/).map(c => {
			c = c.split("-high-contrast")[0];
			return c;
		}).join(/\s+/);
	});
}