import React, { useState, useEffect } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers';
import { ptBR } from 'date-fns/locale'

function DateTime() {
    return (
      <div>
        <h2>Datas e horários</h2>
          <LocalizationProvider locale={ptBR} dateAdapter={AdapterDateFns}>
            <DateTimePicker 
              sx={{ marginRight: 1 }} 
              label="Início"
              inputFormat="dd-MMMM-yyyyy"
            />
          </LocalizationProvider>
          <LocalizationProvider locale={ptBR} dateAdapter={AdapterDateFns}>
            <DateTimePicker 
              label="Término"
              inputFormat="dd-MMMM-yyyyy"
            />
          </LocalizationProvider>
      </div>
    );
  }
  
  export default DateTime;