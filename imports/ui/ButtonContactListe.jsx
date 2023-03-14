import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from 'react-router-dom';

export default function ButtonContactList() {
  return (
    <Stack spacing={2} direction="row">
      
      <Button
        component={Link} to={'/'}
        color="success"
        disabled={false}
        size="large"
        variant="outlined"
      >
        Liste de contact
      </Button>
    </Stack>
  );
}
