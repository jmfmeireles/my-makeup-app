import React, { ChangeEvent, RefObject } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Pagination as MUIPagination } from './styles';
import { getPaginationInfo } from '../../selectors';
import { actions as productListActions } from '../../slice';
import { Pagination as PaginationMOdel } from '../../types';

export default function Pagination(props: {
  refToPageTop: RefObject<HTMLDivElement>;
}) {
  const dispatch = useDispatch();
  const pagination: PaginationMOdel = useSelector(getPaginationInfo);

  const changePage = (event: ChangeEvent<unknown>, page: number | null) => {
    if (page !== null) {
      dispatch(productListActions.setPage(page - 1));
      //scroll to the top
      props.refToPageTop.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MUIPagination
      page={pagination.page + 1}
      count={Math.ceil(
        pagination.numberOfPossibleResults / pagination.elementsPerPage,
      )}
      onChange={changePage}
      size="small"
      variant="outlined"
      shape="rounded"
    />
  );
}
