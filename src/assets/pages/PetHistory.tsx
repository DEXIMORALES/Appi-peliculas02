import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
import Navbar from "../../components/Navbar";

// Datos simulados
const mascotasDummy = [
  { id: 1, nombre: "Firulais" },
  { id: 2, nombre: "Michi" },
];

type Atencion = {
  fecha: string;
  diagnostico: string;
  tratamiento: string;
};

const historialDummy: { [key: string]: Atencion[] } = {
  1: [
    {
      fecha: "2025-04-10",
      diagnostico: "Gastroenteritis",
      tratamiento: "Dieta blanda por 3 días",
    },
    {
      fecha: "2025-02-15",
      diagnostico: "Vacuna antirrábica",
      tratamiento: "Aplicación de vacuna",
    },
  ],
  2: [
    {
      fecha: "2025-03-22",
      diagnostico: "Infección ocular",
      tratamiento: "Gotas antibióticas por 7 días",
    },
  ],
};

export default function PetHistory() {
  const [selectedPetId, setSelectedPetId] = useState("");

  const atenciones = historialDummy[Number(selectedPetId)] || [];

  return (
    <>
      <Navbar userRole="vet" />
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Historial de Atención
        </Typography>

        <TextField
          label="Seleccionar Mascota"
          select
          fullWidth
          value={selectedPetId}
          onChange={(e) => setSelectedPetId(e.target.value)}
          sx={{ mb: 3 }}
        >
          {mascotasDummy.map((pet) => (
            <MenuItem key={pet.id} value={pet.id}>
              {pet.nombre}
            </MenuItem>
          ))}
        </TextField>

        {selectedPetId && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Historial Médico
            </Typography>
            {atenciones.length > 0 ? (
              <List>
                {atenciones.map((item, index) => (
                  <Box key={index}>
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={`Fecha: ${item.fecha}`}
                        secondary={
                          <>
                            <Typography variant="body2" color="text.primary">
                              Diagnóstico: {item.diagnostico}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Tratamiento: {item.tratamiento}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                    <Divider component="li" />
                  </Box>
                ))}
              </List>
            ) : (
              <Typography variant="body1">
                No hay registros disponibles.
              </Typography>
            )}
          </Box>
        )}
      </Container>
    </>
  );
}
