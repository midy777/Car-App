import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.div`
    //min-height: 24em;
    background-color: #1d2124;
    ${tw`
        flex
        flex-col
        min-w-full
        pt-10
        md:pt-16
        items-center
        justify-center
    `};
`;

const InnerContainer = styled.div`
    ${tw`
        flex
        w-full
        h-full
        max-w-screen-2xl
        flex-wrap
    `};
`;

const ButtonContainer = styled.div`
    ${tw`
        w-full
        flex
        max-w-screen-2xl
        justify-center
        md:justify-start
        mt-7
        md:mt-1
    `};
`;

const CopyrightText = styled.small`
    font-size: 12px;
    ${tw`
        text-gray-300
    `};
`;

const AboutContainer = styled.div`
    ${tw`
        flex
        flex-col
        mr-2
        md:mr-16
        pl-10
        pr-10
        md:pl-3
        md:pr-3 
    `};
`;

const AboutText = styled.p`
    ${tw`
        text-white
        text-sm
        font-light
        max-w-xs
        leading-5
        mt-2
    `};
`;

const SectionContainer = styled.div`
    ${tw`
        w-full
        md:w-auto
        flex 
        flex-col
        mr-2
        md:mr-12
        pl-10
        pr-10
        md:pl-3
        md:pr-3 
        mt-7
        md:mt-0
    `};
`;

const LinkList = styled.ul`
    ${tw`
        outline-none
        list-none
        flex
        flex-col
    `};
`;

const ListItem = styled.li`
    ${tw`
        mb-3
    `};

    & > a {
        ${tw`
            text-sm
            text-white
            transition-all
            hover: text-gray-200
        `};
    }
`;

const HeaderTitle = styled.h3`
    ${tw`
        text-2xl
        font-bold
        text-white
        mb-3
    `};
`;

const HorizontalContainer = styled.div`
    ${tw`
        flex
        items-center    
    `};
`;

const RedIcon = styled.span`
    ${tw`
        w-8
        h-8
        rounded-full
        bg-red-500
        flex
        items-center
        justify-center
        text-white
        text-base
        mr-2    
    `};
`;

const SmallText = styled.h6`
    ${tw`
        text-xs
        text-white    
    `};
`;

export function Footer() {
    return ( 
        <FooterContainer>
            <InnerContainer>
                <AboutContainer>
                    <Logo color="white" bgColor="dark" />
                    <AboutText>
                    Yourcar is a car renting and selling company located in many 
                    countries across the world which has high quality cars and top rated 
                    service 
                    </AboutText>
                </AboutContainer>
                <SectionContainer>
                    <HeaderTitle>Our Links</HeaderTitle>
                <LinkList>
                    <ListItem>
                        <a href="#">Home</a>
                    </ListItem>
                    <ListItem>
                        <a href="#">About Us</a>
                    </ListItem>
                    <ListItem>
                        <a href="#">Services</a>
                    </ListItem>
                    <ListItem>
                        <a href="#">Models</a>
                    </ListItem>
                    <ListItem>
                        <a href="#">Blog</a>
                    </ListItem>
                </LinkList>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Other Links</HeaderTitle>
                <LinkList>
                    <ListItem>
                        <a href="#">FAQ</a>
                    </ListItem>
                    <ListItem>
                        <a href="#">Contact Us</a>
                    </ListItem>
                    <ListItem>
                        <a href="#">Support</a>
                    </ListItem>
                    <ListItem>
                        <a href="#">Privacy Policy</a>
                    </ListItem>
                    <ListItem>
                        <a href="#">Terms &amp; Conditions</a>
                    </ListItem>
                </LinkList>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Call Now</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faPhoneAlt} />
                        </RedIcon>
                        <SmallText>+62 555-234-8469</SmallText>
                    </HorizontalContainer>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Mail</HeaderTitle>
                    <HorizontalContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </RedIcon>
                        <SmallText>info@yourcar.com</SmallText>
                    </HorizontalContainer>
                </SectionContainer>
            </InnerContainer>
            <ButtonContainer>
                <CopyrightText>
                 Copyright &copy; {new Date().getFullYear()} Yourcar . All rights reserved.
                </CopyrightText>
            </ButtonContainer>
        </FooterContainer>
    );    
}