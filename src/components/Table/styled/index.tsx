import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'
import { EmptyInnerProps, StyledTableHeaderProps } from '../interface'
import Icon from '../../Icon'

const StyledTableBox = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  clear: both;
  box-sizing: border-box;
  font-size: 12px;
  color: #4a4a4a;
  .table {
    width: 100%;
    border-collapse: collapse;
  }
`;

const StyledTableHeader = styled.thead`
  text-align: ${(props: StyledTableHeaderProps) => props.align};
`;

const StyledTr = styled.tr`
  text-align: left;
  &:hover {
    background-color: rgba(238, 238, 238, 0.3);
  }
  &.hmly-table-row-center {
    text-align: center;
  }
  &.hmly-table-row-draggable {
    cursor: move;
  }
`;

const StyledTd = styled.td`
  position: relative;
  vertical-align: middle;
  border-bottom: 1px solid #e1e6f0;
  padding: 20px 10px;
  line-height: 22px;
  word-break: break-all;
  font-size: 14px;
  font-weight: 600;
  color: #4a4a4a;
`;

const StyledTdInner = styled.div`
  display: flex;
  align-items: center;
`

const StyledTh = styled.th`
  position: relative;
  vertical-align: middle;
  border-bottom: 1px solid #e1e6f0;
  padding: 10px;
  line-height: 22px;
  word-break: break-all;
  color: #9b9b9b;
  font-size: 12px;
  font-weight: 600;
`;

const EmptyInner = styled.span`
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  .empty-bg {
    display: block;
    width: 127px;
    height: 137px;
    font-size: 19px;
    margin: 0 auto;
    background-image: url(${(props: EmptyInnerProps) => props.image});
    background-size: contain;
    background-repeat: no-repeat;
  }
  .empty-desc {
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.3px;
    text-align: center;
    color: #bcbcbc;
  }
`;

const EmptyImage = styled.img`
  display: block;
  width: auto;
  max-height: 137px;
  margin: 0 auto;
`;

const StyledFilter = styled(Icon)`
  cursor: pointer;
  margin-left: 5px;
  vertical-align: middle;
`;

const StyledPaginationBox = styled.div`
  margin: 30px auto;
  text-align: center;
`;

export { StyledTableBox, StyledTableHeader, StyledTr, StyledTd, StyledTh,
  EmptyInner, EmptyImage, StyledFilter, StyledPaginationBox, StyledTdInner }
