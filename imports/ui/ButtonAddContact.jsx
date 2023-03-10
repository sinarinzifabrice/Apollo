import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { Link } from 'react-router-dom';

export default function ButtonAddContact() {
  return (
    <Stack spacing={2} direction="row">
      
      <Button
        component={Link} to={'/ajouter'}
        startIcon={<PersonAddAltOutlinedIcon />}
        color="success"
        disabled={false}
        size="large"
        variant="outlined"
      >
        ajouter
      </Button>
    </Stack>
  );
}
