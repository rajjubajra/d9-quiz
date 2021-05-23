import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {actionAll} from './Redux/Action';

function Router() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actionAll());
  })

  return (
    <div>
      Router js
    </div>
  )
}

export default Router
