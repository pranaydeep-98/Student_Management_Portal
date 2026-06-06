// Dark Mode Function

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

}


// Registration Success Alert

function registrationSuccess() {

    alert("Student Registered Successfully!");

}


// Contact Form Alert

function contactSuccess() {

    alert("Message Sent Successfully!");

}


// Dashboard Search Function

function searchTable() {

    let input =
        document.getElementById("searchInput");

    if (!input) return;

    let filter =
        input.value.toUpperCase();

    let table =
        document.getElementById("studentTable");

    let tr =
        table.getElementsByTagName("tr");

    for (let i = 1; i < tr.length; i++) {

        let td =
            tr[i].getElementsByTagName("td")[1];

        if (td) {

            let txtValue =
                td.textContent ||
                td.innerText;

            if (
                txtValue.toUpperCase()
                .indexOf(filter) > -1
            ) {

                tr[i].style.display = "";

            } else {

                tr[i].style.display = "none";

            }
        }
    }
}