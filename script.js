var outputs = document.getElementById('outputs');

function hideAll() {
    chosen_usd.style.display = 'none';
    chosen_euro.style.display = 'none';
    chosen_yen.style.display = 'none';
    chosen_pound.style.display ='none';
    chosen_cd.style.display = 'none';
    outputs.style.display = 'none';
}

var chosen_usd = document.getElementById('usd_starting');
var chosen_euro = document.getElementById('euro_starting');
var chosen_yen = document.getElementById('yen_starting');
var chosen_pound= document.getElementById('pound_starting');
var chosen_cd = document.getElementById('cd_starting');

function chosenUSD() {
    chosen_usd.style.display = 'block';
    chosen_euro.style.display = 'none';
    chosen_yen.style.display = 'none';
    chosen_pound.style.display ='none';
    chosen_cd.style.display = 'none';
    outputs.style.display = 'block';

    footerInfo.innerHTML = "You are converting from United States Dollars (USD)";
}

function chosenEuro() {
    chosen_euro.style.display = 'block';
    chosen_usd.style.display = 'none';
    chosen_yen.style.display = 'none';
    chosen_pound.style.display ='none';
    chosen_cd.style.display = 'none';
    outputs.style.display = 'block';

    footerInfo.innerHTML = "You are converting from Euros (EUR)";
}

function chosenYen() {
    chosen_usd.style.display = 'none'
    chosen_euro.style.display = 'none';
    chosen_yen.style.display = 'block';
    chosen_pound.style.display ='none';
    chosen_cd.style.display = 'none';
    outputs.style.display = 'block';

    footerInfo.innerHTML = "You are converting from Japanese Yen (JPY)";
}

function chosenPound() {
    chosen_usd.style.display = 'none'
    chosen_euro.style.display = 'none';
    chosen_yen.style.display = 'none';
    chosen_pound.style.display ='block';
    chosen_cd.style.display = 'none';
    outputs.style.display = 'block';

    footerInfo.innerHTML = "You are converting from British Pounds (GBP)";
}

function chosenCD() {
    chosen_usd.style.display = 'none'
    chosen_euro.style.display = 'none';
    chosen_yen.style.display = 'none';
    chosen_pound.style.display ='none';
    chosen_cd.style.display = 'block';
    outputs.style.display = 'block';

    footerInfo.innerHTML = "You are converting from Canadian Dollars (CAD)";
}

var usdOutput = document.getElementById('usd_output');
var euroOutput = document.getElementById('euro_output');
var yenOutput = document.getElementById('yen_output');
var poundOutput = document.getElementById('pound_output');
var cdOutput = document.getElementById('cd_output');


function convertNoUSD() {
    var usd_output = usd_starting.value;
    var usd_output = ((usd_starting.value) * 1);

    usdOutput.innerHTML = 'USD:' + " " + usd_output.toFixed(2);
    var euro_output = usd_starting.value;
    var euro_output = ((usd_starting.value) * 0.853607);

    euroOutput.innerHTML = 'Euro:' + " " + euro_output.toFixed(2);

    var yen_output = usd_starting.value;
    var yen_output = ((usd_starting.value) * 105.38);

    yenOutput.innerHTML = 'Yen:' + " " + yen_output.toFixed(2);
    
    var pound_output = usd_starting.value;
    var pound_output = ((usd_starting.value) * 0.7749);

    poundOutput.innerHTML = 'British Pound:' + " " + pound_output.toFixed(2);

    var cd_output = usd_starting.value;
    var cd_output = ((usd_starting.value) * 1.3191);

    cdOutput.innerHTML = 'Canadian Dollar:' + " " + cd_output.toFixed(2);
}

