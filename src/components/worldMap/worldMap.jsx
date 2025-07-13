import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl = "/features.json";

const highlighted = [
  "AUS",
  "LKA",

];


const MapChart = () => {
  return (
      <ComposableMap projection="geoEqualEarth">
        <Geographies geography={geoUrl} stroke="#FFF" strokeWidth={0.5} >
          {({ geographies }) =>
            geographies.map((geo) => {
              const isHighlighted = highlighted.indexOf(geo.id) !== -1;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isHighlighted ? "#248a49" : "#c8f7da"}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
  );
};

export default MapChart;