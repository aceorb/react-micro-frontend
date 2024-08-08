import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedComponent } from '../redux/actions';

const useSetSelectedComponent = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSelectedComponent(id));
  }, [dispatch, id]);
};

export default useSetSelectedComponent;