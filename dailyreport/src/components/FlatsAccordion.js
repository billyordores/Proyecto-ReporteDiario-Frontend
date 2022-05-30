import React from "react";
import "../css/FlatsAccordion.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FilteredClassroom from "./FilteredClassroom";
import { Accordion } from "react-bootstrap";

const BtnPlants = () => {
  return (
    <div className="accordionClass">
      <Accordion defaultActiveKey="0" className="name2" >
        <Accordion.Item eventKey="1">
          <Accordion.Header>Planta 1</Accordion.Header>
          <Accordion.Body><FilteredClassroom planta={'1'} /></Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Planta 0</Accordion.Header>
          <Accordion.Body><FilteredClassroom planta={'0'} /></Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Planta -1</Accordion.Header>
          <Accordion.Body><FilteredClassroom planta={'-1'} /></Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>Planta -2</Accordion.Header>
          <Accordion.Body><FilteredClassroom planta={'-2'} /></Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default BtnPlants;