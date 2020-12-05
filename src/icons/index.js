export const DashboardIcon = ({
  size,
  color,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
}) => (
  <svg
    width={size || 50}
    x="0px"
    y="0px"
    viewBox="0 0 397.061 397.061"
    fill={color}
    style={{
      enableBackground: "new 0 0 397.061 397.061",
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
    }}
  >
    <g>
      <g>
        <g>
          <rect x="5.224" y="0" width="182.857" height="83.592" rx="30" />
          <rect x="5.224" y="111.49" width="182.857" height="292.571" rx="30" />
          <rect
            x="220.98"
            y="208.98"
            width="182.857"
            height="188.082"
            rx="30"
          />
          <rect x="220.98" y="0" width="182.857" height="188.082" rx="30" />
        </g>
      </g>
    </g>
  </svg>
);

export const UploadIcon = () => {
  return (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      style={{ enableBackground: "new 0 0 512 512;" }}
    >
      <g>
        <g>
          <path
            d="M380.032,133.472l-112-128C264.992,2.016,260.608,0,256,0c-4.608,0-8.992,2.016-12.032,5.472l-112,128
        c-4.128,4.736-5.152,11.424-2.528,17.152C132.032,156.32,137.728,160,144,160h64v208c0,8.832,7.168,16,16,16h64
        c8.832,0,16-7.168,16-16V160h64c6.272,0,11.968-3.648,14.56-9.376C385.152,144.896,384.192,138.176,380.032,133.472z"
          />
        </g>
      </g>
      <g>
        <g>
          <path d="M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z" />
        </g>
      </g>
    </svg>
  );
};

export const BarsIcon = ({ size, color, onClick }) => {
  return (
    <svg
      onClick={onClick}
      height={size}
      viewBox="0 0 448 512"
      fill={color}
      style={{ cursor: "pointer" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
    </svg>
  );
};
