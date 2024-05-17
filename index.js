const { Pool } = require('pg');

const config = {
    host: 'localhost',
    database: process.env.DATABASE,
    port: 5432,
    user: process.env.USER,
    password:""
    // password: process.env.PASS
}

const pool = new Pool(config)

// INSERT "AGREGAR UN NUEVO ESTUDIANTE"
// tabla    : estudiantes
// campos   : nombre, rut, curso, nivel 
const insertEstudiante  = async () => {
    const sql = 'INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4) RETURNING *';
    const value = ["Slash", 20111111, "Guitarra", "Basico"];
    // ["Brian May", 20111111, "Bajo", "Basico"],
                  
  
    const result = await pool.query(sql, value)
  
    // console.log(result.rows)
}



// Consultar los estudiantes registrados
const selectEstudiantes = async () => {
    const sql = 'SELECT * FROM estudiantes'
  
    const result = await pool.query(sql)
  
    console.log(result.rows)
}


// Consultar estudiante por rut.
const selectEstudiantesRut = async (rut) => {
    const sql = 'SELECT * FROM estudiantes WHERE rut = $1'
    const values = [rut]

    const result = await pool.query(sql, values)
  
    console.log(result.rows)
}



// Actualizar la información de un estudiante. (de basico a avanzado)
const updateEstudiante = async () => {
    // UPDATE table SET COLUMN = value ($1) WHERE condicion
    const sql = 'UPDATE estudiantes SET nivel = $1 WHERE nivel = $2'
    const values = [ 'Avanzado', 'Basico' ]
  
    const result = await pool.query(sql, values)
    console.log(result)
  }



//Eliminar el registro de un estudiante.
const deleteEstudiante = async (nombre) => {
    // DELETE FROM table WHERE condicion
    const sql = 'DELETE FROM estudiantes WHERE nombre = $1'
    const values = [nombre]
  
    const result = await pool.query(sql, values)
  
    console.log(result)
  }

// insertEstudiante();
// selectEstudiantes();
// selectEstudiantesRut(20111111);
// updateEstudiante();
deleteEstudiante('Slash')