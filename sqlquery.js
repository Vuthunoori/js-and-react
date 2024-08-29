function generateSQLQuery({ table, columns = '*', condition }) {

  const columnsString = Array.isArray(columns) ? columns.join(', ') : columns;


  let query = `SELECT ${columnsString} FROM ${table}`;

  if (condition) {
    query += ` WHERE ${condition}`;
  }

  return query;
}


const query1 = generateSQLQuery({
  table: 'users',
  columns: ['id', 'name', 'email'],
  condition: 'age > 30'
});
console.log(query1); // Output: SELECT id, name, email FROM users WHERE age > 30

