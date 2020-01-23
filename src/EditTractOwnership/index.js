import React from 'react';
import uuidv4 from 'uuid/v4';
import Icon from '../Icon/index';
//

const TractOwnershipHeader = () => (
  <thead>
    <tr>
      <th>Owner</th>
      <th>Mineral Interest</th>
      <th>NPRI</th>
      <th>Lease</th>
    </tr>
  </thead>
);

const EditTractOwnership = ({ value = [], onChange = () => {} }) => {
  return (
    <table>
      <TractOwnershipHeader />
      <tbody>
        <tr>
          <td>Luke Skywalker</td>
          <td>0.5</td>
          <td></td>
          <td>Tatooine Lease</td>
        </tr>
        <tr>
          <td>
            <Icon icon="indent" />
            <span>Leia Organa</span>
          </td>
          <td></td>
          <td>.45</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};
//
//
// import React, { Component } from 'react'
// // import React from 'react';
// import uuidv4 from 'uuid/v4';
//
// import EditTractOwnership from './';
//
//
// const value = [
//   {
//     id: uuidv4(),
//     owner: 'Luke Skywalker',
//     interest: '50',
//     lease: 'Tatooine Lease',
//     npris: [],
//   },
//   {
//     id: uuidv4(),
//     owner: 'Leia Organa',
//     interest: '5',
//     lease: 'Alderaan Lease',
//     npris: [],
//   },
// ];
//
// class AddMineralInterest extends Component {
//   render () {
//     return
//     {value.id};
//
//     const lukeMineralInterest = (
//       `mineralInterest-${value[0].id}`
//     );
//
//     const leiaMineralInterest = (
//       `mineralInterest-${value[1].id}`
//     );
// };
//
//
//   RenderMineralInterest, () => {
//     const value = [
//       {
//         id: uuidv4(),
//         owner: 'Luke Skywalker',
//         interest: '50',
//         lease: 'Tatooine Lease',
//         npris: [
//           {
//             id: uuidv4(),
//             owner: 'Han Solo',
//             interest: '10',
//           },
//         ],
//       },
//       {
//         id: uuidv4(),
//         owner: 'Leia Organa',
//         interest: '5',
//         lease: 'Alderaan Lease',
//       },
//     ];
//
//     render(<EditTractOwnership value={value} />);
//
//     const lukeMineralInterest = (
//       `mineralInterest-${value[0].id}`
//     );
//
//     const leiaMineralInterest = (
//       `mineralInterest-${value[1].id}`
//     );
//
//     const hanNPRI = (`npri-${value[0].npris[0].id}`);
//   });
//
// //
//   AddEmptyMineralInterestRow, () => {
//     let result;
//
//     render(<EditTractOwnership onChange={v => (result = v)} />);
//
//     const addMineralInterest =
//     onChange(addMineralInterest);
//   });
//
// //
//   AddEmptyMineralInterestRow, () => {
//     let result;
//
//     render(<EditTractOwnership onChange={v => (result = v)} />);
//
//     const addMineralInterest =
//     onChange(addMineralInterest);
//
//     const id = result[0].id;
//
//     const ownerInput =
//     onChange(ownerInput, { target: { value: 'Luke Skywalker' } });
//
//     const interestInput =
//     onChange(interestInput, { target: { value: '40' } });
//
//     const leaseInput =
//     onChange(leaseInput, { target: { value: 'Tatooine Lease' } });
//   });
//
//
// //
//   AddAndUpdateMineralInterest + NPRI row, () => {
//     let result;
//
//     render(<EditTractOwnership onChange={v => (result = v)} />);
//
//     const addMineralInterest =
//     onChange(addMineralInterest);
//
//     const addNPRI =
//     onChange(addNPRI);
//
//     const id = result[0].id;
//
//     const ownerInput =
//     onChange(ownerInput, { target: { value: 'Luke Skywalker' } });
//
//     const interestInput =
//     onChange(interestInput, { target: { value: '40' } });
//
//     const leaseInput =
//     onChange(leaseInput, { target: { value: 'Tatooine Lease' } });
//
//     const npriId = result[0].npris[0].id;
//
//     const npriOwnerInput =
//     onChange(npriOwnerInput, { target: { value: 'Han Solo' } });
//
//     const npriInterestInput =
//     onChange(npriInterestInput, { target: { value: '10' } });
//   });
//
//
// //
//   Remove Mineral Interest Row, () => {
//     let result;
//     const value = [
//       {
//         id: uuidv4(),
//         owner: 'Luke Skywalker',
//         interest: '50',
//         lease: 'Tatooine Lease',
//       },
//       {
//         id: uuidv4(),
//         owner: 'Leia Organa',
//         interest: '5',
//         lease: 'Alderaan Lease',
//       },
//     ];
//
//     render(<EditTractOwnership value={value} onChange={v => (result = v)} />);
//
//     const id = value[0].id;
//     const removeButton =
//     onChange(removeButton);
//   });
//
//
// //
//   Remove NPRI Row, () => {
//     let result;
//     const value = [
//       {
//         id: uuidv4(),
//         owner: 'Luke Skywalker',
//         interest: '50',
//         lease: 'Tatooine Lease',
//         npris: [
//           {
//             id: uuidv4(),
//             owner: 'Han Solo',
//             interest: '10',
//           },
//         ],
//       },
//       {
//         id: uuidv4(),
//         owner: 'Leia Organa',
//         interest: '5',
//         lease: 'Alderaan Lease',
//       },
//     ];
//
//     render(<EditTractOwnership value={value} onChange={v => (result = v)} />);
//
//     const id = value[0].npris[0].id;
//     const removeButton =
//     onChange(removeButton);
//   });
// });
//
export default EditTractOwnership;
