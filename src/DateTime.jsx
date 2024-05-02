import React, { useState, useEffect } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers';
import { ptBR } from 'date-fns/locale'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'

function DateTime() {
    return (
      <div>
        <h2>Datas e horários</h2>
            <LocalizationProvider
              locale={ptBR} dateAdapter={AdapterDateFns}
            >
              <DateTimePicker label="Início"/>
            </LocalizationProvider>
            <LocalizationProvider
              locale={ptBR} dateAdapter={AdapterDateFns}
            >
              <DateTimePicker label="Término"/>
            </LocalizationProvider>
      </div>
    );
  }
  
  export default DateTime;