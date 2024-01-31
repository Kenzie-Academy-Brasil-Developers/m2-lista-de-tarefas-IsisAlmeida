const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];

function renderElements(taskList) {

  const ulTasksList = document.querySelector(".tasks__list");
  ulTasksList.innerHTML = "";

  taskList.forEach((taskItem) => {
    const newTask = createTaskList(taskItem.title, taskItem.type);
    ulTasksList.appendChild(newTask);
  });
};

renderElements(tasks);


function createTaskList(title, type) {
console.log(title, type);
  const liTaskItem = document.createElement("li");

  const divTaskInfo = document.createElement("div");
  const spanTaskType = document.createElement("span");
  const paragraph = document.createElement("p");

  const btnRemoveTask = document.createElement("button");

  liTaskItem.append(divTaskInfo, btnRemoveTask);
  divTaskInfo.append(spanTaskType, paragraph);

  liTaskItem.classList.add("task__item");
  divTaskInfo.classList.add("task-info__container");
  spanTaskType.classList.add("task-type");

  if (type.toLowerCase() === "urgente") {
    spanTaskType.classList.add("span-urgent");
  } else if (type.toLowerCase() === "importante") {
    spanTaskType.classList.add("span-important");
  } else if (type.toLowerCase() === "normal") {
    spanTaskType.classList.add("span-normal");
  };

  btnRemoveTask.classList.add("task__button--remove-task");

  btnRemoveTask.addEventListener("click", (event) => {
    const foundIndex = tasks.indexOf(title, type);

    tasks.splice(foundIndex, 1);
    renderElements(tasks);
  });

  paragraph.innerText = title;

  return liTaskItem;
}

function addNewTask(title, type) {
  const taskObj = {
    title: title,
    type: type,
  };

  tasks.push(taskObj);
  renderElements(tasks);
}

function handleFormEvents() {
  const formAddTask = document.querySelector(".form__container");

  const inputTaskTitle = document.querySelector("#input_title");
  const seletecTaskImportance = document.querySelector(".form__input--priority");

  formAddTask.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskTitle = inputTaskTitle.value;
    const taskType = seletecTaskImportance.value;

  addNewTask(taskTitle, taskType);
  });
};

handleFormEvents();