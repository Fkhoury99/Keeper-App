import React from "react";
import CommentIcon from "@material-ui/icons/Comment";
import { positions } from "@material-ui/system";

function Header() {
  return (
    <header>
      <h1>
        <CommentIcon fontSize="medium"></CommentIcon>
        Keeper
      </h1>
    </header>
  );
}

export default Header;
