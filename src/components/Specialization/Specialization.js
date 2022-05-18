/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Specialization.module.css';
import { GetSpecializations } from '../../store/specializations/specializations';

const Specialization = () => {
  const dispatch = useDispatch();
  const specializations = useSelector((state) => state.specializations);

  useEffect(() => {
    console.log('hereee');
    dispatch(GetSpecializations());
  }, []);

  return (
    <div className={`bg-grey flex items-center justify-center ${styles.Specialization}`}>
      {(Array.isArray(specializations) && specializations.length !== 0)
        ? (
          <div className="grid grid-cols-4">
            {
            specializations.map((specialization) => (
              <div key={specialization.id} className={`flex ${(specialization.id % 2 === 0) ? 'flex-col-reverse' : 'flex-col'}`}>
                <div style={{ backgroundImage: `url(${specialization.image})` }} className="bg-no-repeat bg-cover bg-center min-h-[250px] min-w-[250px]" />
                <div className={`min-h-[250px] min-w-[250px] flex items-center justify-center font-sans text-xl font-bold uppercase text-white tracking-wider cursor-pointer relative ${(specialization.id % 2 === 0) ? `bg-light_main_color ${styles.evenBlock}` : `bg-light_purple_color ${styles.oddBlock}`}`}>{specialization.name}</div>
              </div>
            ))
            }
          </div>
        )
        : <div>Sorry Loading</div>}
    </div>
  );
};

export default Specialization;
