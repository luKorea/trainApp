/**
 * @description memo 防止组件做无意义的重复渲染
 */

import React, {FC, memo, useState} from 'react';


const Foo: FC = memo(function Foo(props) {
  const { name } = props as any;
  return (
    <div>{ name }</div>
  )
})
const MemoDemo: FC = (props) => {
  const [name] = useState<string>('korea');
  // @ts-ignore
  return (<Foo name={name}/>);
}

export default MemoDemo;
