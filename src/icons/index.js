import image2 from "../../src/assets/img/tech.png";
import image from "../../src/assets/img/active.png";
import dash from "../../src/assets/img/dash.png";
import updown from "../../src/assets/img/1123247-200.png";
import left from "../../src/assets/img/left.png";
import styled from "styled-components";



export const DashboardIcon = ()=>{
  return(
    <img src={dash} style={{ width:"20px", marginLeft:"0px"}}></img>
  );
};

export const UpDown = ({ size, up, onClick }) =>{
  return (
    <img 
      src={updown} 
      height={size} 
      onClick={onClick} 
      style={{ 
        cursor: "pointer",
        transform: up? "rotate(0deg)": "rotate(180deg)",
      }}
      >
      </img>
  );
}

export const UploadIcon = () => {
  return (
    <svg
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

export const DownloadIcon = ({ size, color }) => {
  return (
    <svg
      x="0px"
      y="0px"
      height={size}
      fill={color}
      viewBox="0 0 512 512"
      style={{ enableBackground: "new 0 0 512 512" }}
    >
      <g>
        <g>
          <path
            d="M484.078,27.923C466.072,9.917,442.131,0.001,416.666,0.002L95.334,0C42.766,0.002,0,42.769,0,95.333v321.333
			C0,469.233,42.768,512,95.334,512h321.332C469.233,512,512,469.233,512,416.666V95.335C512,69.87,502.084,45.929,484.078,27.923z
			 M165.865,217.494c5.857-5.857,15.354-5.857,21.213,0L241,271.416l-0.002-160.017c0-8.284,6.716-15,15-15c8.285,0,15,6.716,15,15
			L271,271.412l53.918-53.92c5.857-5.857,15.355-5.857,21.213,0c5.858,5.857,5.858,15.355,0.001,21.213l-79.526,79.528
			c-2.814,2.814-6.629,4.394-10.607,4.394c-3.977,0-7.793-1.58-10.605-4.394l-79.527-79.526
			C160.007,232.85,160.007,223.352,165.865,217.494z M400.602,415.6H111.4c-8.283,0-15-6.716-15-15s6.717-15,15-15h289.201
			c8.283,0,15,6.716,15,15C415.602,408.884,408.885,415.6,400.602,415.6z"
          />
        </g>
      </g>
    </svg>
  );
};

export const ImageIcon = ({ size }) => {
  return (
    <svg
      x="0px"
      y="0px"
      height={size}
      viewBox="0 0 256.4 256.4"
      style={{ enableBackground: "new 0 0 256.4 256.4" }}
    >
      <g>
        <path
          style={{ fill: "#4A566E" }}
          d="M38.2,0h180c19.6,0,35.6,16,35.6,35.6v185.2c0,19.6-16,35.6-35.6,35.6h-180
 c-19.6,0-35.6-16-35.6-35.6V35.2C2.6,16,18.6,0,38.2,0z"
        />
        <path
          style={{ fill: "#00B594" }}
          d="M118.6,167.6l-52.4-52.8L2.6,178.4V192v28.8c0,19.6,16,35.6,35.6,35.6h180c19.6,0,35.6-16,35.6-35.6
 V192v-39.6l-59.6-60L118.6,167.6z"
        />
        <circle style={{ fill: "#FFCC03" }} cx="117.4" cy="84.8" r="22.4" />
      </g>
    </svg>
  );
};

export const Tech=()=>{
  return (
      <img src={image2} style={{ width:"20px", marginLeft:"0px"}}></img>
  );
}


export const Basin=()=>{
  return (
    <img src={left} style={{ width:"20px", marginLeft:"0px"}}></img>
  );
}


export const Active=()=>{
  return (
      <img src={image} style={{ width:"20px", marginLeft:"0px"}}></img>
  );
}

