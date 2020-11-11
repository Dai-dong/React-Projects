import React from 'react';
import Styles from "./ModalItemsStyle.module.css";
import {Image} from "react-bootstrap";

function ModalItems (props){
    return (
      <div className={Styles.modalItemsbox}>
          <Image src={props.address} alt={props.imagename} width="auto" height="30px" roundedCircle/>
          <div className={Styles.modalItemsNamebox}>{props.name}</div>
      </div>
    );
}

export default ModalItems;