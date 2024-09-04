import React from "react";
import GaugeComponent from "react-gauge-component";

interface FeaturedGaugeProps {
  value: number;
}

const FeaturedGauge: React.FC<FeaturedGaugeProps> = ({ value }) => {
  return (
    <GaugeComponent
  value={value}
  type="radial"
  labels={{
    tickLabels: {
    },
    valueLabel: {
      matchColorWithArc: true, 
      style: {
        fontSize: "35px",
        fill: "currentColor",
        textShadow: "none" 
      },
    },
  }}
  arc={{
    colorArray: ['#5BE12C','#EA4228'],
    subArcs: [{limit: 10}, {limit: 30}, {}, {}, {}],
    padding: 0.02,
    width: 0.4
  }}
  pointer={{
    elastic: false,
    animationDelay: 0
  }}
/>
  );
};

export default FeaturedGauge;
