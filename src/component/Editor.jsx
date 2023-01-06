import React, { useState } from 'react'
import "react-codemirror2";
import '../App.css'
import 'codemirror/lib/codemirror.css';             //base css
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';




const Editor = (props) => {
    const[open, setOpen] = useState(true)

    const {language, displayName, value, onChange} = props;
    function handleChange(ediotr,data,value){
        onChange(value);
    }
  return (
    
       <div className = {`editor-container ${open ? '' : 'collapsed'}`}>
        <div className="editor-title">
            {displayName}
            <button 
            type='button'
            className='btn '
            onClick={() =>{
                setOpen(prevOpen => !prevOpen)              //if open not open ,if not open then open
            }} ><FontAwesomeIcon icon={open ? faCompressAlt: faExpandAlt}/></button>
        </div>
        <ControlledEditor
        //it accept params (from, to, text);
            onBeforeChange={handleChange}           
            value={value}
            className='code-mirror-wrapper'
            options={{
                lineWrapping: 'true',
                lint:'true',
                mode : language,
                theme:'material',
                lineNumbers : true,
            }}
        />
       </div>
   
  )
}

export default Editor