import React from 'react'
import { currencyFormatter } from '../../libs/utils';

const Information = ({ movieDetail }) => {
    console.log({movieDetail : movieDetail });
  return (
    <div>
      <p className="mb-4 text-xl font-bold">Infornation</p>
      <div className="mb-4">
        <p className="font-bold">Origianal Name</p>
        <p>{movieDetail.original_title}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Origianal Country</p>
        {(movieDetail.origin_country || []).map((country) => (
          <img
            key={country}
            src={`https://flagcdn.com/48x36/${country.toLowerCase()}.png`}
            className="mt-1 w-[2vw]"
          />
        ))}
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{movieDetail.status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Budget</p>
        <p>{currencyFormatter(movieDetail.budget)}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Revenue</p>
        <p>{currencyFormatter(movieDetail.revenue)}</p>
      </div>
    </div>
  );
};

export default Information
