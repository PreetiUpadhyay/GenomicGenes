import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const List = ({ courses, seq, letter }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Status/link to the Ensembl website</th>
        <th>transcripts</th>
        <th>amino acid letter</th>
      </tr>
    </thead>
    <tbody>
      {courses.map((course) => {
        return (
          <tr key={course.id}>
            {course.seq[seq - 1] == letter ? (
              <td>
                <a
                  target="blank"
                  href={"http://www.ensembl.org/id/" + course.id}
                >
                  {"http://www.ensembl.org/id/" + course.id}
                </a>
              </td>
            ) : (
              <td>Unmached</td>
            )}

            <td>{course.id}</td>
            <td>{course.seq[599]}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

List.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default List;
