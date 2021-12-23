import React from "react";
import ContentLoader from "react-content-loader";

const Loader = (props: any) => (
  <ContentLoader
    speed={2}
    width={"100%"}
    height={300}
    viewBox="0 0 400 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="7" y="6" rx="3" ry="3" width="118" height="31" />
    <rect x="7" y="69" rx="3" ry="3" width="91" height="14" />
    <rect x="7" y="174" rx="3" ry="3" width="115" height="30" />
    <rect x="265" y="70" rx="3" ry="3" width="135" height="14" />
    <rect x="7" y="225" rx="3" ry="3" width="91" height="14" />
    <rect x="290" y="106" rx="3" ry="3" width="110" height="14" />
    <rect x="7" y="106" rx="3" ry="3" width="91" height="14" />
    <rect x="310" y="225" rx="3" ry="3" width="90" height="14" />
    <rect x="7" y="261" rx="3" ry="3" width="75" height="14" />
    <rect x="305" y="262" rx="3" ry="3" width="95" height="14" />
  </ContentLoader>
);

export default Loader;
