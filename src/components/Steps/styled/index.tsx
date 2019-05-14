import styled from 'styled-components'
import { colorQuaternary, colorTertiary, colorPrimary, colorRedPrimary } from '../../../styles/theme'
import { prefix } from '../Step'

const StyledSteps = styled.section`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 14px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const StyledStep = styled.section`
  flex: auto;
  width: 100%
  position: relative;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  white-space: nowrap;
  & + &{
    margin-left: 10px;
  }
  &>*{
    display: inline-block;
    vertical-align: top;
  }
  &:last-of-type{
    width: auto;
    flex: none;
  }
  .${prefix}-icon{
    color: ${colorTertiary};
    border: 2px solid ${colorTertiary};
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 32px;
    font-size: 16px;
    margin-right: 8px;
    background-color: transparent;
    &-active{
      border-color: ${colorRedPrimary};
      color: ${colorRedPrimary};
    }
    &-current{
      border-color: ${colorRedPrimary};
      color: #ffffff;
      background-color: ${colorRedPrimary};
    }

    &-index{
      font-size: 16px;
    }
  }
  .${prefix}-content{
    position: relative;
    &-title{
      font-size: 16px;
      color: ${colorTertiary};
      display: inline-block;
      position: relative;
      line-height: 32px;
      min-height: 9px;
      &::after{
        content: "";
        height: 2px;
        width: 9999px;
        background-color: ${colorQuaternary};
        display: block;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        left: 120%;
      }
      &-active{
        color: ${colorPrimary};
        &::after{
          background-color: ${colorRedPrimary};
        }
      }
      &-current{
        color: ${colorPrimary};
        font-weight: 600;
      }
    }
    .${prefix}-description{
      max-width: 140px;
      color: ${colorTertiary};
      font-weight: 500;
      &-current{
        color: ${colorPrimary};
      }
    }
  }
`;

export { StyledSteps, StyledStep }
