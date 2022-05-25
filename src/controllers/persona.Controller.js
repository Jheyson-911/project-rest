import { pool } from "../database";


export const getPersona = async (req, res) => {
    try {
        const response = await pool.query('select *from fc_listar_persona()');
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Hubo un error al listar las personas');
    }
};
export const getPersonaId = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from fc_listar_persona_id($1)', [id]);
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Hubo un error al listar la persona por id');
    }
};

export const crearPersona = async (req, res) => {
    try {
        const { apellidos, nombres, dir, tel} = req.body;
        const response = await pool.query('select *from fc_create_persona($1,$2,$3,$4)', [apellidos, nombres, dir,tel]);
        return res.status(200).json({
            message: 'Persona creada con exito',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Hubo un error al crear la persona');
    }
};

export const updatePersona = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombre, apellido, edad } = req.body;
        const response = await pool.query('select *from fc_update_persona($1,$2,$3,$4)', [nombre, apellido, edad, id]);
        return res.status(200).json({
            message: 'Persona modificada con exito' + response,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Hubo un error al actualizar la persona');
    }
};

export const deletePersona = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from persona where idpersona=$1', [id]);
        return res.status(200).json({
            message: 'Persona eliminada con exito',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Hubo un error al eliminar la persona');
    }
};
