import React from 'react';
import styled from 'styled-components';
import NetworkGauge from './NetworkGauge';

const NetworkContainer = styled.div`
  flex: 4;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 15px -10px rgba(0,0,0, 0.75);
`;

const NetworkTitle = styled.span`
  font-size: 20px;
  display: block;
  margin-bottom: 10px;
`;

const GaugeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const GaugeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GaugeLabel = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`;

interface NetworkUsageProps {
  inbound: number;
  outbound: number;
}

const NetworkUsage: React.FC<NetworkUsageProps> = ({ inbound, outbound }) => {
  return (
    <NetworkContainer>
      <NetworkTitle>Network Statistics</NetworkTitle>
      <GaugeContainer>
        <GaugeItem>
          <GaugeLabel>Incoming</GaugeLabel>
          <NetworkGauge value={inbound} />
        </GaugeItem>
        <GaugeItem>
          <GaugeLabel>Outgoing</GaugeLabel>
          <NetworkGauge value={outbound} />
        </GaugeItem>
      </GaugeContainer>
    </NetworkContainer>
  );
};

export default NetworkUsage;
