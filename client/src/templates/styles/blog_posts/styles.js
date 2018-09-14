import styled from 'styled-components';

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
    /* border: solid black; */
    display: flex;
    justify-content: center;
    height: 500px;
    
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
    /* border: solid orange; */
    min-width: 250px;
    max-width: 300px;
    margin-left: 4px;
    margin-right: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Thumbnail = styled.img`
   width: 182px;
   margin-top: 16px;
`;

export const BlogContent = styled.div`
    /* border: solid purple; */
    overflow: auto;
    flex-basis: 60%;
    margin-right: 4px;
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
