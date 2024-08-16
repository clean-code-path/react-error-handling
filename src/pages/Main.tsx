import styled from '@emotion/styled';

import { ErrorTodo1, ErrorTodo2 } from '../components';
import ErrorBoundary from '../components/common/ErrorBoundary.tsx';
import { ErrorTodo3 } from '../components/errorTodo3.tsx';

function Main() {
  return (
    <ErrorBoundary>
      <S.Container>
        <ErrorTodo1 />
        <ErrorTodo2 />
        <ErrorTodo3 />
      </S.Container>
    </ErrorBoundary>
  );
}

export { Main };

const S = {
  Container: styled.div`
    color: black;
    font-family: 'Pretendard';
  `,
};
