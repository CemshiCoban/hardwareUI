import styled from 'styled-components';
import Featured from './featured/Featured';
import Chart from './Chart';
import CoreUsage from './Cores';
import NetworkUsage from './network/NetworkUsage';
import { chartData } from './chartData';
import { HomeData } from './HomeData';

const HomeContainer = styled.div`
  flex: 4;
`;

const FlexContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const cores = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

const Home = () => {
  const featuredData = HomeData.filter(item => item.title !== 'Network') as { title: string; usage: number }[];
  const networkData = HomeData.find(item => item.title === 'Network');

  return (
    <HomeContainer>
      <Featured data={featuredData} />
      <Chart data={chartData} title='General Timeline' grid dataKey='name'/>
      <FlexContainer>
        <CoreUsage cores={cores} />
        {networkData && typeof networkData.usage === 'object' && (
          <NetworkUsage inbound={networkData.usage.inbound} outbound={networkData.usage.outbound} />
        )}
      </FlexContainer>
    </HomeContainer>
  );
};

export default Home;
