import React from 'react';
import styled from 'styled-components';
import FeaturedGauge from './FeaturedGauge';
import { featuredData } from './featuredData';

const FeaturedContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FeaturedItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 15px -10px rgba(0,0,0, 0.75);
`;

const FeaturedTitle = styled.span`
  font-size: 20px;
`;

const FeaturedContentContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;




const Featured: React.FC = () => {
  return (
    <FeaturedContainer>
      {featuredData && featuredData.map((item,index) =>(
        <FeaturedItem key = {index}>
          <FeaturedTitle>{item.title}</FeaturedTitle>
        <FeaturedContentContainer>
         <FeaturedGauge value= {item.usage} />
        </FeaturedContentContainer>
        </FeaturedItem>
      ))}
    </FeaturedContainer>
  );
};

export default Featured;
