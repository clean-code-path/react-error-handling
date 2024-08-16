import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import type { CounterState } from '../store/counterSlice.ts';
import { decrement } from '../store/counterSlice.ts';
import { increment } from '../store/counterSlice.ts';

function Main() {
  const counter = useSelector((state: CounterState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <S.Container>
        Counter = {counter}
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}>
          increment
        </button>
        <button
          aria-label='Decrement  value'
          onClick={() => dispatch(decrement())}>
          decrement
        </button>
      </S.Container>
    </>
  );
}

export { Main };

const S = {
  Container: styled.div`
    color: blue;
    font-family: 'Pretendard';
  `,
};
