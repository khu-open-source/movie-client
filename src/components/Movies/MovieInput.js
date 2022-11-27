import { useRecoilState } from 'recoil';

import { enteredTitleAtom } from '../../store/atom';

const MovieInput = () => {
  const [enteredTitle, setEnteredTitle] = useRecoilState(enteredTitleAtom);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const titleSearchHandler = async () => {
    window.location.href = `/search/${enteredTitle}`;
  };

  return (
    <form>
      <input onChange={titleChangeHandler} />
      <button type="button" onClick={titleSearchHandler}>
        Search
      </button>
    </form>
  );
};

export default MovieInput;
