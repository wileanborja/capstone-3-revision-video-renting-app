import React from "react";

const Like = (props) => {
  let classes = "fa fa-thumbs-up";
  if (!props.liked) classes = "fa fa-thumbs-o-up";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;
