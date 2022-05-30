import styled from "styled-components";

export const Card = styled.div`
    border-radius: 20px;  
    overflow: hidden;
    background-color: white;  
    box-shadow: rgba(100, 100, 111, 0.2); 0px 7px 29px 0px;  
    width: calc(25% - 30px);
    margin-left: 30px;
`;
export const CardImage = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
`;
export const CardContent = styled.div`
  padding: 25px;
`;
export const CardTop = styled.div``;
export const CardTitle = styled.h2`
  font-weight: 500;
  margin-bottom: 25px;
`;
export const CardUser = styled.div`
  display: flex;
  align-items: center;
`;
export const CardAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100rem;
  flex-shrink: 0; // cố định mức đó ko bị scale lại là sao???
  object-fit: cover;
`;
export const CardUserInfo = styled.div`
  padding-left: 20px;
  flex: 1; // chiem het cac do rong con lai
`;
export const CardUserTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const CardUserName = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
`;
export const CardUserCheck = styled.div``;
export const CardUserGame = styled.div`
  color: #999;
  font-weight: 300;
  font-size: 13px;
`;
export const CardBottom = styled.div``;
export const CardLive = styled.div``;
export const CardWatching = styled.div``;
