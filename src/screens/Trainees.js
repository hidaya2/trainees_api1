import React, { useContext, useEffect } from "react";
import { Spinner, Table} from "react-bootstrap";
import { TraineesContext } from "../contexts/TraineesContext";
import { FiEdit, FiEye, FiDelete } from "react-icons/fi";

function Trainees() {
  const { loading, trainees, getTrainees } = useContext(TraineesContext);
  useEffect(() => {
    getTrainees();
    //eslint-disable-next-line
  }, []);
  return (
    <section>
      {loading && <Spinner animation="grow" />}
      {trainees.length > 0 ? (
        <Table className="table-striped ">
          <thead>
            <tr>
              <th>NAME</th>
              <th>DESTINATION</th>
              <th>EMAIL</th>
              <th>DOB</th>
              <th>EDIT</th>
            </tr>
          </thead>
          {trainees.map((trainee) => (
            <tr>
              <td>{trainee.name}</td>
              <td>{trainee.position}</td>
              <td>{trainee.email}</td>
              <td>{trainee.dob}</td>
              <td>
                <FiDelete /> <FiEdit /> <FiEye />
              </td>
            </tr>
          ))}
        </Table>
      ) : (
        !loading && <h1>NO RECORD </h1>
      )}
    </section>
  );
}

export default Trainees;
