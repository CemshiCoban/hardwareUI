import styled from 'styled-components';

interface CoreUsageProps {
  cores: number[];
}

const CoreContainer = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 15px -10px rgba(0,0,0, 0.75);
`;

const CoresTitle = styled.span`
  font-size: 20px;
  margin-bottom: 10px;
  display: block;
`;

const CoreWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr); // 4 cores per row, adjust as needed
  gap: 10px;
  padding: 20px;
`;

const CoreItem = styled.div<{ usage: number }>`
  width: 50px;
  height: 50px;
  background-color: ${({ usage }) => getColorForUsage(usage)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  border-radius: 4px;
`;

const interpolateColor = (startColor: string, endColor: string, factor: number) => {
  const [r1, g1, b1] = hexToRgb(startColor);
  const [r2, g2, b2] = hexToRgb(endColor);
  const r = Math.round(r1 + factor * (r2 - r1));
  const g = Math.round(g1 + factor * (g2 - g1));
  const b = Math.round(b1 + factor * (b2 - b1));
  return `rgb(${r}, ${g}, ${b})`;
};

const hexToRgb = (hex: string) => {
  let r = 0, g = 0, b = 0;
  if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  }
  return [r, g, b];
};

const getColorForUsage = (usage: number) => {
  const minColor = '#5BE12C';
  const maxColor = '#EA4228';
  const factor = usage / 100;
  return interpolateColor(minColor, maxColor, factor);
};


const CoreUsage: React.FC<CoreUsageProps> = ({ cores }) => {
  return (
    <CoreContainer>
      <CoresTitle>CPU Cores</CoresTitle>
      <CoreWrapper>
        {cores.map((usage, index) => (
          <CoreItem key={index} usage={usage}>
            {Math.round(usage)}%
          </CoreItem>
        ))}
      </CoreWrapper>
    </CoreContainer>
  );
};

export default CoreUsage;
