import './Search.less';

import {assign} from 'lodash';
import {useRouter} from 'next/router';
import React, {
  useCallback, useEffect, useRef, useState
} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Button from '../../components/Button';
import {getQueryString} from '../../utils';
import SearchInput from '../SearchInput';

const Search = () => {
  const query = useSelector((state) => state.query);
  const dispatch = useDispatch();
  const router = useRouter();
  const searchButtonRef = useRef();
  const {search} = router.query;
  const [value, setValue] = useState('');

  const onClickHandler = () => {
    router.push({
      pathname: '/search',
      search: getQueryString(assign(query, {search: value}))
    });
    // , '/search page'); // (router.push 2nd parameter) Implement route masking
  };
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        searchButtonRef.current.click();
      }
    },
    []
  );

  useEffect(() => {
    if (search) {
      setValue(search);
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, handleKeyDown, search]);
  return (
    <div className="searchContainer">
      <SearchInput
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button
        className="searchButton"
        ref={searchButtonRef}
        title="SEARCH"
        onClick={onClickHandler}
      />
    </div>
  );
};

export default Search;
