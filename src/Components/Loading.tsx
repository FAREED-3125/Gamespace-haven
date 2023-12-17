import React from "react";
import ReactLoading from "react-loading";

interface Props {
  height?: string;
  width?: string;
  width2?: string;
  height2?: string;
  color?: string;
}
const Example = ({ height, width, width2, height2, color }: Props) => {
  return (
    <div
      className="loading-container"
      style={{
        width: `${width2}`,
        height: `${height2}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ReactLoading
        type={"spin"}
        color={color ? color : "#C70039"}
        height={height}
        width={width}
      />
    </div>
  );
};

export default Example;
