import {FormikProvider, useFormik} from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {addMovie} from '../../../../actions/movies';
import {convertMovieData, getValidationSchema} from '../../../../utils';
import CommonForm from '../CommonForm';

const AddMovie = ({formTitle}) => {
  const activeModalWindow = useSelector((state) => state.movie.activeModalWindow);
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    const payload = {
      ...values,
      ...convertMovieData(values)
    };

    dispatch(addMovie(payload));
  };

  const initialValues = {
    budget: 0,
    genres: [],
    overview: '',
    poster_path: '',
    release_date: '',
    revenue: 0,
    runtime: 0,
    tagline: '',
    title: '',
    vote_average: 0,
    vote_count: 0
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: getValidationSchema()
  });

  return activeModalWindow === 'addMovie' && (
  <FormikProvider value={formik}>
    <span className="title">{formTitle}</span>
    <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
      <CommonForm formik={formik} />
    </form>
  </FormikProvider>
  );
};

AddMovie.propTypes = {
  formTitle: PropTypes.string.isRequired
};

export default AddMovie;
