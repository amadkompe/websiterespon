import React from 'react'
import { Button, Heading, TextWrapper } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
  JoinSection,
  JoinWrapper,
  JoinContainer,
  JoinCardInfo,
  JoinCardPlan,
  JoinCardCost,
  JoinCardFeatures,
  JoinCardText,
  JoinCardFeature,
  JoinCard,
} from './JoinStyles';
import { joinData } from '../../data/JoinData';

function Join() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
      <JoinSection id="join">
        <JoinWrapper>
          <Heading>Pick Your Best Option</Heading>

          <TextWrapper
            mb="1.4rem"
            weight="600"
            size="1.1rem"
            color="white"
            align="center"
          >
            Simpan Uang Anda di kompe.
          </TextWrapper>
          <JoinContainer>
            {joinData.map((card, index) => (
              <JoinCard key={index}>
                <JoinCardInfo>
                  <JoinCardPlan>{card.title}</JoinCardPlan>
                  <JoinCardCost>{card.price}</JoinCardCost>
                  <JoinCardText>{card.description}</JoinCardText>
                  <JoinCardFeatures>
                    {card.features.map((feature, index) => (
                      <JoinCardFeature key={index}>
                        {feature}
                      </JoinCardFeature>
                    ))}
                  </JoinCardFeatures>
                  <Button>Get Started</Button>
                </JoinCardInfo>
              </JoinCard>
            ))}
          </JoinContainer>
        </JoinWrapper>
      </JoinSection>
    </IconContext.Provider>
  )
}

export default Join