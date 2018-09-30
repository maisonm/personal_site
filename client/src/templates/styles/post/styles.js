import styled from 'styled-components';

import { media } from '../../../utils/cssMediaTemplate';

export const BlogTitle = styled.h3`
`;

export const BlogContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: -99;
`;

export const BlogPost = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    
    ${media.medium`
        flex-direction: column;
    `}
`;

export const BlogDetails = styled.div`
    border-top: 1.5px solid #c0c0c0;
    margin-top: 20px;
    line-height: 10px;
    width: 90%;

    & > p {
        text-align: right;
        font-size: .85em;
        font-weight: 500;
        margin-right: 8px;
     };

     & > p:nth-child(2) {
         font-size: .7em;
         font-weight: 700;
     }
`;

export const BlogInfo = styled.div`
    min-width: 250px;
    max-width: 300px;
    margin-left: 4px;
    margin-right: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.medium`
        width: 90%;
        margin-left: 0;
        margin-right: 0;
    `}
`;

export const Thumbnail = styled.img`
   width: 220px;
   margin-top: 16px;
`;

export const BlogContent = styled.div`
    overflow: auto;
    flex-basis: 60%;
    margin-right: 4px;

    ${media.medium`
        width: 90%;
        
    `}
`;

export const Content = styled.div`
    & > p {
      font-size: .8em;
    }
`;

export const BackLink = styled.div`
    margin-top: 14px;
    & > a {
        text-decoration: none;
        font-size: .7em;
        color: #595959;
        transition: .3s;

        &:hover {
            transition: .3s;
            font-size: .72em;
            color: #3A6EA5;
        }
    }
`;

export const TwitterShare = styled.div`
    margin-top: 4px;
`;
