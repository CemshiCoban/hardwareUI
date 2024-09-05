import GaugeComponent from 'react-gauge-component';

interface NetworkGaugeProps {
  value: number;
}

const kbitsToMbits = (value: number) => {
  if (value >= 1000) {
    value = value / 1000;
    return value.toFixed(1) + ' mbit/s';
  } else {
    return value.toFixed(0) + ' kbit/s';
  }
};

const NetworkGauge: React.FC<NetworkGaugeProps> = ({ value }) => {
  return (
    <GaugeComponent
      value={value}
      maxValue={3000}
      type="radial"
      arc={{
        nbSubArcs: 6,
        colorArray: [ '#EA4228' , '#F5CD19', '#5BE12C'],
        width: 0.3,
        padding: 0.01,
      }}
      labels={{
        valueLabel: {
          formatTextValue: kbitsToMbits,
          matchColorWithArc: true, 
        style: {
        fontSize: "35px",
        fill: "currentColor",
        textShadow: "none" 
      },
        },
        tickLabels: {
          type: 'outer',
          ticks: [
            { value: 100 },
            { value: 200 },
            { value: 300 },
            { value: 400 },
            { value: 500 },
            { value: 600 },
            { value: 700 },
            { value: 800 },
            { value: 900 },
            { value: 1000 },
            { value: 1500 },
            { value: 2000 },
            { value: 2500 },
            { value: 3000 },
          ]
        },
      }}
      pointer={{
        elastic: false,
        animationDelay: 0,
      }}
    />
  );
};

export default NetworkGauge;
