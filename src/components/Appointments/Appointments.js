/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dateFormat from 'dateformat';
import styles from './Appointments.module.css';
import { getAppointments } from '../../store/appointments/appointments';

const Appointments = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.usersReducer.currentUser);
  const appointments = useSelector((state) => state.appointments);
  const [upComingAppointments, setUpComingAppointments] = useState([]);
  const [pastAppointments, setUpPastAppointments] = useState([]);

  const distributeAppointments = (appointments) => {
    if (Array.isArray(appointments) && appointments.length !== 0) {
      const today = new Date();
      const upComing = appointments.filter(
        (appointment) => new Date(appointment.date) >= today,
      );
      const past = appointments.filter(
        (appointment) => new Date(appointment.date) < today,
      );
      setUpComingAppointments(upComing);
      setUpPastAppointments(
        past.sort((a, b) => new Date(b.date) - new Date(a.date)),
      );
    }
  };

  useEffect(() => {
    dispatch(getAppointments(currentUser));
    distributeAppointments(appointments);
  }, []);

  useEffect(() => {
    distributeAppointments(appointments);
  }, appointments);

  return (
    <div
      className={`bg-light_main_color flex items-center justify-center pt-32 ${styles.Appointments}`}
    >
      {Array.isArray(appointments) ? (
        appointments.length === 0 ? (
          <div className="bg-white border shadow-x1 drop-shadow-md p-6 py-5 min-w-[33.333%] max-w-[50%]">
            <div className="flex flex-col items-center space-y-4">
              <p className="text-lg text-dark_main_color text-center w-5/6 font-medium">
                You do not have any appointments yet . . . .
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col min-w-[50%] max-w-[75%]">
            <div>
              {upComingAppointments !== 0 && (
                <div>
                  <h2 className="font-medium text-center text-3xl mb-5 text-dark_main_color uppercase">
                    The Upcoming Appointments
                  </h2>
                  {upComingAppointments.map((upComingAppointment) => (
                    <div
                      key={upComingAppointment.id}
                      className="bg-white border shadow-x1 drop-shadow-md p-6 py-5 mb-5"
                    >
                      <div className="items-center">
                        <p className="font-semibold text-lg text-gray-400">
                          Time:
                          <span className="block font-semibold text-xl text-gray-700">
                            {dateFormat(
                              new Date(upComingAppointment.date),
                              'dddd, mmmm dS, yyyy, h:MM TT',
                            )}
                          </span>
                        </p>

                        <p className="font-semibold text-lg text-gray-400">
                          Doctor:
                          <span className="block font-semibold text-xl text-gray-700">
                            {upComingAppointment.doctor}
                          </span>
                        </p>

                        <p className="font-semibold text-lg text-gray-400">
                          Notes:
                          <span className="block font-semibold text-xl text-gray-700">
                            {upComingAppointment.notes}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              {pastAppointments !== 0 && (
                <div>
                  <h2 className="font-medium text-center text-3xl mb-5 text-dark_main_color uppercase mt-8">
                    The Past Appointments
                  </h2>
                  {pastAppointments.map((pastAppointment) => (
                    <div
                      key={pastAppointment.id}
                      className="bg-white border shadow-x1 drop-shadow-md p-6 py-5 mb-5"
                    >
                      <div className="items-center">
                        <p className="font-semibold text-lg text-gray-400">
                          Time:
                          <span className="block font-semibold text-xl text-gray-700">
                            {dateFormat(
                              new Date(pastAppointment.date),
                              'dddd, mmmm dS, yyyy, h:MM TT',
                            )}
                          </span>
                        </p>

                        <p className="font-semibold text-lg text-gray-400">
                          Doctor:
                          <span className="block font-semibold text-xl text-gray-700">
                            {pastAppointment.doctor}
                          </span>
                        </p>

                        <p className="font-semibold text-lg text-gray-400">
                          Notes:
                          <span className="block font-semibold text-xl text-gray-700">
                            {pastAppointment.notes}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )
      ) : (
        <div className={styles.loadWrap}>
          <div className={styles.load}>
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointments;
