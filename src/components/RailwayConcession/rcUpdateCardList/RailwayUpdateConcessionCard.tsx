// import React, { useState } from "react";
// import styles from "./RailwayUpdateConcession.module.css";
// import ExtendDate from "./ExtendDate";
// import CancelConcession from "./CancelConcession";
// import DocumentInfo from "../getInfo/DocumentInfo";
// import Spinner from "../Spinner";

// const RailwayUpdateConcessionCard = ({ request, fetchAllEnquiries }) => {
//   const [isInfoWindowVisible, setInfoWindowVisibility] = useState(false);
//   const [infoWindowText, setInfoWindowText] = useState("");
//   const handleCloseInfoWindow = () => {
//     setInfoWindowVisibility(false);
//     setLoading(false);
//   };

//   const handleApproveClick = async () => {
//     setInfoWindowText(
//       <ExtendDate
//         request={request}
//         handleCloseInfoWindow={handleCloseInfoWindow}
//         fetchAllEnquiries={fetchAllEnquiries}
//       />
//     );
//     setInfoWindowVisibility(true);
//   };
//   const [loading, setLoading] = useState(false);

//   const handleRejectClick = () => {
//     setInfoWindowText(
//       <CancelConcession
//         request={request}
//         handleCloseInfoWindow={handleCloseInfoWindow}
//         fetchAllEnquiries={fetchAllEnquiries}
//       />
//     );
//     setInfoWindowVisibility(true);
//   };

//   const convertDate = (date) => {
//     const dobTimestamp = date;
//     const dobMilliseconds =
//       dobTimestamp.seconds * 1000 + dobTimestamp.nanoseconds / 1e6;
//     const dobDate = new Date(dobMilliseconds);
//     const dateObj = new Date(dobDate);
//     const day = dateObj.getDate();
//     const month = dateObj.getMonth() + 1;
//     const year = dateObj.getFullYear();

//     return `${day}/${month}/${year}`;
//   };

//   const handleIDCardClick = async ({ heading, url }) => {
//     setInfoWindowText(
//       <DocumentInfo
//         heading={heading}
//         documentURL={url}
//         handleCloseInfoWindow={handleCloseInfoWindow}
//       />
//     );
//     setInfoWindowVisibility(true);
//   }

//   return (
//     <div className={styles.railwayConcessionCard}>
//       {loading && <Spinner />}
//       <div className={styles.railwayConcessionTitle}>
//         <p className={styles.nameAndGender}>
//           <span className={styles.name}>
//             {request.firstName} {request.middleName} {request.lastName}
//           </span>
//           <span className={styles.gender}>{request.gender}</span>
//           <span className={styles.western}>{request.travelLane}</span>
//         </p>
//       </div>
//       <hr className={styles.railwayConcessionCardHr} />
//       <table className={styles.railwayConcessionCardTable}>
//         <tbody>
//           <tr>
//             <td className={styles.railwayConcessionCardTableCell}>From:</td>
//             <td className={styles.railwayConcessionCardTableCell}>To:</td>
//             <td className={styles.railwayConcessionCardTableCell}>Class:</td>
//             <td className={styles.railwayConcessionCardTableCell}>Mode:</td>
//             <td className={styles.railwayConcessionCardTableCell}>
//               Date of Issue:
//             </td>
//             <td className={styles.railwayConcessionCardTableCell}>Branch:</td>
//             <td className={styles.railwayConcessionCardTableCell}>
//               Current Year:
//             </td>
//           </tr>

//           <tr>
//             <td className={styles.railwayConcessionCardTableCell2}>
//               {request.from} <hr className={styles.horizontalLine} />
//             </td>
//             <td className={styles.railwayConcessionCardTableCell2}>
//               {request.to}
//             </td>
//             <td className={styles.railwayConcessionCardTableCell2}>
//               {request.class}
//             </td>
//             <td className={styles.railwayConcessionCardTableCell2}>
//               {request.duration}
//             </td>
//             <td className={styles.railwayConcessionCardTableCell2}>
//               {request.lastPassIssued && convertDate(request.lastPassIssued)}
//             </td>
//             <td className={styles.railwayConcessionCardTableCell2}>
//               {request.branch}
//             </td>
//             <td className={styles.railwayConcessionCardTableCell2}>
//               {request.gradyear}
//             </td>
//           </tr>
//         </tbody>
//       </table>

//       <div className={styles.railwayConcessionCardInfo}>
//         <div className={styles.railwayAdress}>
//           <p className={styles.railwayConcessionCardTableCell}>Address:</p>
//           <p className={styles.railwayConcessionCardAddress}>
//             {request.address}
//           </p>
//         </div>

//         <div className={styles.railwayDOB}>
//           <p className={styles.railwayConcessionCardTableCell}>
//             Date of Birth:
//           </p>
//           <p className={styles.railwayConcessionCardAddress}>
//             {convertDate(request.dob)}
//           </p>
//         </div>

//         <div className={styles.railwayAge}>
//           <p className={styles.railwayConcessionCardTableCell}>Age:</p>
//           <p className={styles.railwayConcessionCardAddress}>
//             {request.ageYears} Years & {request.ageMonths} Months
//           </p>
//         </div>

//         <div className={styles.railwayPhoneNumber}>
//           <p className={styles.railwayConcessionCardTableCell}>Phone Number:</p>
//           <p className={styles.railwayConcessionCardAddress}>
//             {request.phoneNum}
//           </p>
//         </div>
//       </div>
//       <hr className={styles.railwayConcessionCardHr} />
//       <div className={styles.railwayConcessionCardFooter}>
//         <div className={styles.noDocs}>
//           <p className={styles.railwayConcessionCardTableCell}>Documents:</p>
//           <ul className={styles.railwayConcessionCardDocumentsList}>
//             <li onClick={() => handleIDCardClick({ heading: 'Id Card', url: request.idCardURL })}>ID Card</li>
//             <li onClick={() => handleIDCardClick({ heading: 'Previous Pass', url: request.previousPassURL })}>Previous Pass</li>
//             <li onClick={() => handleIDCardClick({ heading: 'Previous Pass', url: '#' })}>Additional documents</li>
//           </ul>
//         </div>
//         <div className={styles.railwayConcessionCardFooterButtonDiv}>
//           <button
//             className={styles.railwayConcessionCardApproveButton}
//             onClick={handleApproveClick}
//           >
//             Extend Date
//           </button>
//           <button
//             className={styles.railwayConcessionCardRejectButton}
//             onClick={handleRejectClick}
//           >
//             Reject
//           </button>
//         </div>
//       </div>

//       {isInfoWindowVisible && (
//         <div>
//           <div className={styles.overlay}>
//             <div className={styles.modal}>
//               <div>{infoWindowText}</div>
//               {/* <button onClick={handleCloseInfoWindow}>Go Back</button> */}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RailwayUpdateConcessionCard;