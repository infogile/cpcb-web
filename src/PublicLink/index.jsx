import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";
import styled from "styled-components";


const Table = styled.table`
margin-left: 20px;
font-family: Arial, Helvetica, sans-serif;
border-collapse: collapse;
width: 100%;
background: white;
border-spacing: 0px;
text-align: center;
`;

const Th = styled.th`
border-bottom: solid 1px #cccccc;
border-left: solid 1px #cccccc;
:first-child {
  border-left: none;
}
border: 1px solid #ddd;
padding: 8px;
padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #9e25b3;
  color: white;
`;

const Tr = styled.tr`
  color: ${(props) => props.Color};
  :nth-child(even) {
    background-color: #f2f2f2;
  }
  :hover {
    background: #dadada;
  }
`;

const Td = styled.td`
  color: #797979;
  padding: 20px 10px;
  font-size: ${(props) => props.fontSize};
  white-space: ${(props) => props.whiteSpace};
  text-align: center;
  border-left: solid 1px #cccccc;
  :first-child {
    border-left:;
  }
`;


export const PublicLink = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1z_2p9YiwpadxZ5O0i4Rb-phg3KZruvd_sVJMm9ef_p8",
      simpleSheet: true
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);

  console.log(data)

  return (
    <div style={{ marginBottom: "100px", marginRight: "261px", marginLeft:"233px" }}>
          <>
            <h3>Annual inspection of Grossly Polluting Industries (GPIs)</h3>
            <p>
              Grossly Polluting Industries (GPIs) are those industrial units having potential to generate pollution load of 100 kg/day and/or handling Hazardous Chemicals as specified under The Manufacture, Storage and Import of Hazardous Chemical Rules of 1989 and have potential to discharge into surface water bodies. To ensure compliance of effluent discharge standards by about 2357 GPIs having potential to discharge their effluent into river Ganga and its tributaries through drainage system and adequacy of functional effluent treatment plant (ETP), a programme of inspection of all GPIs has been taken up by CPCB. CPCB has engaged services of reputed technical institutes to ensure inspection of all GPIs operating in river Ganga main stem states and Yamuna basin.
            </p>
            <p>
              The team comprises of experts from technical institutes and officials from State Pollution Control Boards (SPCBs), State Mission Clean Ganga (SMCGs) and District Ganga Committees (DGCs). Inspection reports are provided to SPCBs for their scrutiny and action based on compliance status. 
            </p>
            <p>
            In 2020, about 1277 GPIs located in Yamuna river basin are also included for compliance verification. CPCB in consultation with concern SPCBs/SPCCs carried out inventorization of 1080 nos. of GPIs in Ganga main stem and 1277 GPIs in Yamuna basin. Inspection of grossly polluted industries (GPIs) located in river Ganga basin including river Yamuna in seven states i.e. Uttarakhand, Haryana, Delhi Uttar Pradesh, Bihar, Jharkhand and West Bengal is commenced from October, 2020. The status of inspection carried out by expert technical institutes and action taken by concerned SPCBs/PCC in 2020-21 is as below.
            </p>
            <Table>
            <thead>  
                <tr>
                  <Th>S. No.</Th>
                  <Th>States</Th>
                  <Th>Total No. of GPIs</Th>
                  <Th>Inspection Completed</Th>
                  <Th>Action initiated by SPCBs/PCC</Th>
                  <Th>Complied</Th>
                  <Th>Not Complied</Th>
                  <Th>Temporarily Closed</Th> 
                  <Th>Permanently Closed</Th>
                  <Th>Action pending with SPCBs/PCC</Th>
                </tr>
            </thead>
            <tbody>
                   {data.map((item,i) => (
                    <Tr key={i}>
                      <Td>{i+1}</Td>
                      <Td>{item.STATE}</Td>
                      <Td>{item.Total_Number_of_GPIs}</Td>
                      <Td>{item.Inspection_completed}</Td>
                      <Td>{item.Action_initiated_by_SPCB_PCC}</Td>                    
                      <Td>{item.Complied}</Td>
                      <Td>{item.Not_Complied}</Td>
                      <Td>{item.Temporary_closed}</Td>
                      <Td>{item.Permanently_closed}</Td>
                      <Td>{item.Action_pending_with_SPCB_PCC}</Td>
                    </Tr>
                    ))}
              </tbody>
            </Table>
            {/* <h3>Compliance status Yamuna GPIs</h3>
            <Table>
              <tbody>  
                <tr>
                  <Th>S. No.</Th>
                  <Th>State</Th>
                  <Th>Total No. of GPIs</Th>
                  <Th>Inspection Completed by TPAs</Th>
                  <Th>Report Submitted to SPCBs/PCC</Th>
                  <Th>Action Completed by SPCBs/PCC</Th>
                  <Th>Complied</Th>
                  <Th>Non Complied</Th>
                  <Th>Temporary Close</Th> 
                  <Th>Permanent Close</Th>
                  <Th>Action pending with SPCBs/PCC for more than 15 days</Th>
                  <Th>Action pending with SPCBs/PCC for more than 30 days</Th> 
                </tr>
                   {data.slice(9, 17).map((item,i) => (
                  <Tr key={i}>
                    <Td>{i+1}</Td>
                    <Td>{item.state}</Td>
                    <Td>{item.totalGPIs}</Td>
                    <Td>{item.insCompletedByTPAs}</Td>
                    <Td>{item.reportSubToSPCB}</Td>                    
                    <Td>{item.actionCompleted}</Td>
                    <Td>{item.Complied}</Td>
                    <Td>{item.NonComplied}</Td>
                    <Td>{item.temporaryClose}</Td>
                    <Td>{item.permanentClose}</Td>
                    <Td>{item.actionPending15}</Td>
                    <Td>{item.actionPending30}</Td> 
                  </Tr>
                    ))}
              </tbody>
            </Table>
            <h3>State & Sector wise 1080 GPIs in river Ganga main stem inventorized during 2020</h3>
            <Table>
              <tbody>  
                <tr>
                  <Th >Sector</Th>
                  <Th>Bihar</Th>
                  <Th>Jharkhand</Th>
                  <Th>Uttar Pradesh</Th>
                  <Th>Uttarakhand</Th>
                  <Th>West Bengal</Th> 
                  <Th>Grand Total</Th>   
                </tr>
                    <Tr>
                      <Td>Chemical</Td>
                      <Td>0</Td>
                      <Td>1</Td>
                      <Td>10</Td>
                      <Td>2</Td>
                      <Td>2</Td>
                      <Td>15</Td>
                    </Tr>
                    <Tr>
                      <Td>Distillery</Td>
                      <Td>9</Td>
                      <Td>1</Td>
                      <Td>55</Td>
                      <Td>3</Td>
                      <Td>3</Td>
                      <Td>71</Td>
                    </Tr>
                    <Tr>
                      <Td>Fertilizer</Td>
                      <Td>0</Td>
                      <Td>0</Td>
                      <Td>6</Td>
                      <Td>0</Td>
                      <Td>1</Td>
                      <Td>7</Td>
                    </Tr>
                    <Tr>
                      <Td>Food & Beverages</Td>
                      <Td>16</Td>
                      <Td>1</Td>
                      <Td>46</Td>
                      <Td>5</Td>
                      <Td>8</Td>
                      <Td>76</Td>
                    </Tr>
                    <Tr>
                      <Td> Oil & Refinery </Td>
                      <Td>1</Td>
                      <Td>0</Td>
                      <Td>0</Td>
                      <Td>0</Td>
                      <Td>1</Td>
                      <Td>2</Td>
                    </Tr>
                    <Tr>
                      <Td>Others</Td>
                      <Td>1</Td>
                      <Td>2</Td>
                      <Td>28</Td>
                      <Td>7</Td>
                      <Td>10</Td>
                      <Td>48</Td>
                    </Tr>
                    <Tr>
                      <Td>Pesticide</Td>
                      <Td>0</Td>
                      <Td>0</Td>
                      <Td>2</Td>
                      <Td>0</Td>
                      <Td>1</Td>
                      <Td>3</Td>
                    </Tr>
                    <Tr>
                      <Td>Petrochemical</Td>
                      <Td>0</Td>
                      <Td>0</Td>
                      <Td>0</Td>
                      <Td>0</Td>
                      <Td>3</Td>
                      <Td>3</Td>
                    </Tr>
                    <Tr>
                      <Td>Pharmaceuticals</Td>
                      <Td>0</Td>
                      <Td>0</Td>
                      <Td>2</Td>
                      <Td>1</Td>
                      <Td>1</Td>
                      <Td>4</Td>
                    </Tr>
                    <Tr>
                      <Td>Pulp & Paper</Td>
                      <Td>6</Td>
                      <Td>0</Td>
                      <Td>46</Td>
                      <Td>29</Td>
                      <Td>19</Td>
                      <Td>100</Td>
                    </Tr>
                    <Tr>
                      <Td>Slaughter House</Td>
                      <Td>4</Td>
                      <Td>0</Td>
                      <Td>23</Td>
                      <Td>0</Td>
                      <Td>0</Td>
                      <Td>27</Td>
                    </Tr>
                    <Tr>
                      <Td>Sugar</Td>
                      <Td>11</Td>
                      <Td>0</Td>
                      <Td>107</Td>
                      <Td>5</Td>
                      <Td>2</Td>
                      <Td>125</Td>
                    </Tr>
                    <Tr>
                      <Td>Tannery</Td>
                      <Td>2</Td>
                      <Td>0</Td>
                      <Td>400</Td>
                      <Td>0</Td>
                      <Td>0</Td>
                      <Td>402</Td>
                    </Tr>
                    <Tr>
                      <Td>Textile</Td>
                      <Td>3</Td>
                      <Td>0</Td>
                      <Td>188</Td>
                      <Td>3</Td>
                      <Td>3</Td>
                      <Td>197</Td>
                    </Tr>
                    <Tr>
                      <Td>Grand Total</Td>
                      <Td>53</Td>
                      <Td>5</Td>
                      <Td>913</Td>
                      <Td>55</Td>
                      <Td>54</Td>
                      <Td>1080</Td>
                    </Tr>
              </tbody>
            </Table>
            <h3>State & Sector wise 1277 GPIs in river Yamuna basin inventorized during 2020</h3>
            <Table>
              <tbody>  
                <tr>
                  <Th >Sector</Th>
                  <Th>Delhi</Th>
                  <Th>Haryana</Th>
                  <Th>Uttar Pradesh</Th>
                  <Th>Uttarakhand</Th> 
                  <Th>Grand Total</Th>   
                </tr>
                    <Tr>
                      <Td>Chemical</Td>
                      <Td>0</Td>
                      <Td>5</Td>
                      <Td>0</Td>
                      <Td>0</Td>
                      <Td>5</Td>
                    </Tr>
                    <Tr>
                      <Td>Distillery</Td>
                      <Td>0</Td>
                      <Td>12</Td>
                      <Td>3</Td>
                      <Td>0</Td>
                      <Td>15</Td>
                    </Tr>
                    <Tr>
                      <Td>Fertilizer</Td>
                      <Td>0</Td>
                      <Td>1</Td>
                      <Td>0</Td>
                      <Td>0</Td>
                      <Td>1</Td>
                    </Tr>
                    <Tr>
                      <Td>Food & Beverages</Td>
                      <Td>3</Td>
                      <Td>51</Td>
                      <Td>30</Td>
                      <Td>0</Td>
                      <Td>84</Td>
                    </Tr>
                    <Tr>
                      <Td> Oil & Refinery </Td>
                      <Td>0</Td>
                      <Td>1</Td>
                      <Td>1</Td>
                      <Td>0</Td>
                      <Td>2</Td>
                    </Tr>
                    <Tr>
                      <Td>Others</Td>
                      <Td>211</Td>
                      <Td>406</Td>
                      <Td>15</Td>
                      <Td>0</Td>
                      <Td>632</Td>
                    </Tr>
                    <Tr>
                      <Td>Pesticide</Td>
                      <Td>0</Td>
                      <Td>0</Td>
                      <Td>0</Td>
                      <Td>1</Td>
                      <Td>1</Td>
                    </Tr>
                    <Tr>
                      <Td>Petrochemical</Td>
                      <Td>0</Td>
                      <Td>1</Td>
                      <Td>1</Td>
                      <Td>0</Td>
                      <Td>2</Td>
                    </Tr>
                    <Tr>
                      <Td>Pharmaceuticals</Td>
                      <Td>0</Td>
                      <Td>7</Td>
                      <Td>0</Td>
                      <Td>0</Td>
                      <Td>7</Td>
                    </Tr>
                    <Tr>
                      <Td>Pulp & Paper</Td>
                      <Td>0</Td>
                      <Td>5</Td>
                      <Td>10</Td>
                      <Td>0</Td>
                      <Td>15</Td>
                    </Tr>
                    <Tr>
                      <Td>Slaughter House</Td>
                      <Td>2</Td>
                      <Td>0</Td>
                      <Td>20</Td>
                      <Td>0</Td>
                      <Td>22</Td>
                    </Tr>
                    <Tr>
                      <Td>Sugar</Td>
                      <Td>0</Td>
                      <Td>6</Td>
                      <Td>5</Td>
                      <Td>0</Td>
                      <Td>11</Td>
                    </Tr>
                    <Tr>
                      <Td>Tannery</Td>
                      <Td>1</Td>
                      <Td>18</Td>
                      <Td>7</Td>
                      <Td>0</Td>
                      <Td>26</Td>
                    </Tr>
                    <Tr>
                      <Td>Textile</Td>
                      <Td>50</Td>
                      <Td>319</Td>
                      <Td>85</Td>
                      <Td>0</Td>
                      <Td>454</Td>
                    </Tr>
                    <Tr>
                      <Td>Grand Total</Td>
                      <Td>267</Td>
                      <Td>832</Td>
                      <Td>177</Td>
                      <Td>1</Td>
                      <Td>1277</Td>
                    </Tr>
              </tbody>
            </Table> */}
            {/* <a href="https://infogile.com/">Infogile</a> */}
          </>
    </div>
  );
};

export default PublicLink;
