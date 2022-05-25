import { pool } from "../database";

export const getRol = async (req, res) => {
    try {
        const response = await pool.query('select *from fc_listar_rol()');
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Hubo un error al listar los roles');
    }
};

export const getRolId = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from fc_listar_rol_id($1)', [id]);
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Hubo un error al listar el rol por id');
    }
};

export const crearRol = async (req, res) => {
    try {
        const { nombre } = req.body;
        const response = await pool.query('select *from fc_create_rol($1)', [nombre]);
        return res.status(200).json({
            message: "Rol creado con exito",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json("Hubo un error al crear el rol");
    }
};

export const updateRol = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombre, estado } = req.body;
        const response = await pool.query('select *from fc_update_rol($1,$2,$3)', [nombre,estado, id]);
        return res.status(200).json({
            message: "Rol modificado con exito",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json("Hubo un error al actualizar el rol");
    }
};

export const deleteRol = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from fc_delete_rol($1)', [id]);
        return res.status(200).json({
            message: "Rol eliminado con exito",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json("Hubo un error al eliminar el rol");
    }
}