import React from "react";

type MapProps = {
  lat: number | undefined;
  lng: number | undefined;
};

const map = ({ lat, lng }: MapProps) => {
  return (
    <div>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7425.254051636312!2d${lng}!3d${lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1632792568821!5m2!1spt-BR!2sbrz?`}
        width="600"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default map;
