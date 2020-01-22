// import React from 'react';
// import uuidv4 from 'uuid/v4';

// const EditTractOwnership = ({ value = [], onChange = () => {} }) => {
//   return <h2>TODO</h2>;
// };
import React from 'react';
import uuidv4 from 'uuid/v4';

import EditTractOwnership from './';

//
  Add Mineral Interest, () => {
    const value = [
      {
        id: uuidv4(),
        owner: 'Luke Skywalker',
        interest: '50',
        lease: 'Tatooine Lease',
        npris: [],
      },
      {
        id: uuidv4(),
        owner: 'Leia Organa',
        interest: '5',
        lease: 'Alderaan Lease',
        npris: [],
      },
    ];

    render(<EditTractOwnership value={value} />);

    const lukeMineralInterest = (
      `mineralInterest-${value[0].id}`
    );

    const leiaMineralInterest = (
      `mineralInterest-${value[1].id}`
    );
  });

//
  Render Mineral Interest, () => {
    const value = [
      {
        id: uuidv4(),
        owner: 'Luke Skywalker',
        interest: '50',
        lease: 'Tatooine Lease',
        npris: [
          {
            id: uuidv4(),
            owner: 'Han Solo',
            interest: '10',
          },
        ],
      },
      {
        id: uuidv4(),
        owner: 'Leia Organa',
        interest: '5',
        lease: 'Alderaan Lease',
      },
    ];

    render(<EditTractOwnership value={value} />);

    const lukeMineralInterest = (
      `mineralInterest-${value[0].id}`
    );

    const leiaMineralInterest = (
      `mineralInterest-${value[1].id}`
    );

    const hanNPRI = (`npri-${value[0].npris[0].id}`);

  });

//
  Add Empty Mineral Interest Row, () => {
    let result;

    render(<EditTractOwnership onChange={v => (result = v)} />);

    const addMineralInterest = screen.getByText('Add Mineral Interest');
    fireEvent.click(addMineralInterest);
  });

//
  Add Empty Mineral Interest Row, () => {
    let result;

    render(<EditTractOwnership onChange={v => (result = v)} />);

    const addMineralInterest = ('Add Mineral Interest');
    onChange(addMineralInterest);

    const id = result[0].id;

    const ownerInput = (`mineralInterest-${id}.owner`);
    onChange(ownerInput, { target: { value: 'Luke Skywalker' } });

    const interestInput = (`mineralInterest-${id}.interest`);
    onChange(interestInput, { target: { value: '40' } });

    const leaseInput = (`mineralInterest-${id}.lease`);
    onChange(leaseInput, { target: { value: 'Tatooine Lease' } });
  });


//
  Add And Update Mineral Interest + NPRI row, () => {
    let result;

    render(<EditTractOwnership onChange={v => (result = v)} />);

    const addMineralInterest = ('Add Mineral Interest');
    onChange(addMineralInterest);

    const addNPRI = ('Add NPRI');
    onChange(addNPRI);

    const id = result[0].id;

    const ownerInput = (`mineralInterest-${id}.owner`);
    onChange(ownerInput, { target: { value: 'Luke Skywalker' } });

    const interestInput = (`mineralInterest-${id}.interest`);
    onChange(interestInput, { target: { value: '40' } });

    const leaseInput = (`mineralInterest-${id}.lease`);
    onChange(leaseInput, { target: { value: 'Tatooine Lease' } });

    const npriId = result[0].npris[0].id;

    const npriOwnerInput = (`npri-${npriId}.owner`);
    onChange(npriOwnerInput, { target: { value: 'Han Solo' } });

    const npriInterestInput = (`npri-${npriId}.interest`);
    onChange(npriInterestInput, { target: { value: '10' } });
  });


//
  Remove Mineral Interest Row, () => {
    let result;
    const value = [
      {
        id: uuidv4(),
        owner: 'Luke Skywalker',
        interest: '50',
        lease: 'Tatooine Lease',
      },
      {
        id: uuidv4(),
        owner: 'Leia Organa',
        interest: '5',
        lease: 'Alderaan Lease',
      },
    ];

    render(<EditTractOwnership value={value} onChange={v => (result = v)} />);

    const id = value[0].id;
    const removeButton = (`mineralInterest-${id}.remove`);
    onChange(removeButton);
  });


//
  Remove NPRI Row, () => {
    let result;
    const value = [
      {
        id: uuidv4(),
        owner: 'Luke Skywalker',
        interest: '50',
        lease: 'Tatooine Lease',
        npris: [
          {
            id: uuidv4(),
            owner: 'Han Solo',
            interest: '10',
          },
        ],
      },
      {
        id: uuidv4(),
        owner: 'Leia Organa',
        interest: '5',
        lease: 'Alderaan Lease',
      },
    ];

    render(<EditTractOwnership value={value} onChange={v => (result = v)} />);

    const id = value[0].npris[0].id;
    const removeButton = (`npri-${id}.remove`);
    onChange(removeButton);
  });
});

export default EditTractOwnership;
