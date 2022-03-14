// src/views/components/todos.js
const ToDo = require('./todo')

module.exports = async function ToDos ({items}) {
	return `
        <form action="/todos" method="post" class="margin-bottom-16">
            <input type="text" name="content" placeholder="Add a todo" />
            <input type="submit" value="Add" />
        </form>
        <ul class="margin-left-8 margin-bottom-16">
            ${items.length > 0 ? items.map(todo => ToDo(todo)).join('') : `Great job, you've completed all your todos`}
        </ul>
    `
}