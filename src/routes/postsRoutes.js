import express from "express";
import multer from "multer";
import { listarPosts, postaNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})
//linux ou no mac
// const upload = multer({ dest: ".uploads"})
const routes = (app) => {
    app.use(express.json());
    
    app.get("/posts", listarPosts);
    app.post("/posts", postaNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem );
    app.put("/upload:id", atualizarNovoPost);
}

export default routes;