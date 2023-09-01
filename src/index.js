import Task from './Task'

const t1 = Task()

t1.setTitle("Helo")
console.log(t1.getTitle())

t1.setDescription("Lets goo ")
console.log(t1.getDescription())
console.log(t1.getTimeCreated())