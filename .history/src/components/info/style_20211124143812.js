import styled from 'styled-components'

export const InfoWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px 0;
  padding: 10px 10px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 3px solid #3ad923;
    padding-bottom: 5px;

    .title {
      color: #666;
    }
    a {
      cursor: pointer;
      text-decoration: none;
      color: #7087ed;
    }
  }
  .tag-list {
    margin-top: 15px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`

export const TagWrapper = styled.div`
  position: relative;
	.tag {
		margin: 5px 0;
  padding: 3px 14px;
  cursor: pointer;
	}
  .num {
    position: absolute;
    display: block;
    right: 10px;
    top: -6px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    align-self: center;
    border-radius: 50%;
    background-color: ${props => (props.color ? props.color : '#ff0000')};
    color: #fff;
  }
`
