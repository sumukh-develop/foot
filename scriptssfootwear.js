document.addEventListener("DOMContentLoaded", function() {
    const footwearForm = document.getElementById('footwearForm');

    footwearForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate the form
        let valid = true;
        const categoryInputs = document.querySelectorAll('input[name="category[]"]');
        let categoryChecked = false;

        for (const input of categoryInputs) {
            if (input.checked) {
                categoryChecked = true;
                break;
            }
        }

        if (!categoryChecked) {
            alert("Please select at least one category.");
            valid = false;
        }

        const footwearName = document.getElementById('footwearName').value.trim();
        const footwearDescription = document.getElementById('footwearDescription').value.trim();
        const pickupDate = document.getElementById('pickupDate').value.trim();
        const footwearImage = document.getElementById('footwearImage').files.length;

        if (footwearName === '' || footwearDescription === '' || pickupDate === '' || footwearImage === 0) {
            alert("Please fill out all required fields.");
            valid = false;
        }

        if (valid) {
            // Process the form data
            const formData = new FormData(footwearForm);

            // Log the form data for testing purposes
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }

            // Display success message
            alert("Form submitted successfully!");
            
            // Reset the form
            footwearForm.reset();
        }
    });
});
