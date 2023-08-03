const input = document.querySelector("input");
const btnadd = document.querySelector(".add");
const ul = document.querySelector("ul");


btnadd.addEventListener("click", (e) => {
    e.preventDefault();
    const text = input.value;
    if (text !== "") {

        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text;

        li.appendChild(p);
        li.appendChild(deleteBtn());

        ul.appendChild(li);

        input.value = "";
        
    } else {
        alert("Debes agregar una tarea para poder guardarla")

    }
});


function deleteBtn() {
    const BtnDelete = document.createElement("button");
    BtnDelete.textContent = "X"
    BtnDelete.className = "eliminar";

    BtnDelete.addEventListener("click", (e) => {
        const elemento = e.target.parentElement;
        ul.removeChild(elemento);
    });
    return BtnDelete;
}