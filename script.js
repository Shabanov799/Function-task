let id_input = document.getElementById("id")
let fullname = document.getElementById("fullname")
let email = document.getElementById("email")
const btn = document.getElementById("btn")
const btn_reset = document.getElementById("btn_reset")
const table_body = document.querySelector("table tbody")
const check_id = document.getElementById("check_id")
const check_fullname = document.getElementById("check_fullname")
const check_email = document.getElementById("check_email")




function hide() {
    check_id.style.display = "none"
    check_fullname.style.display = "none"
    check_email.style.display = "none"
}

hide()

// step: 3 // new item added to array
let user_list = [{
    id: 1,
    fullname: "Pervin Pashazade",
    email: "pervin@gmail.com"
}]

function render() {
    // clear table body
    table_body.innerHTML = ""

    // loop array
    user_list.forEach(item => {

        // add every item to table body as table row
        table_body.innerHTML += `<tr>
        <th scope="row">${item.id}</th>
            <td>${item.fullname}</td>
            <td>${item.email}</td>
        </tr>`
    })
}

// step: 1
btn.addEventListener("click", addItem)
btn_reset.addEventListener("click", clearItems)

// step: 2
function addItem() {

    checkInputs()

    // add new item to array
    if (id_input.value && fullname.value && email.value) {

        user_list.push({
            id: id_input.value,
            fullname: fullname.value,
            email: email.value,
        })

        clearItems()
        render()
    }

}

render()

// clear input values
function clearItems() {
    id_input.value = ""
    fullname.value = ""
    email.value = ""

    hide()
}


function checkInputs() {
    if (id_input.value == "") {
        check_id.style.display = "block"
        check_id.classList.add("alert-danger", "alert")
    } else {
        check_id.style.display = "none"
    }

    if (fullname.value == "") {
        check_fullname.style.display = "block"
        check_fullname.classList.add("alert-danger", "alert")
    } else {
        check_fullname.style.display = "none"
    }

    if (email.value == "") {
        check_email.style.display = "block"
        check_email.classList.add("alert-danger", "alert")
    } else {
        check_email.style.display = "none"
    }
}




