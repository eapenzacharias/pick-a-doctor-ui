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
      <div className="container justify-center px-6 pt-44 m-auto items-center">
        {typeof doctor.doctor !== 'undefined' ? (
          <>

            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-4/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative w-40 ">
                        <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -mx-0 lg:-ml-0 max-w-150-px" />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right self-center">
                      <div className="py-6 px-3 mt-32 sm:mt-0">
                        <button className="bg-darkblue hover:bg-sky-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                          Book Appointment
                        </button>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8" />
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                      {`${doctor.doctor.first_name} ${doctor.doctor.last_name}`}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      {doctor.doctor.specialization}
                    </div>

                    <div className="mb-2 text-blueGray-600 mt-10 justify-center mx-auto">
                      &#10146;
                      {' '}
                      {doctor.doctor.address}
                    </div>
                    <div className="mb-8 text-blueGray-600">
                      <span className="px-4">
                        &#9993;
                        {' '}
                        {doctor.doctor.email}
                      </span>
                      <span className="px-4">
                        &#9743;
                        {' '}
                        {`${doctor.doctor.phone}`}
                      </span>
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                          Appointment Form
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
