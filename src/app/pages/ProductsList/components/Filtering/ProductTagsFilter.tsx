import React, { SyntheticEvent } from 'react';

import { Chip, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { productTags } from '../../resources/configs/ProductTags';
import { Autocomplete } from './styles';
import { getProductTagsToFilter } from '../../selectors';
import { actions as productListActions } from '../../slice';

const REMOVE = 'removeOption';
const CLEAR_ALL = 'clear';
const SELECT = 'selectOption';

export default function ProductTagsFilter() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const selectedOptions: string[] = useSelector(getProductTagsToFilter);

  const removeOption = (optionToRemove: string) => {
    dispatch(productListActions.removeProductTag(optionToRemove));
  };
  const clearAllOptions = () => {
    dispatch(productListActions.clearAllProductTags());
  };

  const changeSelection = (
    event: SyntheticEvent<Element, Event>,
    options: string[],
    reason: string,
  ) => {
    switch (reason) {
      case CLEAR_ALL:
        clearAllOptions();
        break;
      case REMOVE:
        removeOption(options[0]);
        break;
      case SELECT:
      default:
        dispatch(productListActions.setProductTags(options));
        break;
    }
  };

  return (
    <Autocomplete
      multiple
      value={selectedOptions}
      options={productTags}
      getOptionLabel={option => option as string}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            label={option}
            {...getTagProps({ index })}
            onDelete={() => removeOption(option)}
          />
        ))
      }
      onChange={changeSelection}
      limitTags={10}
      renderInput={params => (
        <TextField {...params} label={t('productsListPage.productTags')} />
      )}
    />
  );
}
