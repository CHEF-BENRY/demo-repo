document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const buttons = container.querySelectorAll('button');
    for (let button of buttons) {
        console.log(button)
        button.addEventListener("click", (event) => {
            console.log(button.id)
            let catId = button.id.split("-")[1];
            console.log(catId)
            fetch (`/api/cats/${catId}`), {
                method: "DELETE"
            }
            .then (response) => {
                return response.json();
            })
            .catch (error) {
                return console.log("NOT FOUND");
            })
            finally {
                return console.log("error");
            }
        }
    }
})