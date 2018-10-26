(function toDOList() {
    const addBtn = document.querySelector('.add--task');
    const taskContainer = document.querySelector('.content');

    // prevent task input to be empty
    document.addEventListener('focusout', e => {
        if (e.target.className === 'to--do' && e.target.value === '') {
            e.target.value = 'Click here and edit your task!';
        }
    });

    // Get date to header
    let getdataHeader = function () {
        let today, weekDay, date, month, daysOfWeek;

        daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        monthOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        today = new Date();
        weekDay = today.getDay();
        month = today.getMonth();
        date = today.getDate();

        if (date === 1) {
            date = ', 1st';
        } else if (date === 2) {
            date = ', 2nd';
        } else {
            date = ', ' + date + 'th';
        };

        document.querySelector('.week--day').textContent = daysOfWeek[weekDay];
        document.querySelector('.day').textContent = date;
        document.querySelector('.month').textContent = monthOfYear[month];
    };

    // Add item
    addBtn.addEventListener('click', function () {
        let newTaskDiv, today, h, m;

        today = new Date();
        h = today.getHours();
        m = today.getMinutes();

        if (m < 10) {
            m = '0' + m;
        }

        if (h < 12) {
            m = m + ' AM';
        } else {
            m = m + ' PM';
        }

        newTaskDiv = document.createElement('div');
        newTaskDiv.className = 'tasks';
        newTaskDiv.innerHTML = `
        <input type="checkbox" name="done" class="checkbox">
        <input type="textinput" value="Click here and edit your task!" class="to--do"></input>
        <small>${h}:${m}</small>
        <i class="far fa-trash-alt inc--trash"></i>
        `;
        taskContainer.appendChild(newTaskDiv);
        checkNumberOfTasks();
    });

    // Delete or Edit item
    taskContainer.addEventListener('click', e => {
        if (e.target.className === 'far fa-trash-alt inc--trash') {
            e.target.parentNode.remove()
        } else if (e.target.className === 'to--do') {
            e.target.tagname = 'input';
        };
        checkNumberOfTasks();
    });

    // Check number of tasks
    let checkNumberOfTasks = function () {
        let numberTaksDOM = document.querySelector('.number-tasks');
        let taskLength = document.querySelectorAll('.tasks').length;

        if (taskLength > 1) {
            numberTaksDOM.textContent = taskLength + ' Tasks';
        } else if (taskLength === 1) {
            numberTaksDOM.textContent = '1 Task';
        } else if (taskLength === 0) {
            numberTaksDOM.textContent = 'Press + to add a new task';
        };
    }

    // call main functions
    getdataHeader();
    checkNumberOfTasks();
})();