import { AutoForm } from "uniforms-mui"; 
import { bridge as schema} from "../api/resolutions/bridge";
import React from 'react';



export function Form() {
  return (
    <AutoForm
      schema={schema}
      onSubmit={(model) => alert(JSON.stringify(model))}
      showInlineError={true} // affiche les erreurs inline
    />
     
  );
}
