function app() {
    class Task {
        constructor(title, description, date, priority, status, tag) {
            this.title = title
            this.description = description
            this.dueDate = date
            this.priority = priority
            this.status = this.getStatus(status)
            this.tag = tag
        }
        getStatus(status) {
            return status ? 'Completed' : 'Not complete'
        }
    }
}