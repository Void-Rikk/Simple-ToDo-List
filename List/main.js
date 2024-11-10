const add = document.getElementById("add_btn");
const textArea = document.getElementById("main");
const tasks = document.getElementById("tasks");

class taskBlock {

    constructor(taskValue) {
        this.taskValue = taskValue;
    }

    append() {
        let taskDiv, taskVal, taskSep, delBtn;
        taskDiv = document.createElement("div");
        taskDiv.setAttribute("class", "task");
        taskDiv.setAttribute("id", "content");

        if(this.taskValue === "") {
            return;
        }
        taskVal = document.createTextNode(this.taskValue);

        delBtn = document.createElement("button");
        delBtn.setAttribute("class", "delete");
        delBtn.setAttribute("id", "clear");
        delBtn.textContent = "🗑";

        this.reBtn = delBtn;
        this.reBtn.onclick = () => this.del(taskVal);

        taskSep = document.createElement("div");
        taskSep.textContent = "__________________________________________________________";

        taskDiv.appendChild(taskVal);
        taskDiv.appendChild(this.reBtn);

        this.divContainer = document.createElement("div");
        this.divContainer.appendChild(taskDiv);
        this.divContainer.appendChild(taskSep);

        tasks.appendChild(this.divContainer);
    }

    getNum() {
        for(let i = 0; i < tasks.children.length; i++) {
            if(tasks.children[i].children[0].textContent.slice(0, -2) === this.divContainer.children[0].textContent.slice(0, -2)) {
                return i;
            }
        }
    }

    del(content) {
        this.num = this.getNum(content);
        tasks.children[this.num].remove();
    }

}

add.onclick = () => {
    let newBlock = new taskBlock(textArea.value);
    newBlock.append();
    textArea.value = "";
}

