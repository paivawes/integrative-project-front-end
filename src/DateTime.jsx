import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { ptBR } from '@mui/x-date-pickers/locales';
import { pt } from 'date-fns/locale';

const brazilianLocale = ptBR.components.MuiLocalizationProvider.defaultProps.localeText;

<<<<<<< HEAD
function DateTime() {
    return (
      <div>
        <h2>Datas e horários</h2>
          <LocalizationProvider adapterLocale={pt} dateAdapter={AdapterDateFns} localeText={brazilianLocale}>
            <DateTimePicker 
              sx={{ marginRight: 1 }} 
              label="Início"
              inputFormat="dd-MMMM-yyyyy"
            />
          </LocalizationProvider>
          <LocalizationProvider adapterLocale={pt} dateAdapter={AdapterDateFns} localeText={brazilianLocale}>
            <DateTimePicker 
              label="Término"
              inputFormat="dd-MMMM-yyyyy"
            />
          </LocalizationProvider>
      </div>
    );
  }
  
  export default DateTime;
=======
function DateTime({ onChangeStartDate, onChangeEndDate }) {
  return (
    <div>
      <h2>Datas e horários</h2>
      <LocalizationProvider adapterLocale={pt} dateAdapter={AdapterDateFns} localeText={brazilianLocale}>
        <DateTimePicker 
          sx={{ marginRight: 1 }} 
          label="Início"
          inputFormat="dd-MMMM-yyyyy"
          onChange={onChangeStartDate}
        />
      </LocalizationProvider>
      <LocalizationProvider adapterLocale={pt} dateAdapter={AdapterDateFns} localeText={brazilianLocale}>
        <DateTimePicker 
          label="Término"
          inputFormat="dd-MMMM-yyyyy"
          onChange={onChangeEndDate}
        />
      </LocalizationProvider>
    </div>
  );
}

export default DateTime;
>>>>>>> 8396860 (fix: all conflits)
