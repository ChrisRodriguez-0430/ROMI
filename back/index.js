import app from './app.js'
import './database.js'

const PORT = app.get('port') || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    console.error('Iniciando el servidor...'); í

});