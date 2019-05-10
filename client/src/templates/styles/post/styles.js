import styled from 'styled-components'

import { media } from '../../../utils/cssMediaTemplate'

export const BlogTitle = styled.h3`
  ${media.medium`
        padding: 0 6px 0 6px;
    `};
`

export const BlogContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-height: 100vh;
  top: 0;
  z-index: -99;
`

export const BlogPost = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  width: 100%;
  ${media.medium`
        flex-direction: column;
    `};
`

export const BlogDetails = styled.div`
  border-top: 1.5px solid #c0c0c0;
  margin-top: 20px;
  line-height: 10px;
  width: 90%;

  & > p {
    text-align: right;
    font-size: 0.85em;
    font-weight: 500;
    margin-right: 8px;
  }

  & > p:nth-child(2) {
    font-size: 0.7em;
    font-weight: 700;
  }
`

export const BlogInfo = styled.div`
  min-width: 250px;
  max-width: 300px;
  margin-left: 4px;
  margin-right: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.medium`
        min-width: 100%;
        margin-left: 0;
        margin-right: 0;
    `};
`

export const Thumbnail = styled.img`
  width: 220px;
  margin-top: 16px;

  ${media.medium`
         width: 120px;
    `};
`

export const BlogContent = styled.div`
  overflow: auto;
  flex-basis: 70%;
  margin-right: 4px;
  height: 100%;
  overflow: auto;
  ${media.medium`
        width: 100%;
        margin-top: 10px;
    `};
`

export const Content = styled.div`
  /* These styles control what the markdown files look like after being converted to HTML */
  p {
    font-size: 0.9em;
    line-height: 20px;

    & > strong {
      font-size: 0.9em;
    }

    & > a {
      text-decoration: underline;
      color: #3b6ea5;
      font-size: 0.85em;
      transition: 0.3s;
      &:hover {
        transition: 0.3s;
        color: #595959;
      }
    }
  }

  & ul {
    font-size: 0.9em;
    color: #3b6ea5;
  }
  ${media.medium`
         padding-left: 4px;
         padding-right: 4px;
    `};
`

export const BackLink = styled.div`
  margin-top: 14px;
  & > a {
    text-decoration: none;
    font-size: 0.7em;
    color: #595959;
    transition: 0.3s;

    &:hover {
      transition: 0.3s;
      font-size: 0.72em;
      color: #3a6ea5;
    }
  }
`

export const TwitterShare = styled.div`
  margin-top: 4px;
`
