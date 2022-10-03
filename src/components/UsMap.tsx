import React, { useContext, useState } from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";

import allStates from "../data/allStates.json";
import guessesContext, { useGuesses, useGuessesUpdate } from "./context";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21],
};

const UsMap = () => {
  const getStateByID = (id: string) => {
    return allStates.filter((state) => state.val === id)[0];
  };
  const guesses = useGuesses();
  const guessesUpdate = useGuessesUpdate();

  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                stroke="#FFF"
                geography={geo}
                fill="#DDD"
                style={{
                  default: {
                    fill: `${
                      guesses.includes(geo.id)
                        ? getStateByID(geo.id)?.majority === "blue"
                          ? "#89cff0"
                          : "#ff4122"
                        : "#D6D6DA"
                    }`,
                    outline: "none",
                  },
                  hover: {
                    fill: "#89cff0",
                    outline: "none",
                  },
                }}
              />
            ))}
            {geographies.map((geo) => {
              const centroid = geoCentroid(geo);
              const cur = allStates.find((s) => s.val === geo.id);
              return (
                <g key={geo.rsmKey + "-name"}>
                  {cur &&
                    centroid[0] > -160 &&
                    centroid[0] < -67 &&
                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={14} textAnchor="middle">
                          {guesses.includes(cur.id) ? cur.id : ""}
                        </text>
                      </Marker>
                    ) : (
                      <div>annotation</div>
                      // <Annotation
                      //   subject={centroid}
                      //   dx={offsets[cur.id][0]}
                      //   dy={offsets[cur.id][1]}
                      //   connectorProps={<svg></svg>}
                      // >
                      //   <text x={4} fontSize={14} alignmentBaseline="middle">
                      //     {cur.id}
                      //   </text>
                      // </Annotation>
                    ))}
                </g>
              );
            })}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
};

export default UsMap;