function convertNoEuro() {
    var usd_output = euro_starting.value;
    var usd_output = ((euro_starting.value) * 1.1717);

    usdOutput.innerHTML = 'USD:' + " " + usd_output.toFixed(2);

    var euro_output = euro_starting.value;
    var euro_output = ((euro_starting.value) * 1);

    euroOutput.innerHTML = 'Euro:' + " " + euro_output.toFixed(2);

    var yen_output = euro_starting.value;
    var yen_output = ((euro_starting.value) * 123.533);

    yenOutput.innerHTML = 'Yen:' + " " + yen_output.toFixed(2);
    
    var pound_output = euro_starting.value;
    var pound_output = ((euro_starting.value) * 0.906383);

    poundOutput.innerHTML = 'British Pound:' + " " + pound_output.toFixed(2);

    var cd_output = euro_starting.value;
    var cd_output = ((euro_starting.value) * 1.5442);

    cdOutput.innerHTML = 'Canadian Dollar:' + " " + cd_output.toFixed(2);
}

function convertNoYen() {
    var usd_output = yen_starting.value;
    var usd_output = ((yen_starting.value) * 0.00948131);
    usdOutput.innerHTML = 'USD:' + " " + usd_output.toFixed(2);

    var euro_output = yen_starting.value;
    var euro_output = ((yen_starting.value) * 0.00809220);

    euroOutput.innerHTML = 'Euro:' + " " + euro_output.toFixed(2);

    var yen_output = yen_starting.value;
    var yen_output = ((yen_starting.value) * 1);

    yenOutput.innerHTML = 'Yen:' + " " + yen_output.toFixed(2);
    
    var pound_output = yen_starting.value;
    var pound_output = ((yen_starting.value) * 0.00733250);

    poundOutput.innerHTML = 'British Pound:' + " " + pound_output.toFixed(2);

    var cd_output = yen_starting.value;
    var cd_output = ((yen_starting.value) * 0.0124947);

    cdOutput.innerHTML = 'Canadian Dollar:' + " " + cd_output.toFixed(2);
}

function convertNoPound() {
    var usd_output = pound_starting.value;
    var usd_output = ((pound_starting.value) * 1.29336);
    usdOutput.innerHTML = 'USD:' + " " + usd_output.toFixed(2);

    var euro_output = pound_starting.value;
    var euro_output = ((pound_starting.value) * 1.10359);

    euroOutput.innerHTML = 'Euro:' + " " + euro_output.toFixed(2);

    var yen_output = pound_starting.value;
    var yen_output = ((pound_starting.value) * 136.393);

    yenOutput.innerHTML = 'Yen:' + " " + yen_output.toFixed(2);
    
    var pound_output = pound_starting.value;
    var pound_output = ((pound_starting.value) * 1);

    poundOutput.innerHTML = 'British Pound:' + " " + pound_output.toFixed(2);

    var cd_output = pound_starting.value;
    var cd_output = ((pound_starting.value) * 1.70413);

    cdOutput.innerHTML = 'Canadian Dollar:' + " " + cd_output.toFixed(2);
}

function convertNoCD() {
    var usd_output = cd_starting.value;
    var usd_output = ((cd_starting.value) * 0.758922);
    usdOutput.innerHTML = 'USD:' + " " + usd_output.toFixed(2);

    var euro_output = cd_starting.value;
    var euro_output = ((cd_starting.value) * 0.647619);

    euroOutput.innerHTML = 'Euro:' + " " + euro_output.toFixed(2);

    var yen_output = cd_starting.value;
    var yen_output = ((cd_starting.value) * 80.0421);

    yenOutput.innerHTML = 'Yen:' + " " + yen_output.toFixed(2);
    
    var pound_output = cd_starting.value;
    var pound_output = ((cd_starting.value) * 0.586804);

    poundOutput.innerHTML = 'British Pound:' + " " + pound_output.toFixed(2);

    var cd_output = cd_starting.value;
    var cd_output = ((cd_starting.value) * 1);

    cdOutput.innerHTML = 'Canadian Dollar:' + " " + cd_output.toFixed(2);
}

var footerInfo = document.getElementById('footer_info');