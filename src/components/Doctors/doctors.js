import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getDoctors } from '../../store/doctors/doctors';
import styles from './doctors.module.css';

const Doctors = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctorReducer);
  const { specId } = useParams();
  const currentUser = useSelector((state) => state.usersReducer.currentUser);
  useEffect(() => {
    dispatch(getDoctors(currentUser, specId));
  }, []);
  //
  return (
    <div className="flex w-screen h-screen bg-grey items-center">
      <div className="container justify-center px-6 m-auto items-center">
        <h1 className="headline text-3xl text-center mb-12">
          {doctors.specialization}
        </h1>
        {Array.isArray(doctors.doctors) && doctors.doctors.length !== 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {doctors.doctors.map((doc) => (
              <div key={doc.id} className="grid grid-cols">
                <div className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
                  <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
                    <img
                      src={
                        doc.profile_image
                          ? doc.profile_image
                          : '../../assets/images/avtar.jpeg'
                      }
                      alt={doc.first_name}
                      className="h-full w-full"
                    />
                  </div>
                  <h2 className="mt-4 font-bold text-xl">{`${doc.first_name} ${doc.last_name}`}</h2>
                  <h6 className="mt-2 text-sm font-medium">
                    {doctors.specialization}
                  </h6>
                  <Link to={`/doctors/${doc.id}`}>
                    <button
                      type="button"
                      className="text-white bg-darkblue hover:bg-sky-900 mt-2 py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                    >
                      Get Appointment
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
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

export default Doctors;
