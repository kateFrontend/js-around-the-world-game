const button = document.querySelector("#rules");

button.addEventListener("click", modal);

function modal() {
    Swal.fire({
        icon: 'success',
        title: 'You have only 5 minutes to finish the quiz!',
        text: 'Enjoy it!',
      })
}