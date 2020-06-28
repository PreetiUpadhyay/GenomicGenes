import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const Form = ({
  course,
  authors,
  onSave,
  onChange,
  onSubmit,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSubmit}>
      <TextInput
        name="geneSymbol"
        label="Gene Symbol"
        value={course.title}
        onChange={onChange}
        error={errors.geneSymbol}
      />

      <TextInput
        name="seq"
        label="Position in protien sequence"
        value={course.category}
        onChange={onChange}
        error={errors.seq}
      />

      <TextInput
        name="letter"
        label="Amino acid letter"
        value={course.category}
        onChange={onChange}
        error={errors.letter}
      />

      <input
        type="submit"
        value="Get Gene Symbol"
        className="btn btn-primary"
      />
    </form>
  );
};

Form.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default Form;
