import { pool } from "../database";

export const getUsuario = async (req, res) => {
    try {
        const response = await pool.query('select *from fc_listar_usuario()');
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Hubo un error al listar los usuarios");
    }
};

export const crearUsuario = async (req, res) => {
    try {
        const { username, password, idpersona, idrol } = req.body;
        const response = await pool.query(
            "select *from fc_create_usuario($1,$2,$3,$4)",
            [username, password, idpersona, idrol]
        );
        return res.status(200).json({
            message: "Usuario creado con exito",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json("Hubo un error al crear el usuario");
    }
};

export const validarUsuario = async (req, res) => {
    try {
        const { username } = req.body;
        const response = await pool.query(
            "select *from fc_validar_usuario2($1)",
            [username]
        );
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json("Hubo un error al validar el usuario");
    }
}