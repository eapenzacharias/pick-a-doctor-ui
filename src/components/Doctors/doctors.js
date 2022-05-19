import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctors } from '../../redux/doctors/doctors';

const Doctors = (props) => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctors);
  const currentUser = useSelector((state) => state.usersReducer.currentUser);

  useEffect(() => {
    dispatch(getDoctors(currentUser, props.specId));
  }, []);
  // className="bg-grey flex items-center justify-center"
  return (
    <div>
      hello
    </div>
  );
};

export default Doctors;
