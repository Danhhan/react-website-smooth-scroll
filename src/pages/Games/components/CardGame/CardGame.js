import {
  Card,
  CardAvatar,
  CardBottom,
  CardContent,
  CardImage,
  CardUserInfo,
  CardLive,
  CardTitle,
  CardTop,
  CardUser,
  CardUserCheck,
  CardUserGame,
  CardUserName,
  CardUserTop,
  CardWatching,
} from "./CardStyled";
import React from "react";
import PropTypes from "prop-types";
import { FaCheckCircle, FaWifi } from "react-icons/fa";

const CardGame = (props) => {
  return (
    <Card>
      <CardImage
        src="https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        alt="Nature"
      />
      <CardContent>
        <CardTop>
          <CardTitle>2020 World Champs Gaming Warzone</CardTitle>
          <CardUser>
            <CardAvatar
              src="https://images.unsplash.com/photo-1586521995568-39abaa0c2311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="avatar"
            />
            <CardUserInfo>
              <CardUserTop>
                <CardUserName>Tam Tran</CardUserName>
                <CardUserCheck>
                  <FaCheckCircle />
                </CardUserCheck>
                <CardUserGame>Call of Duty</CardUserGame>
              </CardUserTop>
            </CardUserInfo>
          </CardUser>
        </CardTop>
        <CardBottom>
          <CardLive>
            <FaWifi />
            <span>Live</span>
          </CardLive>
          <CardWatching>4.2k watching</CardWatching>
        </CardBottom>
      </CardContent>
    </Card>
  );
};

CardGame.propTypes = {};

export default CardGame;
