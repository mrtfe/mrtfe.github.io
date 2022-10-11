import React from 'react';
import { ClassButton } from './ClassButton';

export class ClassDiv extends React.Component {
  render() {
    return (
      <>
        <h3>ClassDiv</h3>
        <p>Hello {this.props.name}</p>
        <ClassButton name={'Class Button'} />
      </>
    );
  }
}
