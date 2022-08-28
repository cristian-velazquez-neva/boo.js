window.addEventListener('scroll', () => {
    let Animated = document.getElementsByClassName("Boo");
    
	for (let index = 0; index < Animated.length; index++) {
		let AnimatedEnter = Animated[index].getBoundingClientRect().top;
		let screamp = window.innerHeight / ((window.innerHeight / 1.5) >= 1.5);

		if (AnimatedEnter < screamp) { Animated[index].classList.add('apearAnimated'); }
        else { Animated[index].classList.remove('apearAnimated'); }
	}
});