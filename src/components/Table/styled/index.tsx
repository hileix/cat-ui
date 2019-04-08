import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'

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

const StyledTr = styled.tr`
  text-align: left;
  &.hmly-table-row-center {
    text-align: center;
  }
`;

const StyledTd = styled.td`
  position: relative;
  vertical-align: middle;
  border-bottom: 1px solid #e1e6f0;
  padding: 10px;
  line-height: 22px;
  word-break: break-all;
  font-size: 14px;
  font-weight: bold;
  color: #0f0f0f;
`;

const StyledTh = styled.th`
  position: relative;
  vertical-align: middle;
  border-bottom: 1px solid #e1e6f0;
  padding: 10px;
  line-height: 22px;
  text-align: left;
  word-break: break-all;
  color: #9b9b9b;
  font-size: 12px;
  font-weight: bold;
`;

export { StyledTableBox, StyledTr, StyledTd, StyledTh }
