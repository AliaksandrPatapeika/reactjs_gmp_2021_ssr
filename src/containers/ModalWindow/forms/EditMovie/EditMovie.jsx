import {Form, Formik} from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {editMovie} from '../../../../actions/movies';
import {Genres} from '../../../../constants';
import {convertMovieData, getGenres, getValidationSchema} from '../../../../utils';
import CommonForm from '../CommonForm';

const EditMovie = ({
  formTitle,
  movie: {
    budget,
    genres,
    id,
    overview,
    poster_path,
    release_date,
    revenue,
    runtime,
    tagline,
    title,
    vote_average,
    vote_count
  }
}) => {
  const activeModalWindow = useSelector((state) => state.movie.activeModalWindow);
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    const payload = {
      ...values,
      ...convertMovieData(values)
    };

    dispatch(editMovie(payload));
  };

  const initialValues = {
    budget,
    genres: getGenres(Genres, genres),
    id,
    overview,
    poster_path,
    release_date,
    revenue,
    runtime: runtime || 0, // runtime is null for some movies in the API
    tagline: tagline || 'No tagline', // tagline is "" for some movies in the API
    title,
    vote_average,
    vote_count
  };

  return activeModalWindow === 'editMovie' && (
  <Formik
    initialValues={initialValues}
    validationSchema={getValidationSchema()}
    onSubmit={onSubmit}
		>
    {(formik) => (
      <Form>
        <span className="title">{formTitle}</span>
        <CommonForm formik={formik} isEdit />
      </Form>
    )}
  </Formik>
  );
};

EditMovie.propTypes = {
  formTitle: PropTypes.string.isRequired,
  movie: PropTypes.shape({
    budget: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    revenue: PropTypes.number,
    runtime: PropTypes.number,
    tagline: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number
  }).isRequired
};

export default EditMovie;
