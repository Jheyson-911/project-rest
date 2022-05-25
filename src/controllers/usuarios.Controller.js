import { pool } from "../database";

export const getUsuarios = async (req, res) => {
    try {
        const response = await pool.query("select *from fc_listar_usuarios()");
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Hubo un error al listar los usuarios");
    }
};

export const getUsuarioId = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query("select *from fc_listar_usuarios_id($1)", [id]);
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Hubo un error al listar el usuario por id");
    }
};

export const crearUsuario = async (req, res) => {
    try {
        const { nombre, apellido, email, password, rol } = req.body;
        const response = await pool.query(
            "select *from fc_create_usuario($1,$2,$3,$4,$5)",
            [nombre, apellido, email, password, rol]
        );
        return res.status(200).json({
            message: "Usuario creado con exito",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json("Hubo un error al crear el usuario");
    }
};

export const updateUsuario = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nombre, apellido, email, password, rol } = req.body;
        const response = await pool.query(
            "select *from fc_update_usuario($1,$2,$3,$4,$5,$6)",
            [nombre, apellido, email, password, rol, id]
        );
        return res.status(200).json({
            message: "Usuario modificado con exito",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json("Hubo un error al actualizar el usuario");
    }
};