import {useSelector} from 'react-redux';

function MultipleChoice() {

  const data = useSelector(state => state.reducerMultipleChoice.multiple_choice_data);

  console.log(data);
  return (
    <div>
      <h1>Mulitple Choice</h1>
    </div>
  )
}

export default MultipleChoice
