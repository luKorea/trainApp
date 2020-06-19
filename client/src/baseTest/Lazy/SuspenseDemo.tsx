/**
 * @description Suspense 一般与lazy一同使用，提高运行效率
 * */

import React, { FC, lazy, Suspense } from 'react';

const About = lazy(() => import(/* webpackChunkName: 'about' */'./About'))

const SuspenseDemo: FC = (props) => {
  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <About />
      </Suspense>
    </div>
  )
};

export default SuspenseDemo;
