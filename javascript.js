var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}


function readFormData(){
    var formData = {};
    formData["Nombre"] = document.getElementById("nombre").value;
    formData["Trabajo"] = document.getElementById("trabajo").value;
    formData["Edad"] = document.getElementById("edad").value;
    return formData;
}


function insertNewRecord(data){
    var table = document.getElementById("usuariolist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.Nombre;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.Trabajo;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.Edad;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}


function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('nombre').value = selectedRow.cells[0].innerHTML;
    document.getElementById('trabajo').value = selectedRow.cells[1].innerHTML;
    document.getElementById('edad').value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.Nombre;
    selectedRow.cells[1].innerHTML = formData.Trabajo;
    selectedRow.cells[2].innerHTML = formData.Edad;
}


function onDelete(td){
    if(confirm('¿Quieres eliminar este elemento?')){
        row = td.parentElement.parentElement;
        document.getElementById('usuariolist').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('nombre').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('trabajo').value = '';
    selectedRow = null;
}