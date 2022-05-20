import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { getADoctor } from '../../store/doctors/doctors';
import styles from './doctors.module.css';

const GetDoctor = () => {
  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.doctorReducer);
  const currentUser = useSelector((state) => state.usersReducer.currentUser);
  const { docID } = useParams();
  useEffect(() => {
    dispatch(getADoctor(currentUser, docID));
  }, []);
  //
  return (
    <div className="flex w-screen h-screen bg-grey items-center">
      <div className="container justify-center px-6 m-auto items-center">
        {typeof doctor.doctor !== 'undefined' ? (
          <>
            <h1 className="headline text-3xl text-center mb-12">{`${doctor.doctor.first_name} ${doctor.doctor.last_name}`}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              Doctor
            </div>
          </>
        ) : (
          <div className={`${styles.loadWrap} items-center mx-auto`}>
            <div className={styles.load}>
              <div className={styles.line} />
              <div className={styles.line} />
              <div className={styles.line} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// GetDoctor.propTypes = {
//   docID: PropTypes.string.isRequired,
// };

export default GetDoctor;
