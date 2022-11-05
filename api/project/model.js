// build your `Project` model here
const db = require('../../data/dbConfig')

async function find() {
    const rows = await db('projects as p')
    .leftJoin('tasks as t', 'p.project_id', 't.project_id')
    .leftJoin('projects_resources as pr', 't.task_id', 'pr.task_id')
    .leftJoin('resources as r', 'pr.resource_id', 'r.resource_id')
    .select('*')
    .orderBy(['p.project_id', 't.task_id'])
}

module.exports = {
    find,
    
}