$('#menu-btn').click (function(){
    $('nav .navigation ul').addClass('active')

});
$('#menu-close').click (function(){
    $('nav .navigation ul').removeClass('active')

});

// -----------------------------------------------------------------
$(document).ready(function() {
    $.getJSON( 'data.json', function(data) {
        let medicinesHtml = '';
        data.medicines.forEach(function(medicine) {
            medicinesHtml += `
                <div class="col-md-4">
                    <div class="card">
                    <img src="${medicine.image}" class="card-img-top" alt="${medicine.image}">
                        <div class="card-body">
                            <h5 class="card-title">${medicine.name}</h5>
                            <p class="card-text"> ${medicine.use}</p>
                            <p class="card-text-Price"> ${medicine.price}</p>
                        </div>
                    </div>
                </div>`;
        });
        $('#medicines').html(medicinesHtml);

// Fetch and display vendors
let vendorsHtml = '';
data.vendors.forEach(function(vendor) {
    vendorsHtml += `
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${vendor.name}</h5>
                    <p class="card-text">Service: ${vendor.service}</p>
                    <p class="card-text">Contact: ${vendor.contact}</p>
                    <p class="card-text">Address: ${vendor.address}</p>
                </div>
            </div>
        </div>`;
});
$('#vendors').html(vendorsHtml);

let employeHtml = '';
data.employe.forEach(function(employe) {
    employeHtml += `
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${employe.name}</h5>
                    <p class="card-text">Service: ${employe.position}</p>
                    <p class="card-text">Salary: ${employe.salary}</p>
                    <p class="card-text">Contact: ${employe.contact}</p>
                </div>
            </div>
        </div>`;
});
$('#employe').html(employeHtml);
});
});

// Menu toggle
$('#menu-btn').click(function() {
$('nav .navigation ul').addClass('active');
});
$('#menu-close').click(function() {
$('nav .navigation ul').removeClass('active');
});
        
