import React from 'react';
import {Button} from './SaveButton.styles';

const SaveButton = (props) => {
  return <Button type="submit">{props.name}</Button>;
};

export default SaveButton;
