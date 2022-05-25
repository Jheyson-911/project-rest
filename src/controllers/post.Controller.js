import {pool} from '../database';


export const getPost = async (req, res) => {
    try {
        const response = await pool.query('select *from fc_listar_post()');
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Hubo un error al listar los post');
    }
};

export const getPostId = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from fc_listar_post_id($1)', [id]);
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Hubo un error al listar el post por id');
    }
};

export const crearPost = async (req, res) => {
    try {
        const {titulo, descripcion}= req.body;
        const response = await pool.query('select *from fc_create_post($1,$2)', [titulo, descripcion]);
        return res.status(200).json({
            message: 'Post creado con exito',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Hubo un error al crear el post');
    }
};

export const updatePost = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const {titulo, descripcion}= req.body;
        const response = await pool.query('select *from fc_update_post($1,$2,$3)', [titulo, descripcion, id]);
        return res.status(200).json({
            message: 'Post modificado con exito'+response,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Hubo un error al actualizar el post');
    }
};

export const deletePost = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from fc_delete_post($1)', [id]);
        return res.status(200).json({
            message: 'Post eliminado con exito',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Hubo un error al eliminar el post');
    }
};