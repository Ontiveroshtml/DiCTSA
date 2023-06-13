const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = 5000;

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'galeria'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
});

// Middleware de autenticación
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, 'secreto_del_jwt', (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

// Obtener todas las imágenes
app.get('/images', authenticateJWT, (req, res) => {
    const userId = req.user.id;

    db.query('SELECT * FROM images WHERE user_id = ?', [userId], (err, results) => {
        if (err) {
            throw err;
        }
        res.json(results);
    });
});

// Agregar una imagen
app.post('/images', authenticateJWT, (req, res) => {
    const userId = req.user.id;
    const { src, alt } = req.body;

    db.query('INSERT INTO images (user_id, src, alt) VALUES (?, ?, ?)', [userId, src, alt], (err) => {
        if (err) {
            throw err;
        }
        res.sendStatus(200);
    });
});

// Eliminar una imagen
app.delete('/images/:id', authenticateJWT, (req, res) => {
    const userId = req.user.id;
    const imageId = req.params.id;

    db.query('DELETE FROM images WHERE id = ? AND user_id = ?', [imageId, userId], (err) => {
        if (err) {
            throw err;
        }
        res.sendStatus(200);
    });
});

// Iniciar sesión y generar token JWT
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    
    if (username === 'admin' && password === 'admin') {
        const user = {
            id: 1,
            username: 'admin'
        };
        const token = jwt.sign(user, 'secreto_del_jwt');
        res.json({ token });
    } else {
        res.sendStatus(401);
    }
});

app.listen(port, () => {
    console.log(`Servidor backend escuchando en el puerto ${port}`);
});