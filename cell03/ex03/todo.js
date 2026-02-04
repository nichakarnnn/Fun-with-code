function addTodo() {
    let task = prompt("เพิ่มรายการใหม่:");
    if (task && task.trim() !== "") {
        createDiv(task);
        saveToCookie();
    }
}

function createDiv(text) {
    const list = document.getElementById('ft_list');
    const div = document.createElement('div');
    div.innerText = text;
    div.onclick = function() {
        if (confirm("ลบรายการนี้ใช่ไหม?")) {
            this.remove();
            saveToCookie();
        }
    };
    list.prepend(div);
}

function saveToCookie() {
    const tasks = [];
    document.querySelectorAll('#ft_list div').forEach(div => tasks.push(div.innerText));
    document.cookie = "todo=" + JSON.stringify(tasks) + "; path=/";
}