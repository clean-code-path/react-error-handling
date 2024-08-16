import { useEffect, useState } from 'react';

import { getError1 } from '../apis/fiestar.api.ts';

function ErrorTodo1() {
  const [state, setState] = useState<unknown>(null);
  useEffect(() => {
    const fetch = async () => {
      const { data } = await getError1();
      setState(data);
    };
    fetch().then(() => console.log('데이터 요청 실행'));
  }, []);
  console.log(state);
  return (
    <div>
      <h2>Error1</h2>
    </div>
  );
}

export { ErrorTodo1 };
