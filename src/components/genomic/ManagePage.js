import React, { useState, useEffect } from "react";
import Form from "./Form";
import Page from "./Page";
import { toast } from "react-toastify";

const ManagePage = (props) => {
  const [errors, setErrors] = useState({});
  const [pageStatus, setStatus] = useState(false);
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    geneSymbol: "",
    seq: "",
    letter: "",
  });

  function handleChange({ target }) {
    setCourse({
      ...course,
      [target.name]: target.value,
    });
    setStatus(false);
  }

  function formIsValid() {
    const _errors = {};

    if (!course.geneSymbol) _errors.geneSymbol = "Gene Symbol is required";
    if (!course.seq) _errors.seq = "Position in protien sequence is required";
    if (!course.letter) _errors.letter = "Amino acid letter is required";

    setErrors(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setStatus(true);
  }

  return (
    <>
      <h2>Seach for Geomic codes</h2>
      <Form
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {pageStatus ? (
        <Page
          geneSymbol={course.geneSymbol}
          seq={course.seq}
          letter={course.letter}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ManagePage;
