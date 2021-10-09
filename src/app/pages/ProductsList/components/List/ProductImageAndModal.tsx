import React, { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { MakeupProduct } from '../../types';
import { ProductImage, DialogTitleWrapper, DialogContent } from './style';

export default function ProductImageAndModal(props: {
  product: MakeupProduct;
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [dialogOpened, setOpenedDialogStatus] = useState<boolean>(false);

  const openModal = event => {
    event.preventDefault();
    setOpenedDialogStatus(true);
  };

  const Image = () => (
    <img src={props.product.api_featured_image} alt={props.product.name} />
  );
  return (
    <>
      <ProductImage onClick={openModal}>
        <Image />
      </ProductImage>
      <Dialog
        open={dialogOpened}
        onClose={() => setOpenedDialogStatus(false)}
        fullScreen={fullScreen}
      >
        <DialogTitleWrapper>
          <DialogTitle>{props.product.name}</DialogTitle>
          <IconButton onClick={() => setOpenedDialogStatus(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitleWrapper>
        <DialogContent dividers>
          <Image />
        </DialogContent>
      </Dialog>
    </>
  );
}
