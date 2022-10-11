import React from 'react';
import { FuncButton } from './FuncButton';
import { FuncDiv } from './FuncDiv';
import { ClassButton } from './ClassButton';
import { ClassDiv } from './ClassDiv';
import { Tick } from './Tick';

const element = <h1>Hello, world, this is element!</h1>;

function App() {
  return (
    <>
      <FuncButton />
      <FuncDiv name={'Mr. React'} />
      <ClassButton name={'ClassBTN'} />
      <ClassDiv name={'Mr. Class Div'} />
      <div>{element}</div>
      <Tick />
    </>
  );
}

export default App;
