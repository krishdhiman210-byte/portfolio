
const form = document.getElementById("contactForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const formData = new FormData(form);

    result.innerHTML = "Please wait...";
    result.style.display = "block";

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    })

    .then(async (response) => {

        const data = await response.json();

        if (response.ok && data.success) {

            result.innerHTML = "Message sent successfully!";

            // Clear the form
            form.reset();

            setTimeout(() => {
                result.style.display = "none";
            }, 3000);

        } else {

            result.innerHTML = data.message || "Something went wrong!";

        }

    })

    .catch(error => {

        console.log(error);
        result.innerHTML = "Something went wrong!";

    });

});

