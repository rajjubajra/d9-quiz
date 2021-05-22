import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {actionMainNav} from './Redux/Action';

function Router() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actionMainNav());
  })

  return (
    <div>
      Router js
    </div>
  )
}

export default Router
