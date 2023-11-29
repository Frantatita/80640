import { Button, TextField, Box } from "@mui/material";
import axios from "axios"
import { useState } from "react";


function Formulario(props) {

    const [datosFormulario, setDatosFormulario] = useState(
        {
            nombre: '',
            apellido: ''
        }
    )

    const hacerPeticion = async (ex) => {
        try {
            if (ex == 1) {
                const res = await axios.get('http://localhost:4567/altas', { params: datosFormulario })
                return res.data
            }
            if (ex == 2) {
                const res = await axios.post('http://localhost:4567/leer', { params: datosFormulario })
                return res.data
            }
            if (ex == 3) {
                const res = await axios.get('http://localhost:4567/actualizar', { params: datosFormulario })
                return res.data
            }
            if (ex == 4) {
                const res = await axios.delete('http://localhost:4567/eliminar', { params: datosFormulario })
                return res.data
            }
        } catch (error) {
            throw error
        }
    }

    const crearDatos = async (e) => {
        e.preventDefault()
        try {
            const res = await hacerPeticion(1)
            console.log(res)

        } catch (error) {
            console.log(error);
        }
    }

    const leerDatos = async (e) => {
        e.preventDefault()
        try {
            const res = await hacerPeticion(2)
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    }

    const actualizarDatos = async (e) => {
        e.preventDefault()
        //console.log("datos Recuperados del formulario", datosUsuario)
        try {
            const res = await hacerPeticion(3)
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    }

    const eliminarDatos = async (e) => {
        e.preventDefault()
        try {
            const res = await hacerPeticion(4)
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    }


    const cambiosFomulario = (e) => {
        //console.log(evento.target)
        const { name, value } = e.target
        setDatosFormulario({ ...datosFormulario, [name]: value })
    }

    return (
        <>
            <form>
                <h1>Ingresa tus datos</h1>
                <Box m={5}>
                    <TextField label="Nombre:" variant="outlined" fullWidth onChange={cambiosFomulario} name="nombre" value={datosFormulario.nombre}></TextField>
                </Box>
                <Box m={5}>
                    <TextField label="Apellido:" variant="outlined" fullWidth onChange={cambiosFomulario} name="apellido" value={datosFormulario.apellido}></TextField>
                </Box>
                <Box m={5}>
                    <div>
                        <Button variant="contained" type="submit" fullWidth onClick={crearDatos}>Crear</Button>
                    </div>
                    <div>
                        <Button variant="contained" type="submit" fullWidth onClick={eliminarDatos}>Eliminar</Button>
                    </div>
                    <div>
                        <Button variant="contained" type="submit" fullWidth onClick={leerDatos}>Leer</Button>
                    </div>
                    <div>
                        <Button variant="contained" type="submit" fullWidth onClick={actualizarDatos}>Actualizar</Button>
                    </div>

                </Box>
            </form>
        </>
    )
}

export default Formulario;