import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getADoctor } from '../../store/doctors/doctors';
import styles from './doctors.module.css';

const url = 'https://pick-a-doc.herokuapp.com/api/';

const GetDoctor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const doctor = useSelector((state) => state.doctorReducer);
  const currentUser = useSelector((state) => state.usersReducer.currentUser);
  const { headers } = currentUser;
  const [state, setState] = React.useState({
    doctor_id: '',
    user_id: '',
    date: '',
    time: '',
    notes: '',
  });

  const submitForm = (evt) => {
    evt.preventDefault();
    const appointment = {
      doctor_id: doctor.doctor.id,
      user_id: currentUser.attributes.id,
      date: `${state.date} ${state.time}`,
      notes: state.notes,
    };
    console.log(appointment);
    console.log(currentUser.headers);
    axios.post(`${url}appointments`, appointment, { headers })
      .then(() => {
        navigate('/appointments');
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };
  const { docID } = useParams();
  useEffect(() => {
    dispatch(getADoctor(currentUser, docID));
  }, []);

  const handleChange = (evt) => {
    evt.preventDefault();
    const { value } = evt.target;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  return (
    <div className="flex w-screen h-screen bg-grey items-center">
      <div className="container justify-center px-6 pt-24 m-auto items-center">
        {typeof doctor.doctor !== 'undefined' ? (
          <>

            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg ">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-4/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative w-40 ">
                        <img alt={`${doctor.doctor.first_name} ${doctor.doctor.last_name}`} src={doctor.doctor.profile_image} className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -mx-0 lg:-ml-0 max-w-150-px bg-white" />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right self-center">
                      <div className="py-6 px-3 mt-32 sm:mt-0" />
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8" />
                    </div>
                  </div>
                  <div className="text-center mt-20">
                    <h3 className="font-semibold leading-normal mb-2 headline text-4xl text-center">
                      {`${doctor.doctor.first_name} ${doctor.doctor.last_name}`}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-darkblue font-bold uppercase">
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
                        <h1 className="headline text-3xl text-center mb-12">book your appointment.</h1>
                        <form className="w-full max-w-sm mx-auto" onSubmit={submitForm}>
                          <div className="md:flex md:items-center mb-6">
                            <div className="w-full md:w-1/2 mb-6 md:mb-0 pr-1">
                              <input className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-grey focus:border-dark_main_color" type="date" name="date" value={state.password} onChange={handleChange} placeholder="date" required />
                            </div>
                            <div className="w-full md:w-1/2 pl-1">
                              <input className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-grey focus:border-dark_main_color" type="time" name="time" value={state.passwordConfirm} onChange={handleChange} placeholder="time" required />
                            </div>
                          </div>
                          <div className="md:flex md:items-center mb-6">
                            <input className="bg-sky-100 appearance-none border-1 border-sky-900 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-grey focus:border-dark_main_color" type="text" name="notes" value={state.notes} onChange={handleChange} placeholder="notes" required />
                          </div>
                          <div className="md:flex items-center justify-center">
                            <button className="shadow bg-dark_main_color text-cyan focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                              Book Now
                            </button>

                          </div>
                        </form>
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

export default GetDoctor;
