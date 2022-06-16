import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
    return (
        <HeroSection>
            <HeroVideo src="./assets/hero.mp4" autoPlay muted />
            <Container>
                <MainHeading>Your data is secure with us</MainHeading>
                <HeroText>
                    Kami menyediakan sistem keamanan terbaik untuk klien di seluruh dunia
                </HeroText>
                <ButtonWrapper>
                    <Link to="signup">
                        <Button>Get Started</Button>
                    </Link>
                    <HeroButton>Find More</HeroButton>
                </ButtonWrapper>
            </Container>
        </HeroSection>
    )
}

export default Hero