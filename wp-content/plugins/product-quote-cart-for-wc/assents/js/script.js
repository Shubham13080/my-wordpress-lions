document.addEventListener('DOMContentLoaded', function () {


  

   
    document.querySelectorAll('.gmpqcw_inq_addtocart').forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault();
            var culms = this;
            culms.innerHTML = 'ADDING...';

            fetch(gmpqcw_wp_ajax.add_to_cart, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': gmpqcw_wp_ajax.nonce // ✅ Add Nonce in Header
                },
                body: JSON.stringify({
                    'add_id': culms.getAttribute('add_id')
                    
                })
            })
            .then(response => response.json())
            .then(response => {
                if (response.msg === 'success') {
                    culms.innerHTML = 'ADDED TO ENQUIRY CART';
                    const event = new CustomEvent('cartUpdated');
                    window.dispatchEvent(event);
                } else {
                    culms.innerHTML = 'FAILED TO ADD';
                    alert('Error: ' + response.returnhtml);
                }
            })
            .catch(error => {
                culms.innerHTML = 'FAILED TO ADD';
                console.error('Error:', error);
            });
        });
    });

  
});
