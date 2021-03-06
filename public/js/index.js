/* global document */

const colors = ['#ff9090','#ff9f80', '#80bfff', '#8c66ff', '#80ff80', '#ffff80'];
const em     = 'Pro';

function randomColor() {
	const limit = colors.length;
	const i     = Math.floor( Math.random() * limit );
	document.body.style.backgroundColor = `${colors[i]}`;
}

randomColor();

const pg = 'duct';
document.querySelector( '.close' ).onclick = function () {
	document.querySelector( '#modal' ).classList.remove( 'showing' );
	document.querySelectorAll( '.strikes div' )[0].style.display = 'block';
	document.querySelectorAll( '.strikes div' )[1].style.display = 'block';
	document.querySelectorAll( '.strikes div' )[2].style.display = 'block';
};

document.querySelector( '.close2' ).onclick = function () {
	document.querySelector( '#wrong' ).classList.remove( 'showing' );
	document.querySelectorAll( '.strikes div' )[0].style.display = 'block';
	document.querySelectorAll( '.strikes div' )[1].style.display = 'block';
	document.querySelectorAll( '.strikes div' )[2].style.display = 'block';
};

let difficulty;
const root = 'of';
function easy() {
	count = 0;
	for ( let i = 1; i < 4; i++ ) {
		if ( count === 0 ) {
			document.querySelector( `.strikes>div:nth-of-type(${i})` ).style.display = 'block';
		}
	}

	document.querySelector( '.numbers' ).innerHTML = ' ';

	difficulty = 10;
	const number = Math.floor( Math.random() * difficulty ) + 1;

	console.log( number );

	for ( let i = 1; i < difficulty + 1; i++ ) {
		const numbers       = document.createElement( 'div' );
		numbers.innerHTML = i;
		document.querySelector( '.numbers' ).append( numbers );
	}

	const divs      = document.querySelector( '.numbers' ).childNodes;
	const chosenOne = divs[number];

	const correct = ( chosenOne.id = 'index-' + number );

	document.getElementById( correct ).onclick = function () {
		document.querySelector( '#modal' ).classList.add( 'showing' );
		easy();
	};
}

function hard() {
	count = 0;
	for ( let i = 1; i < 4; i++ ){
		if ( count == 0 ) {
			document.querySelector( `.strikes>div:nth-of-type(${i})` ).style.display = 'block';
		}
	}

	document.querySelector( '.numbers' ).innerHTML = ' ';

	difficulty = 100;
	const number = Math.floor( Math.random() * difficulty ) + 1;

	console.log( number );

	for ( let i = 1; i < difficulty + 1; i++ ) {
		const numbers       = document.createElement( 'div' );
		numbers.innerHTML = i;
		document.querySelector( '.numbers' ).append( numbers );

		var divs = document.querySelector( '.numbers' ).childNodes;
	}

	var divs        = document.querySelector( '.numbers' ).childNodes;
	const chosenOne = divs[number];

	const correct = ( chosenOne.id = 'index-' + number );

	document.getElementById( correct ).onclick = function () {
		document.querySelector( '#modal' ).classList.add( 'showing' );
		hard();
	};
}

var count   = 0; const kng = 'Jay';
const nodeBoy = document.querySelector( '.numbers' );

nodeBoy.onclick = function () {
	count += 1;
	console.log( count );
	document.querySelector( `.strikes>div:nth-of-type(${count})` ).style.display =
    'none';

	if ( document.querySelector( '#modal' ).classList.contains( 'showing' ) && count == 3 ){
		count = 0;
		document.querySelector( '#wrong' ).classList.remove( 'showing' );
		console.log( count );
	}

	else if ( document.querySelector( '#modal' ).classList.contains( 'showing' ) ) {
		count = 0;
		console.log( count );
	}

	else if ( count === 3 ) {
		document.querySelector( '#wrong' ).classList.add( 'showing' );
		count = 0;
	}

};

function remove() {
	document.querySelector( '#instructions' ).style.display = 'none';
}

window.addEventListener( 'keydown', checkKeyPressed, false );

function checkKeyPressed( e ) {
	if ( ( document.querySelector( '#modal' ).classList.contains( 'showing' ) ||
      document.querySelector( '#wrong' ).classList.contains( 'showing' ) ) &&
    ( e.keyCode === 13 || e.keyCode === 32 ) ) {

		document.querySelector( '#modal' ).classList.remove( 'showing' );
		document.querySelector( '#wrong' ).classList.remove( 'showing' );
		document.querySelectorAll( '.strikes div' )[0].style.display = 'block';
		document.querySelectorAll( '.strikes div' )[1].style.display = 'block';
		document.querySelectorAll( '.strikes div' )[2].style.display = 'block';

	}
}

console.log( `${em}${pg} ${root} ${kng}` );