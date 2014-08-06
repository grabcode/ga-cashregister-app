
// Bind event
document.getElementById('entry').onsubmit = add;
document.getElementById('reinitialize').onclick = initialize;

var total    = 0;
var newEntry = document.getElementById('newEntry');

// Process entry
function add(e){
	e.preventDefault();
	var entry = parseFloat(newEntry.value);
	var convertedEntry = currencyFormat(entry);
	
	total += entry;
	var converTotal = currencyFormat(total);

	document.getElementById('entries').innerHTML += '<tr><td></td><td>'+convertedEntry+'</td></tr>'
	document.getElementById('total').innerHTML = converTotal;
	newEntry.value = '';
}

// Limit entry to 2 decimals
function currencyFormat(number){
	var currency = parseFloat(number);
	currency = currency.toFixed(2);
	return '$'+currency;
}

// Initialize
function initialize(){
	total = 0;
	newEntry.value = 'How Much?';
	document.getElementById('entries').innerHTML = '';
	document.getElementById('total').innerHTML = '$0.00';
}

newEntry.onfocus = function(){
	newEntry.value = '';
}

newEntry.onblur = function(){
	newEntry.value = 'How Much?';
}

initialize();
