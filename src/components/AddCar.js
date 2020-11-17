import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dia-log';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AddCar = (props) => {
 const [open, setOpen] = useState(false);
 const [car, setCar] = useState({ brand: '', model: '', year: '', color: '', price: '' });
 return (
  <div>

  </div>
 );
};

export default AddCar;