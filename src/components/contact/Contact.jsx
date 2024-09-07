import React from 'react'
import './Contact.css'
import { Container, TextField, Button, Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

function Contact() {

  const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray', // Cor padrão da borda
      },
      '&:hover fieldset': {
        borderColor: 'black', // Cor da borda ao passar o mouse
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black', // Cor da borda quando focado
      },
    },
  }));

  return (
    <div id='contactLink' className="contact about-us-bg">
      <div className="d-flex justify-content-center">
        <div className="container my-5">

          <div className="row d-flex justify-content-center">
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
              <h1 className='fw-bold h2-home fs-2 text-uppercase text-center fontLibre'>Ao seu dispor</h1>

              <div className="doubleStripe color-black my-3"></div>

              <p className='fw-light fs-3 mb-0 secondary-color text-center'>Faça seu pedido e garanta uma experiência única!</p>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-10 col-lg-6">
              <Box component="form" noValidate autoComplete="off">
                <CustomTextField
                  fullWidth
                  id="name"
                  label="Nome"
                  variant="outlined"
                  margin="normal"
                />
                <CustomTextField
                  fullWidth
                  id="email"
                  label="E-mail"
                  type="email"
                  variant="outlined"
                  margin="normal"
                />
                <CustomTextField
                  fullWidth
                  id="message"
                  label="Mensagem"
                  multiline
                  rows={4}
                  variant="outlined"
                  margin="normal"
                />
                <Button
                  className='submit-button-contact'
                  variant="contained"
                  sx={{ mt: 2 }}
                  type="submit"
                >
                  Enviar
                </Button>
              </Box>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact