import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../../../components/Button';
import Select from '../../../../components/Select';
import {Genres} from '../../../../constants';
import FormItem from '../FormItem';

const CommonForm = ({formik, isEdit}) => (
  // PATTERN: Use Fragments to Avoid Additional HTML Element Wrappers
  <>
    {isEdit && (
    <FormItem label="MOVIE ID" name="id" readOnly />
    )}
    <FormItem name="title" required errorMessage={formik.errors.title} />
    <FormItem
      type="date"
      name="release_date"
      className={formik.values.release_date ? 'input valid-date' : 'input'}
      placeholder="Select Date"
      required
      errorMessage={formik.errors.release_date}
    />
    <FormItem
      name="poster_path"
      label="MOVIE URL"
      placeholder="Movie URL here"
      errorMessage={formik.errors.poster_path}
    />
    <FormItem
      className="select"
      classNamePrefix="select"
      name="genres"
      instanceId="genres"
      label="GENRE"
      options={Genres}
      placeholder="Select Genre"
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      allowSelectAll
      allSelectedLabel="All genres"
      component={Select}
      value={formik.values.genres}
      required
      errorMessage={formik.errors.genres}
      onChange={(event) => {
			  formik.handleChange({
			    target: {
			      name: 'genres',
			      value: event
			    }
			  });
      }}
    />
    <FormItem name="overview" required errorMessage={formik.errors.overview} />
    <FormItem name="runtime" required errorMessage={formik.errors.runtime} />
    <FormItem name="budget" errorMessage={formik.errors.budget} />
    <FormItem name="revenue" errorMessage={formik.errors.revenue} />
    <FormItem name="tagline" required errorMessage={formik.errors.tagline} />
    <FormItem name="vote_average" errorMessage={formik.errors.vote_average} />
    <FormItem name="vote_count" errorMessage={formik.errors.vote_count} />
    <div className="modalFooter">
      <Button
        type="reset"
        className="button"
        title="RESET"
      />
      <Button
        type="submit"
        className="button"
        title={isEdit ? 'SAVE' : 'SUBMIT'}
        disabled={!formik.isValid}
      />
    </div>
  </>
);

CommonForm.propTypes = {
  formik: PropTypes.instanceOf(Object).isRequired,
  isEdit: PropTypes.bool
};

CommonForm.defaultProps = {
  isEdit: false
};

export default CommonForm;
