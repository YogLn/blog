import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px solid #e82e47;
  padding-bottom: 5px;
  width: 100%;
  margin: 0 auto;

	@media screen and (max-width: 900px) {
		left: 5%;
		position: relative;
	}
  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .total {
      color: #e82e47;
      margin: 0 2px;
    }
  }
`
