import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
  width: 260px;
  /* background-color: var(--121212); */
  background-color: var(--primary-background-sidebar-color);

  /* color: var(--FFFFFF); */
  color: var(--secondary-heading-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out;
  z-index: 11;

  @media (max-width: 768px) {
    position: absolute;
    height: 100vh;
    width: 225px;
  }
`;

export const Logo = styled.h1`
  display: flex;
  align-items: center;

  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
  padding-bottom: 60px;

  font-size: 16px;
  font-weight: 600;
  /* line-height: 24px; */
  line-height: calc(24 / 16);
  letter-spacing: -0.04em;
`;

export const IconLogo = styled.svg`
  width: 32px;
  height: 32px;
  margin-right: 8px;
`;

export const H3Board = styled.h3`
  font-size: 12px;
  font-weight: 400;
  line-height: calc(18 / 12);
  letter-spacing: -0.02em;
  /* color: var(--FFFFFF); */
  color: var(--secondary-text-sidebar-color);
  opacity: 0.5;

  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 8px;
`;

export const CreateBoard = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  line-height: calc(21 / 14);
  letter-spacing: -0.02em;

  margin-left: 24px;
  margin-right: 24px;
  padding-bottom: 14px;
  padding-top: 14px;

  /* border-top: solid 1px #ffffff1a; */
  border-top: solid 1px var(--line-border-sidebar-color);
  /* border-bottom: solid 1px #ffffff1a; */
  border-bottom: solid 1px var(--line-border-sidebar-color);
`;

export const IconPlus = styled.svg`
  width: 32px;
  height: 32px;
  /* fill: var(--BEDBB0); */
  fill: var(--plus-button-color);
  /* stroke: var(--121212); */
  stroke: var(--secondary-icon-stroke-color);
  &:hover {
    /* fill: var(--9DC888); */
    fill: var(--plus-button-hover-color);
    cursor: pointer;
  }
`;

export const BoardList = styled.ul`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BoardItem = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 24px;
  /* background-color: var(--161616);
  /* var(--121212) 
  color: var(--FFFFFF); */

  /* background-color: var(--board-item-sidebar-background-color);
  color: var(--board-item-sidebar-color); */

  cursor: pointer;

  font-size: 14px;
  font-weight: 500;
  line-height: calc(24 / 14);
  letter-spacing: -0.02em;
  text-align: left;

  background-color: ${props =>
    props.isActive
      ? 'var(--board-item-sidebar-background-color)'
      : 'transparent'};
  color: ${props =>
    props.isActive ? 'var(--board-item-sidebar-color)' : 'grey'};

  /* &:hover {
    background-color: #1e90ff;
  } */
`;

export const BorderRight = styled.div`
  display: ${props => (props.isActive ? 'block' : 'none')};
  content: '';
  position: absolute;
  top: 0;
  right: -1px;
  height: 100%;
  width: 3px;
  /* background-color: var(--BEDBB0); */
  background-color: var(--scrollbar-color);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const ProgName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const IconProgect = styled.svg`
  width: 18px;
  height: 18px;
  /* stroke: var(--FFFFFF); */
  fill: var(--sidebar-icon-fill-color);
  stroke: var(--sidebar-icon-stroke-color);
`;
export const IconEditCustom = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;

export const IconEdit = styled.svg`
  margin-left: 8px;
  width: 16px;
  height: 16px;
  /* stroke: #ffffff80; */
  stroke: var(--sidebar-icon-edit-stroke-color);
  fill: none;
  &:hover {
    /* stroke: var(--9DC888); */
    stroke: var(--plus-button-color);
    /* filter: drop-shadow(0 0 7px var(--9DC888)); */
    filter: drop-shadow(0 0 7px var(--plus-button-color));
  }
`;

export const HelpBar = styled.div`
  position: relative;
`;

export const HelpTextContainer = styled.div`
  position: absolute;
  top: -210px;
  /* background-color: var(--1F1F1F); */
  background-color: var(--sidebar-help-backgound-color);
  padding: 20px;
  padding-bottom: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-left: 24px;
  margin-right: 24px;
`;

export const HelpBtn = styled.div`
  /* background-color: var(--1F1F1F); */
  background-color: var(--sidebar-help-backgound-color);
  padding: 20px;
  border-radius: 8px;
  margin-left: 24px;
  margin-right: 24px;
  cursor: pointer;

  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: calc(20 / 14);
  letter-spacing: -0.02em;
  &:hover {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

export const HelpImg = styled.img`
  width: 54px;
  height: 78px;
  margin-bottom: 14px;
`;

export const HelpTxt = styled.p`
  /* margin-bottom: 18px; */
  font-size: 14px;
  font-weight: 400;
  line-height: calc(20 / 14);
  letter-spacing: -0.02em;
`;

export const IconHelp = styled.svg`
  width: 16px;
  height: 16px;
  fill: none;
  /* stroke: var(--FFFFFF); */
  stroke: var(--sidebar-icon-stroke-color);
  margin-right: 8px;
`;

export const LogOut = styled.div`
  display: flex;
  align-items: center;
  margin: 24px;
  cursor: pointer;

  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  letter-spacing: 0em;

  &:hover {
    /* stroke: var(--9DC888); */
    stroke: var(--logout-hover-button-color);
    /* filter: drop-shadow(0 0 1px var(--9DC888)); */
    filter: drop-shadow(0 0 1px var(--logout-hover-button-color));
  }
`;

export const IconLogOut = styled.svg`
  width: 32px;
  height: 32px;
  fill: none;
  /* stroke: var(--BEDBB0); */
  stroke: var(--logout-button-color);
  margin-right: 8px;
`;