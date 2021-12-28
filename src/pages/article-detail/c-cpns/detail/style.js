import styled from 'styled-components'

export const DetailWrapper = styled.div`
  @media screen and (min-width: 900px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`
export const DetailLeft = styled.div`
  padding: 20px 20px;
  border: 1px solid #ddd;
  width: 75%;
  background-color: #fff;
  word-wrap: break-word;
  word-break: break-all;
  white-space: normal;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 30px 0 15px;
    font-weight: bold;
  }
  p {
    white-space: normal;
    font-size: 15px;
    line-height: 2;
  }
  blockquote {
    margin: 3px 0;
    padding: 10px;
    background: #eee;
    border-radius: 5px;
    position: relative;
    text-indent:2em;
    border: 1px solid #999;
    &::before {
      content: '🚩';
      display: inline-block;
      position: absolute;
      left: -10px;
      top: 12px;
    }
  }
  img {
    margin: 15px 0;
    box-shadow: 1px 1px 2px 2px #ccc;
  }
  .top {
    width: 100%;
    height: 60px;
    background-color: #e1f0ff;
    line-height: 60px;
    display: flex;
    align-items: center;
    font-size: 20px;

    .back {
      color: #2782e3;
      font-weight: bold;
      padding: 0 8px;
      cursor: pointer;
      text-decoration: underline;
    }
  }
  .title {
    text-align: center;
    color: #2782e3;
    font-weight: bold;
    margin: 20px 0;
    font-size: 24px;
  }
  .info {
    display: flex;
    justify-content: space-around;
    color: #333;
  }
  .image {
    margin-top: 20px;
    text-align: center;
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  .description {
    margin-top: 20px;
    font-size: 15px;
    width: 100%;
    color: #666;
    text-align: center;
  }
  .content {
    color: #000;
    img {
      width: 100%;
      object-fit: fill;
    }
  }
  .update {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #ddd;
  }
  a {
    color: #005ef5;
    text-decoration: underline;
  }
  .parting-line {
    height: 4px;
    border: 0px;
    background-color: rgb(221, 221, 221);
    margin: 20px 0px;
    background-image: repeating-linear-gradient(
      -45deg,
      rgb(255, 255, 255),
      rgb(255, 255, 255) 4px,
      transparent 0px,
      transparent 8px
    );
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`
export const DetailRight = styled.div`
  border: 1px solid #ddd;
  background-color: #fff;
  color: #000;
  opacity: 0.8;
  width: 25%;
  .article-menu {
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`
