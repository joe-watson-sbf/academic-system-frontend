import { connect } from "react-redux";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCoursesThunk } from "../../thunkAction/programThunk";
import { DeleteButtonCourses } from "./components/DeleteButtonCourses";
import { InputPrograms } from "./components/InputPrograms";
import "./EditionProgramPage.css";
import {
  useProgramEffectForActions,
  useProgramTotalDays,
  useProgramUpddateCurrentProgram,
} from "../../hooks/useProgram";
import { useForm } from "react-hook-form";
import { swalErrorAlert } from "./alerts/alerts";
import {
  triggerALertRepitedCourse,
  triggerALertRepitedProgram,
} from "./alerts/triggerAlerts";
import { renderEditPage } from "./components/renderEditPage";

const EditionProgramPage = ({
  dispatch,
  program,
  programs,
  loading,
  hasErrors,
  totalDays,
  courses,
}) => {
  const [selectedCourse, setSelectedCourse] = useState({});
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  useProgramTotalDays(program, dispatch);

  useProgramUpddateCurrentProgram(dispatch);
  useProgramEffectForActions(getCoursesThunk(), dispatch);

  if (loading) return <p>Loading Program to Edit...</p>;
  if (hasErrors) return <p>Unable to Show Program.</p>;

  const handleSelect = (e) => {
    setSelectedCourse(courses[e.target.value]);
  };

  const handleAddCourse = () => {
    triggerALertRepitedCourse(program, dispatch, selectedCourse);
  };

  const onSubmit = (data) => {
    let program2 = JSON.parse(JSON.stringify(program));
    program2.name = data.programName;

    if (program2.courses.length === 0) {
      swalErrorAlert("Debe añadir al menos un curso");
      return;
    }

    triggerALertRepitedProgram(programs, program2, dispatch, navigate, true);
  };

  return (
    <div>
      <form className="program-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="create-program-container">
            <div >
              <input
                required
                minLength="4"
                className="programs__input"
                defaultValue={program.name}
                {...register("programName")}
              />
            </div>
            <div className="totaldays-container">
              <label className="totaldays-name">Total del días:</label>{" "}
              <p className="totaldays-name-num"> {totalDays} </p>
            </div>
          </div>

          <div>
            <div>
              {renderEditPage(
                program,
                handleSelect,
                courses,
                selectedCourse,
                handleAddCourse,
                DeleteButtonCourses,
                dispatch,
                InputPrograms
              )}
            </div>
          </div>
        </div>
        <button className="trainings__btn-submit" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  programs: state.programReducer.programs,
  courses: state.programReducer.courses,
  program: state.programReducer.program,
  loading: state.programReducer.loading,
  hasErrors: state.programReducer.hasErrors,
  redirect: state.programReducer.redirect,
  totalDays: state.programReducer.totalDays,
});

export default connect(mapStateToProps)(EditionProgramPage);
