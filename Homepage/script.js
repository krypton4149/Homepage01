//  slider js


$(document).ready(function() {
	
	// Número de slides
	let imgItems = $('.slider li').length;
	let imgPos = 1;
	
	// Agregando paginación
	for (let i = 0; i < imgItems; i++) {
		$('.pagination').append('<li><i class="fa fa-circle"></i></li>');	
	}	
	
	// Ocultamos todos los slides
	$('.slider li').hide();
	// Mostramos el primer slide
	$('.slider li:first').show();
	
	// Damos estilos al primer item de la paginación
	$('.pagination li:first').css({
		'color': '#cd6e2e'
	});
	
	// Ejecutamos todas las funciones
	$('.pagination li').on('click', pagination);
	$('.right i').on('click', nextSlider);
	$('.left i').on('click', prevSlider);
	
	// El slider se ejecuta automaticamente cada 5 segundos
	let sliderAuto = setInterval(function() {
		nextSlider();
	}, 5000);
	
	// Funciones
	function pagination() {
		// Posición de la paginación seleccionada
		let paginationPos = $(this).index() + 1;
		// Ocultamos todos los slides
		$('.slider li').hide();
		// Mostramos el slide seleccionado
		$(`.slider li:nth-child(${paginationPos})`).fadeIn(1000);
		// Dandole estilos a la paginación seleccionada
		$('.pagination li').css({
			'color': '#858585'
		})
		$(this).css({
			'color': '#cd6e2e'
		});
		imgPos = paginationPos;
	}
	
	function nextSlider() {
		imgPos >= imgItems ? imgPos = 1 : imgPos++;
		$('.pagination li').css({
			'color': '#858585'
		});
		$(`.pagination li:nth-child(${imgPos})`).css({
			'color': '#cd6e2e'
		});
		// Ocultamos todos los slide
		$('.slider li').hide();
		// Mostramos el slide seleccionado
		$(`.slider li:nth-child(${imgPos})`).fadeIn();
	}
	
	function prevSlider() {
		imgPos <= 1 ? imgPos = imgItems : imgPos--;
		$('.pagination li').css({
			'color': '#858585'
		});
		$(`.pagination li:nth-child(${imgPos})`).css({
			'color': '#cd6e2e'
		});
		// Ocultamos todos los slide
		$('.slider li').hide();
		// Mostramos el slide seleccionado
		$(`.slider li:nth-child(${imgPos})`).fadeIn(1000);
	}
	
	// Cuando le damos click a las flechas o a la paginación el slider deja de ser automatico
	$('.left i, .right i').on('click', function() {
		clearInterval(sliderAuto);
	});
	
	// Cuando presionamos la tecla de la derecha el slider avanza
	// Cuando presionamos la tecla de la izquierda el slider se devuelve
	$(document).on('keydown', function(e) {
		e.keyCode == 37 ? $('.left i').trigger('click') : '';
		e.keyCode == 39 ? $('.right i').trigger('click') : '';
	});
	
});
